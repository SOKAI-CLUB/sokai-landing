"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Camera,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Download,
  Dumbbell,
  Flame,
  Gauge,
  Goal,
  LineChart,
  Mail,
  Menu,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAndroid, FaApple } from "react-icons/fa";

const DOWNLOAD_URL = "https://linktr.ee/sokai_club";
const DEMO_URL = "https://calendly.com/makses/sokai";

export type Locale = "fr" | "en";

const tx = (locale: Locale, fr: string, en: string) => (locale === "fr" ? fr : en);

const getAppStoreUrl = (locale: Locale) =>
  locale === "fr"
    ? "https://apps.apple.com/fr/app/sokai/id6759445678"
    : "https://apps.apple.com/app/sokai/id6759445678";

const getPlayStoreUrl = (locale: Locale) =>
  `https://play.google.com/store/apps/details?id=com.sokai.app&hl=${locale}`;

const getScreens = (locale: Locale) => [
  {
    src: "/app-start.png",
    label: tx(locale, "Démarrage", "Kick-off"),
    kicker: tx(locale, "Entre dans le jeu", "Get in the game"),
    copy: tx(
      locale,
      "Une expérience immédiate, pensée pour donner envie de toucher le ballon.",
      "An instant experience designed to get you on the ball.",
    ),
  },
  {
    src: "/app-training.png",
    label: tx(locale, "Parcours", "Training path"),
    kicker: tx(locale, "Progresse à ton rythme", "Improve at your own pace"),
    copy: tx(
      locale,
      "Des exercices courts, des niveaux clairs et une progression visible.",
      "Short drills, clear levels and progress you can see.",
    ),
  },
  {
    src: "/app-ranking.png",
    label: tx(locale, "Meilleur XI", "Best XI"),
    kicker: tx(locale, "Mesure-toi aux autres", "Test yourself against others"),
    copy: tx(
      locale,
      "Classements, ligues et défis transforment chaque répétition en motivation.",
      "Rankings, leagues and challenges turn every repetition into motivation.",
    ),
  },
  {
    src: "/app-profile.png",
    label: tx(locale, "Profil & stats", "Profile & stats"),
    kicker: tx(locale, "Prouve ta progression", "Prove your progress"),
    copy: tx(
      locale,
      "XP, temps de jeu, jongles et carte joueur réunis dans un seul profil.",
      "XP, play time, keepy-uppies and your player card, all in one profile.",
    ),
  },
  {
    src: "/app-streak.png",
    label: tx(locale, "Série", "Streak"),
    kicker: tx(locale, "Construis une habitude", "Build a habit"),
    copy: tx(
      locale,
      "Les séries et le calendrier rendent la régularité simple et concrète.",
      "Streaks and the calendar make consistency simple and tangible.",
    ),
  },
];

const getPlayerBenefits = (locale: Locale) => [
  {
    icon: Camera,
    number: "01",
    title: tx(locale, "La caméra compte", "The camera keeps count"),
    copy: tx(
      locale,
      "Elle détecte tes mouvements directement sur l'appareil. Aucun capteur ni équipement spécial.",
      "It detects your movements directly on your device. No sensors or special equipment.",
    ),
  },
  {
    icon: Gauge,
    number: "02",
    title: tx(locale, "Chaque effort compte", "Every effort counts"),
    copy: tx(
      locale,
      "Répétitions, scores, temps d'entraînement et XP rendent les progrès visibles.",
      "Repetitions, scores, training time and XP make your progress visible.",
    ),
  },
  {
    icon: Trophy,
    number: "03",
    title: tx(locale, "Le jeu motive", "The game keeps you motivated"),
    copy: tx(
      locale,
      "Niveaux, séries, cartes joueur, classements et défis donnent envie de revenir demain.",
      "Levels, streaks, player cards, rankings and challenges keep you coming back.",
    ),
  },
];

