const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return response;
    }

    const url = new URL(request.url);
    if (url.pathname.includes(".")) {
      return response;
    }

    return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
  },
};

export default worker;
