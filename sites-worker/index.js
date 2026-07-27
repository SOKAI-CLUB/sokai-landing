const FRANCOPHONE_COUNTRIES = new Set([
  "AD", "BE", "BJ", "BF", "BI", "BL", "CA", "CD", "CF", "CG", "CH", "CI",
  "CM", "DJ", "DZ", "FR", "GA", "GF", "GN", "GP", "GQ", "HT", "KM", "LB",
  "LU", "MA", "MC", "MF", "MG", "ML", "MQ", "MU", "NC", "NE", "PF", "PM",
  "RE", "RW", "SC", "SN", "TD", "TG", "TN", "VU", "WF", "YT",
]);

function getLocale(request) {
  const country = request.cf?.country ?? request.headers.get("CF-IPCountry");

  if (country && country !== "XX" && country !== "T1") {
    return FRANCOPHONE_COUNTRIES.has(country.toUpperCase()) ? "fr" : "en";
  }

  const primaryLanguage = request.headers
    .get("Accept-Language")
    ?.split(",")[0]
    ?.trim()
    ?.toLowerCase();

  return primaryLanguage?.startsWith("fr") ? "fr" : "en";
}

async function serveLocalizedHome(request, env, locale) {
  const requestUrl = new URL(request.url);
  const assetUrl = new URL(`/${locale}.html`, requestUrl);
  const assetResponse = await env.ASSETS.fetch(new Request(assetUrl, request));
  const headers = new Headers(assetResponse.headers);

  headers.set("Cache-Control", "private, no-store");
  headers.set("Content-Language", locale);
  headers.set("Vary", "CF-IPCountry, Accept-Language");

  const response = new Response(assetResponse.body, {
    status: assetResponse.status,
    statusText: assetResponse.statusText,
    headers,
  });

  return new HTMLRewriter()
    .on("html", {
      element(element) {
        element.setAttribute("lang", locale);
      },
    })
    .transform(response);
}

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const explicitLocale = url.pathname.match(/^\/(fr|en)\/?$/)?.[1];

    if (url.pathname === "/" || explicitLocale) {
      return serveLocalizedHome(request, env, explicitLocale ?? getLocale(request));
    }

    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return response;
    }

    if (url.pathname.includes(".")) {
      return response;
    }

    return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
  },
};

export default worker;