const getClubOffers = (locale: Locale) => [
  {
    tag: tx(locale, "Sans investissement club", "No upfront club investment"),
    title: tx(locale, "Club Partenaire", "Club Partner"),
    price: "20%",
    suffix: tx(locale, "de commission récurrente dès le départ", "recurring commission from day one"),
    description: tx(
      locale,
      "Recommandez SOKAI à vos joueurs et familles avec un lien ou code dédié.",
      "Recommend SOKAI to your players and families using a dedicated link or code.",
    ),
    features: [
      tx(locale, "Tarifs préférentiels pour votre communauté", "Preferential rates for your community"),
      tx(locale, "Suivi des abonnements attribués au club", "Tracking of subscriptions attributed to your club"),
      tx(locale, "Contenus co-créés pendant la saison", "Co-created content throughout the season"),
      tx(locale, "Revenus additionnels récurrents", "Additional recurring revenue"),
    ],
    cta: tx(locale, "Devenir partenaire", "Become a partner"),
  },
  {
    tag: tx(locale, "Pour équiper une équipe", "Equip your team"),
    title: "Club App",
    price: "199 $",
    suffix: tx(locale, "/ mois · jusqu'à 20 joueurs", "/ month · up to 20 players"),
    description: tx(
      locale,
      "Prolongez vos séances à la maison et gardez une vue claire sur l'activité du groupe.",
      "Extend training at home and keep a clear view of your squad's activity.",
    ),
    features: [
      tx(locale, "Bibliothèque SOKAI en accès illimité", "Unlimited access to the SOKAI library"),
      tx(locale, "Exercices assignés par le coach", "Coach-assigned drills"),
      tx(locale, "Scores, répétitions et progression", "Scores, repetitions and progress"),
      tx(locale, "Dashboard et classement interne", "Dashboard and internal leaderboard"),
    ],
    cta: tx(locale, "Demander une démo", "Request a demo"),
    featured: true,
  },
  {
    tag: tx(locale, "Votre méthode dans SOKAI", "Your methodology in SOKAI"),
    title: tx(locale, "Exercices sur mesure", "Custom drills"),
    price: "299 $",
    suffix: tx(locale, "à partir de", "starting from"),
    description: tx(
      locale,
      "Co-construisez des exercices alignés avec les objectifs et la pédagogie de votre club.",
      "Co-create drills aligned with your club's goals and coaching philosophy.",
    ),
    features: [
      tx(locale, "Mécaniques définies avec votre staff", "Training mechanics defined with your staff"),
      tx(locale, "Niveaux, consignes et objectifs personnalisés", "Custom levels, instructions and goals"),
      tx(locale, "Durée, répétitions et scoring configurés", "Configured duration, repetitions and scoring"),
      tx(locale, "Intégration directe dans l'application", "Direct integration into the app"),
    ],
    cta: tx(locale, "Demander un devis", "Request a quote"),
  },
];

function StoreButton({
  href,
  store,
  locale,
  compact = false,
}: {
  href: string;
  store: "App Store" | "Google Play";
  locale: Locale;
  compact?: boolean;
}) {
  return (
    <a
      className={`store-button store-button--${store === "App Store" ? "apple" : "google"}${compact ? " store-button--compact" : ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={tx(locale, `Télécharger SOKAI sur ${store}`, `Download SOKAI on ${store}`)}
    >
      {locale === "fr" ? (
        <Image
          src={store === "App Store" ? "/app-store-badge.svg" : "/google-play-badge.png"}
          alt={store === "App Store" ? "Télécharger dans l’App Store" : "Disponible sur Google Play"}
          width={store === "App Store" ? 250 : 646}
          height={store === "App Store" ? 83 : 250}
          className="store-button__badge"
        />
      ) : (
        <span className="store-button__english">
          {store === "App Store" ? (
            <FaApple aria-hidden="true" />
          ) : (
            <FaAndroid aria-hidden="true" />
          )}
          <span>
            <small>{store === "App Store" ? "Download on the" : "GET IT ON"}</small>
            <strong>{store}</strong>
          </span>
        </span>
      )}
    </a>
  );
}

function PhoneFrame({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="phone-frame__speaker" />
      <div className="phone-frame__screen">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 72vw, 330px"
          className="phone-frame__image"
          priority={priority}
        />
      </div>
      <span className="phone-frame__button phone-frame__button--one" />
      <span className="phone-frame__button phone-frame__button--two" />
    </div>
  );
}

function Nav({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [clubMode, setClubMode] = useState(false);

  useEffect(() => {
    const clubSection = document.getElementById("clubs");
    if (!clubSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setClubMode(entry.isIntersecting),
      { rootMargin: "-18% 0px -54% 0px" },
    );

    observer.observe(clubSection);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-nav">
      <div className="nav-shell">
        <Link
          href="#top"
          className="brand"
          aria-label={tx(locale, "SOKAI, retour en haut", "SOKAI, back to top")}
        >
          <Image src="/sokaiclub.png" alt="" width={52} height={52} priority />
          <span>SOKAI</span>
        </Link>

        <nav
          className="nav-links"
          aria-label={tx(locale, "Navigation principale", "Main navigation")}
        >
          <Link href="#players">{tx(locale, "Pour les joueurs", "For players")}</Link>
          <Link href="#clubs">{tx(locale, "Pour les clubs", "For clubs")}</Link>
          <Link href="#offers">{tx(locale, "Les offres", "Plans")}</Link>
        </nav>

        <div className="nav-actions">
          <AnimatePresence initial={false}>
            {clubMode && (
              <motion.a
                className="nav-demo-cta"
                href={DEMO_URL}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
              >
                {tx(locale, "Réserver une démo", "Book a demo")}
              </motion.a>
            )}
          </AnimatePresence>
          <a className="nav-cta" href={DOWNLOAD_URL} target="_blank" rel="noreferrer">
            <span>{tx(locale, "Télécharger l'app", "Download the app")}</span><ArrowRight size={17} />
          </a>
        </div>

        <button
          className="nav-menu"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open
            ? tx(locale, "Fermer le menu", "Close menu")
            : tx(locale, "Ouvrir le menu", "Open menu")}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <Link href="#players" onClick={() => setOpen(false)}>
              {tx(locale, "Pour les joueurs", "For players")}
            </Link>
            <Link href="#clubs" onClick={() => setOpen(false)}>
              {tx(locale, "Pour les clubs", "For clubs")}
            </Link>
            <Link href="#offers" onClick={() => setOpen(false)}>
              {tx(locale, "Les offres", "Plans")}
            </Link>
            <a href={DOWNLOAD_URL} target="_blank" rel="noreferrer">
              {tx(locale, "Télécharger l'app", "Download the app")}
            </a>
            <a href={DEMO_URL} target="_blank" rel="noreferrer">
              {tx(locale, "Réserver une démo club", "Book a club demo")}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero({ locale }: { locale: Locale }) {
  const reduceMotion = useReducedMotion();
  const appStoreUrl = getAppStoreUrl(locale);
  const playStoreUrl = getPlayStoreUrl(locale);

  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />

      <div className="section-shell hero__inner">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="eyebrow">
            <span className="eyebrow__dot" /> {tx(
              locale,
              "L'app d'entraînement football est disponible",
              "The football training app is here",
            )}
          </div>
          <h1>
            20 minutes.
            <span>{tx(locale, "Un ballon. Ton téléphone.", "One ball. Your phone.")}</span>
            <em>{tx(locale, "Progresse.", "Improve.")}</em>
          </h1>
          <p className="hero__lead">
            {tx(
              locale,
              "SOKAI transforme l'entraînement à la maison en jeu : la caméra suit, le score mesure, la progression motive.",
              "SOKAI turns training at home into a game: the camera tracks, the score measures and your progress keeps you motivated.",
            )}
          </p>

          <div
            className="hero__paths"
            aria-label={tx(locale, "Choisir votre parcours", "Choose your path")}
          >
            <a href="#players" className="hero-path hero-path--player">
              <Target size={18} /> {tx(locale, "Je suis joueur", "I'm a player")}
            </a>
            <a href="#clubs" className="hero-path hero-path--club">
              <Users size={18} /> {tx(locale, "Je suis club / coach", "I'm a club / coach")}
            </a>
          </div>

          <div className="hero__actions">
            <StoreButton href={appStoreUrl} store="App Store" locale={locale} />
            <StoreButton href={playStoreUrl} store="Google Play" locale={locale} />
          </div>

          <div
            className="hero__proofs"
            aria-label={tx(locale, "Avantages clés", "Key benefits")}
          >
            <span><Check size={15} /> {tx(locale, "Sans capteur", "No sensors")}</span>
            <span><Check size={15} /> {tx(locale, "À la maison", "Train at home")}</span>
            <span><Check size={15} /> iOS & Android</span>
          </div>
        </motion.div>

        <div
          className="hero__visual"
          aria-label={tx(locale, "Aperçu de l'application SOKAI", "Preview of the SOKAI app")}
        >
          <motion.div
            className="hero-phone-wrap"
            initial={{ opacity: 0, scale: 0.88, rotate: 5 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: reduceMotion ? 2 : [2, -1, 2],
              y: reduceMotion ? 0 : [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.2 },
              scale: { duration: 0.7, delay: 0.2 },
              rotate: { duration: 7, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" },
              y: { duration: 5, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" },
            }}
          >
            <PhoneFrame
              src="/app-start.png"
              alt={tx(locale, "Écran d'accueil SOKAI", "SOKAI home screen")}
              priority
            />
          </motion.div>

          <motion.div
            className="floating-chip floating-chip--time"
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Clock3 size={18} />
            <span><strong>20 min</strong> {tx(locale, "par jour", "a day")}</span>
          </motion.div>
          <motion.div
            className="floating-chip floating-chip--tracking"
            animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Target size={18} />
            <span>
              <strong>{tx(locale, "Suivi en direct", "Live tracking")}</strong>{" "}
              {tx(locale, "scores instantanés", "instant scores")}
            </span>
          </motion.div>
          <div className="hero__orbit hero__orbit--one" />
          <div className="hero__orbit hero__orbit--two" />
        </div>
      </div>

      <div className="hero-ticker" aria-hidden="true">
        <div>
          <span>PLAY</span><i>✦</i><span>HAVE FUN</span><i>✦</i><span>IMPROVE</span><i>✦</i>
          <span>START THE GAME</span><i>✦</i><span>PLAY</span><i>✦</i><span>HAVE FUN</span>
        </div>
      </div>
    </section>
  );
}

function PlayerStory({ locale }: { locale: Locale }) {
  const [activeScreen, setActiveScreen] = useState(1);
  const reduceMotion = useReducedMotion();
  const screens = getScreens(locale);
  const playerBenefits = getPlayerBenefits(locale);
  const appStoreUrl = getAppStoreUrl(locale);
  const playStoreUrl = getPlayStoreUrl(locale);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveScreen((current) => (current + 1) % screens.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [reduceMotion, screens.length]);

  return (
    <>
      <section className="problem-section" id="players">
        <div className="section-shell">
          <div className="split-heading">
            <div>
              <span className="section-index">
                {tx(locale, "01 — POUR LES JOUEURS", "01 — FOR PLAYERS")}
              </span>
              <h2>{tx(
                locale,
                "Le talent se travaille aussi entre deux entraînements.",
                "Talent is built between team sessions too.",
              )}</h2>
            </div>
            <p>
              {tx(
                locale,
                "Les séances collectives ne laissent pas toujours le temps de répéter. SOKAI ajoute une routine individuelle courte, mesurable et motivante à la maison.",
                "Team sessions don't always leave enough time for repetition. SOKAI adds a short, measurable and motivating individual routine at home.",
              )}
            </p>
          </div>

          <div className="benefit-grid">
            {playerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.article
                  className="benefit-card"
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="benefit-card__top">
                    <span className="benefit-card__number">{benefit.number}</span>
                    <span className="benefit-card__icon" aria-hidden="true">
                      <Icon size={29} strokeWidth={2.2} />
                    </span>
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.copy}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="app-tour">
        <div className="app-tour__glow" />
        <div className="section-shell app-tour__inner">
          <div className="app-tour__copy">
            <span className="section-index section-index--light">
              {tx(locale, "DANS L'APP", "INSIDE THE APP")}
            </span>
            <h2>{tx(
              locale,
              "Tout ce qui donne envie de jouer. Et de rejouer.",
              "Everything that makes you want to play. And play again.",
            )}</h2>
            <p>
              {tx(
                locale,
                "Découvre un parcours qui transforme chaque session en preuve de progression — du premier exercice jusqu'au classement.",
                "Discover a journey that turns every session into proof of progress — from your first drill to the leaderboard.",
              )}
            </p>

            <div
              className="screen-selector"
              role="tablist"
              aria-label={tx(locale, "Écrans de l'application", "App screens")}
            >
              {screens.map((screen, index) => (
                <button
                  key={screen.label}
                  type="button"
                  role="tab"
                  aria-selected={activeScreen === index}
                  onClick={() => setActiveScreen(index)}
                  className={activeScreen === index ? "is-active" : ""}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {screen.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                className="screen-description"
                key={screens[activeScreen].label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.28 }}
              >
                <strong>{screens[activeScreen].kicker}</strong>
                <p>{screens[activeScreen].copy}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="app-tour__phones">
            <motion.div
              className="phone-ghost phone-ghost--left"
              animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneFrame
                src={screens[(activeScreen + screens.length - 1) % screens.length].src}
                alt={tx(locale, "Écran précédent de SOKAI", "Previous SOKAI screen")}
              />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={screens[activeScreen].src}
                className="phone-main"
                initial={{ opacity: 0, y: 28, rotateY: -14 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: -20, rotateY: 12 }}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              >
                <PhoneFrame
                  src={screens[activeScreen].src}
                  alt={tx(
                    locale,
                    `Écran ${screens[activeScreen].label} de SOKAI`,
                    `SOKAI ${screens[activeScreen].label} screen`,
                  )}
                />
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="phone-ghost phone-ghost--right"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneFrame
                src={screens[(activeScreen + 1) % screens.length].src}
                alt={tx(locale, "Écran suivant de SOKAI", "Next SOKAI screen")}
              />
            </motion.div>

            <div className="phone-stage__ring" />
          </div>
        </div>
      </section>

      <section className="daily-section">
        <div className="section-shell daily-grid">
          <div className="daily-number">
            <span>20</span>
            <strong>MIN</strong>
            <small>{tx(locale, "PAR JOUR", "A DAY")}</small>
          </div>
          <div className="daily-copy">
            <span className="section-index">{tx(locale, "LA ROUTINE SOKAI", "THE SOKAI ROUTINE")}</span>
            <h2>{tx(locale, "Un petit créneau. Une vraie habitude.", "A short session. A lasting habit.")}</h2>
            <div className="steps-grid">
              {[
                [Smartphone, tx(locale, "Pose le téléphone", "Set up your phone"), tx(locale, "Cadre-toi, l'app te guide.", "Get in frame and let the app guide you.")],
                [Dumbbell, tx(locale, "Choisis ton exercice", "Choose your drill"), tx(locale, "Contrôle, jongle, coordination.", "Ball control, keepy-uppies, coordination.")],
                [Play, tx(locale, "Joue 20 minutes", "Play for 20 minutes"), tx(locale, "SOKAI suit ta performance.", "SOKAI tracks your performance.")],
                [LineChart, tx(locale, "Vois tes progrès", "See your progress"), tx(locale, "XP, stats, séries et classement.", "XP, stats, streaks and rankings.")],
              ].map(([Icon, title, copy], index) => {
                const StepIcon = Icon as typeof Smartphone;
                return (
                  <div className="step" key={title as string}>
                    <div><StepIcon size={21} /><span>0{index + 1}</span></div>
                    <strong>{title as string}</strong>
                    <p>{copy as string}</p>
                  </div>
                );
              })}
            </div>
            <div className="inline-store-actions">
              <StoreButton href={appStoreUrl} store="App Store" locale={locale} compact />
              <StoreButton href={playStoreUrl} store="Google Play" locale={locale} compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ClubDashboard({ locale }: { locale: Locale }) {
  const bars = [46, 62, 58, 82, 73, 94, 68];
  const players = [
    { initials: "MK", name: "Malo K.", detail: tx(locale, "14 exos · 286 XP", "14 drills · 286 XP"), progress: 88, delta: "+14%" },
    { initials: "LN", name: "Lina N.", detail: tx(locale, "12 exos · 244 XP", "12 drills · 244 XP"), progress: 76, delta: "+11%" },
    { initials: "YS", name: "Yanis S.", detail: tx(locale, "10 exos · 201 XP", "10 drills · 201 XP"), progress: 69, delta: "+8%" },
    { initials: "AM", name: "Aya M.", detail: tx(locale, "9 exos · 188 XP", "9 drills · 188 XP"), progress: 61, delta: "+7%" },
  ];

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="dashboard__topbar">
        <div>
          <Image src="/sokaiclub.png" alt="" width={38} height={38} />
          <span>SOKAI <strong>CLUB DESK</strong></span>
        </div>
        <div className="dashboard__filters">
          <span>{tx(locale, "U15 · Groupe A", "U15 · Group A")}</span>
          <span>{tx(locale, "7 derniers jours", "Last 7 days")}</span>
        </div>
      </div>

      <div className="dashboard__content">
        <div className="dashboard__heading">
          <div>
            <small>{tx(locale, "TABLEAU DE BORD", "DASHBOARD")}</small>
            <h3>{tx(locale, "Bonjour Coach Malik.", "Hello Coach Malik.")}</h3>
          </div>
          <span className="dashboard__action">
            <Target size={16} /> {tx(locale, "Assigner un exercice", "Assign a drill")}
          </span>
        </div>

        <div className="metric-row">
          <article>
            <div className="metric-icon"><Users size={19} /></div>
            <span>{tx(locale, "Joueurs actifs", "Active players")}</span>
            <strong>18<small>/20</small></strong>
            <em>{tx(locale, "+3 cette semaine", "+3 this week")}</em>
          </article>
          <article>
            <div className="metric-icon"><Goal size={19} /></div>
            <span>{tx(locale, "Exercices terminés", "Completed drills")}</span>
            <strong>86<small>%</small></strong>
            <em>{tx(locale, "Objectif : 80%", "Target: 80%")}</em>
          </article>
          <article>
            <div className="metric-icon"><LineChart size={19} /></div>
            <span>{tx(locale, "Progression moyenne", "Average progress")}</span>
            <strong>+12<small>%</small></strong>
            <em>{tx(locale, "Sur les 30 derniers jours", "Over the last 30 days")}</em>
          </article>
        </div>

        <div className="dashboard__grid">
          <article className="chart-card">
            <div className="card-heading">
              <div>
                <strong>{tx(locale, "Activité du groupe", "Squad activity")}</strong>
                <span>{tx(locale, "Sessions terminées", "Completed sessions")}</span>
              </div>
              <span className="live-pill"><i /> {tx(locale, "En direct", "Live")}</span>
            </div>
            <div
              className="bar-chart"
              aria-label={tx(locale, "Activité hebdomadaire du groupe", "Weekly squad activity")}
            >
              {bars.map((height, index) => (
                <div className="bar-column" key={index}>
                  <div className="bar-track">
                    <motion.div
                      className="bar-fill"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.75, delay: 0.12 * index, ease: "easeOut" }}
                    />
                  </div>
                  <span>{(locale === "fr"
                    ? ["L", "M", "M", "J", "V", "S", "D"]
                    : ["M", "T", "W", "T", "F", "S", "S"])[index]}</span>
                </div>
              ))}
            </div>
            <div className="chart-summary">
              <span><strong>104</strong> {tx(locale, "sessions", "sessions")}</span>
              <span><strong>31 h</strong> {tx(locale, "de jeu", "played")}</span>
              <span><strong>2 486</strong> {tx(locale, "répétitions", "repetitions")}</span>
            </div>
          </article>

          <article className="players-card">
            <div className="card-heading">
              <div>
                <strong>{tx(locale, "Progression joueurs", "Player progress")}</strong>
                <span>{tx(locale, "Objectif hebdomadaire", "Weekly target")}</span>
              </div>
              <ChevronRight size={18} />
            </div>
            <div className="player-list">
              {players.map((player, index) => (
                <motion.div
                  className="player-row"
                  key={player.name}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.14 * index }}
                >
                  <span className="player-avatar">{player.initials}</span>
                  <div className="player-info"><strong>{player.name}</strong><span>{player.detail}</span></div>
                  <div className="player-progress" aria-label={`${player.progress}%`}>
                    <i style={{ width: `${player.progress}%` }} />
                  </div>
                  <em>{player.delta}</em>
                </motion.div>
              ))}
            </div>
          </article>
        </div>
      </div>

      <span className="dashboard__caption">
        <Sparkles size={14} /> {tx(locale, "Données de démonstration", "Demo data")}
      </span>
    </motion.div>
  );
}

function ClubSection({ locale }: { locale: Locale }) {
  const clubOffers = getClubOffers(locale);

  return (
    <>
      <section className="clubs-section" id="clubs">
        <div className="clubs-grid-overlay" />
        <div className="section-shell">
          <div className="split-heading split-heading--dark">
            <div>
              <span className="section-index section-index--light">
                {tx(locale, "02 — POUR LES CLUBS", "02 — FOR CLUBS")}
              </span>
              <h2>{tx(
                locale,
                "Votre méthodologie continue après l'entraînement.",
                "Your methodology continues after training.",
              )}</h2>
            </div>
            <p>
              {tx(
                locale,
                "Assignez des exercices à la maison, suivez l'engagement et rendez la progression lisible entre deux séances collectives.",
                "Assign drills at home, track engagement and make progress visible between team sessions.",
              )}
            </p>
          </div>

          <ClubDashboard locale={locale} />

          <div className="club-feature-row">
            {[
              [Target, tx(locale, "Piloter", "Guide"), tx(locale, "Assignez les exercices et objectifs de la semaine.", "Assign the week's drills and goals.")],
              [BarChart3, tx(locale, "Mesurer", "Measure"), tx(locale, "Suivez scores, répétitions, assiduité et progression.", "Track scores, repetitions, attendance and progress.")],
              [Trophy, tx(locale, "Engager", "Engage"), tx(locale, "Animez le groupe avec des défis et classements internes.", "Bring the squad together with challenges and internal rankings.")],
              [ShieldCheck, tx(locale, "Personnaliser", "Customize"), tx(locale, "Intégrez votre méthode et vos propres mécaniques.", "Integrate your methodology and your own mechanics.")],
            ].map(([Icon, title, copy], index) => {
              const FeatureIcon = Icon as typeof Target;
              return (
                <motion.article
                  key={title as string}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <FeatureIcon size={22} />
                  <strong>{title as string}</strong>
                  <p>{copy as string}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="offers-section" id="offers">
        <div className="section-shell">
          <div className="offers-heading">
            <span className="section-index">
              {tx(locale, "TROIS FAÇONS D'AVANCER ENSEMBLE", "THREE WAYS TO MOVE FORWARD TOGETHER")}
            </span>
            <h2>{tx(
              locale,
              "Une offre qui s'adapte à votre projet sportif.",
              "A plan that adapts to your sporting project.",
            )}</h2>
            <p>
              {tx(
                locale,
                "Recommandez SOKAI, équipez une équipe ou intégrez vos propres exercices.",
                "Recommend SOKAI, equip a team or integrate your own drills.",
              )}
            </p>
          </div>

          <div className="offers-grid">
            {clubOffers.map((offer, index) => (
              <motion.article
                className={`offer-card${offer.featured ? " offer-card--featured" : ""}`}
                key={offer.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                {offer.featured && (
                  <span className="popular-label">
                    {tx(locale, "LE PLUS COMPLET", "MOST COMPLETE")}
                  </span>
                )}
                <span className="offer-card__tag">{offer.tag}</span>
                <h3>{offer.title}</h3>
                <div className="offer-price"><strong>{offer.price}</strong><span>{offer.suffix}</span></div>
                <p>{offer.description}</p>
                <ul>
                  {offer.features.map((feature) => (
                    <li key={feature}><Check size={15} /> {feature}</li>
                  ))}
                </ul>
                <a className="offer-card__cta" href={DEMO_URL} target="_blank" rel="noreferrer">
                  {offer.cta} <ArrowRight size={17} />
                </a>
              </motion.article>
            ))}
          </div>

          <p className="pricing-note">
            {tx(
              locale,
              "Les tarifs indiqués sont des points de départ. Les conditions finales dépendent du nombre d'équipes, de joueurs et du niveau de personnalisation demandé.",
              "The prices shown are starting points. Final terms depend on the number of teams and players, and the level of customization required.",
            )}
          </p>
        </div>
      </section>
    </>
  );
}

function FaqAndCta({ locale }: { locale: Locale }) {
  const faqs = [
    [
      tx(locale, "De quoi un joueur a-t-il besoin ?", "What does a player need?"),
      tx(locale, "D'un ballon, d'un smartphone et d'un petit espace pour bouger. Aucun capteur ni équipement spécial n'est nécessaire.", "A ball, a smartphone and a small space to move around. No sensors or special equipment are required."),
    ],
    [
      tx(locale, "SOKAI est-elle déjà disponible ?", "Is SOKAI available now?"),
      tx(locale, "Oui. L'application est disponible sur l'App Store pour iPhone et iPad, ainsi que sur Google Play pour Android.", "Yes. The app is available on the App Store for iPhone and iPad, and on Google Play for Android."),
    ],
    [
      tx(locale, "Comment l'application mesure-t-elle la progression ?", "How does the app measure progress?"),
      tx(locale, "La caméra analyse les mouvements directement sur l'appareil. SOKAI suit ensuite les scores, répétitions, temps d'entraînement, XP et séries.", "The camera analyzes movements directly on the device. SOKAI then tracks scores, repetitions, training time, XP and streaks."),
    ],
    [
      tx(locale, "Un coach peut-il assigner des exercices ?", "Can a coach assign drills?"),
      tx(locale, "Oui. L'offre Club App prévoit l'assignation d'exercices et un dashboard dédié pour suivre l'activité et la progression des joueurs.", "Yes. The Club App plan lets coaches assign drills and use a dedicated dashboard to track player activity and progress."),
    ],
    [
      tx(locale, "Peut-on intégrer la méthode de notre club ?", "Can we integrate our club's methodology?"),
      tx(locale, "Oui. SOKAI peut co-construire des exercices sur mesure avec votre staff : consignes, niveaux, objectifs, durée, répétitions et scoring.", "Yes. SOKAI can co-create custom drills with your staff, including instructions, levels, goals, duration, repetitions and scoring."),
    ],
  ];

  return (
    <>
      <section className="faq-section">
        <div className="section-shell faq-grid">
          <div>
            <span className="section-index">FAQ</span>
            <h2>{tx(locale, "Les réponses avant de commencer.", "Answers before you get started.")}</h2>
            <p>{tx(
              locale,
              "Une question plus précise ? Écrivez-nous, on vous répond directement.",
              "Have a more specific question? Send us a message and we'll get back to you.",
            )}</p>
            <a href="mailto:contact@sokai.club"><Mail size={17} /> contact@sokai.club</a>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta__grid" />
        <div className="section-shell final-cta__inner">
          <div>
            <span className="section-index section-index--light">START THE GAME</span>
            <h2>{tx(
              locale,
              "Joueur ou club, le prochain entraînement commence ici.",
              "Player or club, your next training session starts here.",
            )}</h2>
          </div>
          <div className="final-cta__actions">
            <a className="primary-action" href={DOWNLOAD_URL} target="_blank" rel="noreferrer">
              <Download size={19} /> {tx(locale, "Télécharger SOKAI", "Download SOKAI")}
            </a>
            <a className="secondary-action" href={DEMO_URL} target="_blank" rel="noreferrer">
              <CalendarDays size={19} /> {tx(locale, "Réserver une démo club", "Book a club demo")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="footer">
      <div className="section-shell footer__inner">
        <div className="footer__brand">
          <Image src="/sokaiclub.png" alt="SOKAI Club" width={62} height={62} />
          <div><strong>SOKAI</strong><span>Play. Have fun. Improve.</span></div>
        </div>
        <div className="footer__links">
          <Link href="#players">{tx(locale, "Joueurs", "Players")}</Link>
          <Link href="#clubs">Clubs</Link>
          <a href="https://app.sokai.club/support" target="_blank" rel="noreferrer">Support</a>
          <a href="https://app.sokai.club/privacy" target="_blank" rel="noreferrer">
            {tx(locale, "Confidentialité", "Privacy")}
          </a>
          <a href="https://app.sokai.club/terms" target="_blank" rel="noreferrer">
            {tx(locale, "Conditions", "Terms")}
          </a>
        </div>
        <p>© {new Date().getFullYear()} SOKAI GROUP. {tx(locale, "Tous droits réservés.", "All rights reserved.")}</p>
      </div>
    </footer>
  );
}

export default function LandingExperience({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <main>
      <Nav locale={locale} />
      <Hero locale={locale} />
      <PlayerStory locale={locale} />
      <ClubSection locale={locale} />
      <FaqAndCta locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
