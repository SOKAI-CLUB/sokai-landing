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

const APP_STORE_URL = "https://apps.apple.com/fr/app/sokai/id6759445678";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sokai.app&hl=fr";
const DOWNLOAD_URL = "https://linktr.ee/sokai_club";
const DEMO_URL = "https://calendly.com/makses/sokai";

const screens = [
  {
    src: "/app-start.png",
    label: "Démarrage",
    kicker: "Entre dans le jeu",
    copy: "Une expérience immédiate, pensée pour donner envie de toucher le ballon.",
  },
  {
    src: "/app-training.png",
    label: "Parcours",
    kicker: "Progresse à ton rythme",
    copy: "Des exercices courts, des niveaux clairs et une progression visible.",
  },
  {
    src: "/app-ranking.png",
    label: "Meilleur XI",
    kicker: "Mesure-toi aux autres",
    copy: "Classements, ligues et défis transforment chaque répétition en motivation.",
  },
  {
    src: "/app-profile.png",
    label: "Profil & stats",
    kicker: "Prouve ta progression",
    copy: "XP, temps de jeu, jongles et carte joueur réunis dans un seul profil.",
  },
  {
    src: "/app-streak.png",
    label: "Série",
    kicker: "Construis une habitude",
    copy: "Les séries et le calendrier rendent la régularité simple et concrète.",
  },
];

const playerBenefits = [
  {
    icon: Camera,
    number: "01",
    title: "La caméra compte",
    copy: "Elle détecte tes mouvements directement sur l'appareil. Aucun capteur ni équipement spécial.",
  },
  {
    icon: Gauge,
    number: "02",
    title: "Chaque effort compte",
    copy: "Répétitions, scores, temps d'entraînement et XP rendent les progrès visibles.",
  },
  {
    icon: Trophy,
    number: "03",
    title: "Le jeu motive",
    copy: "Niveaux, séries, cartes joueur, classements et défis donnent envie de revenir demain.",
  },
];

const clubOffers = [
  {
    tag: "Sans investissement club",
    title: "Club Partenaire",
    price: "20%",
    suffix: "de commission récurrente dès le départ",
    description:
      "Recommandez SOKAI à vos joueurs et familles avec un lien ou code dédié.",
    features: [
      "Tarifs préférentiels pour votre communauté",
      "Suivi des abonnements attribués au club",
      "Contenus co-créés pendant la saison",
      "Revenus additionnels récurrents",
    ],
    cta: "Devenir partenaire",
  },
  {
    tag: "Pour équiper une équipe",
    title: "Club App",
    price: "199 $",
    suffix: "/ mois · jusqu'à 20 joueurs",
    description:
      "Prolongez vos séances à la maison et gardez une vue claire sur l'activité du groupe.",
    features: [
      "Bibliothèque SOKAI en accès illimité",
      "Exercices assignés par le coach",
      "Scores, répétitions et progression",
      "Dashboard et classement interne",
    ],
    cta: "Demander une démo",
    featured: true,
  },
  {
    tag: "Votre méthode dans SOKAI",
    title: "Exercices sur mesure",
    price: "299 $",
    suffix: "à partir de",
    description:
      "Co-construisez des exercices alignés avec les objectifs et la pédagogie de votre club.",
    features: [
      "Mécaniques définies avec votre staff",
      "Niveaux, consignes et objectifs personnalisés",
      "Durée, répétitions et scoring configurés",
      "Intégration directe dans l'application",
    ],
    cta: "Demander un devis",
  },
];

function StoreButton({
  href,
  store,
  compact = false,
}: {
  href: string;
  store: "App Store" | "Google Play";
  compact?: boolean;
}) {
  return (
    <a
      className={`store-button store-button--${store === "App Store" ? "apple" : "google"}${compact ? " store-button--compact" : ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Télécharger SOKAI sur ${store}`}
    >
      <Image
        src={store === "App Store" ? "/app-store-badge.svg" : "/google-play-badge.png"}
        alt={store === "App Store" ? "Télécharger dans l’App Store" : "Disponible sur Google Play"}
        width={store === "App Store" ? 250 : 646}
        height={store === "App Store" ? 83 : 250}
        className="store-button__badge"
      />
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

function Nav() {
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
        <Link href="#top" className="brand" aria-label="SOKAI, retour en haut">
          <Image src="/sokaiclub.png" alt="" width={52} height={52} priority />
          <span>SOKAI</span>
        </Link>

        <nav className="nav-links" aria-label="Navigation principale">
          <Link href="#joueurs">Pour les joueurs</Link>
          <Link href="#clubs">Pour les clubs</Link>
          <Link href="#offres">Les offres</Link>
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
                Réserver une démo
              </motion.a>
            )}
          </AnimatePresence>
          <a className="nav-cta" href={DOWNLOAD_URL} target="_blank" rel="noreferrer">
            <span>Télécharger l'app</span><ArrowRight size={17} />
          </a>
        </div>

        <button
          className="nav-menu"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
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
            <Link href="#joueurs" onClick={() => setOpen(false)}>
              Pour les joueurs
            </Link>
            <Link href="#clubs" onClick={() => setOpen(false)}>
              Pour les clubs
            </Link>
            <Link href="#offres" onClick={() => setOpen(false)}>
              Les offres
            </Link>
            <a href={DOWNLOAD_URL} target="_blank" rel="noreferrer">
              Télécharger l'app
            </a>
            <a href={DEMO_URL} target="_blank" rel="noreferrer">
              Réserver une démo club
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

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
            <span className="eyebrow__dot" /> L'app d'entraînement football est disponible
          </div>
          <h1>
            20 minutes.
            <span>Un ballon. Ton téléphone.</span>
            <em>Progresse.</em>
          </h1>
          <p className="hero__lead">
            SOKAI transforme l'entraînement à la maison en jeu : la caméra suit,
            le score mesure, la progression motive.
          </p>

          <div className="hero__paths" aria-label="Choisir votre parcours">
            <a href="#joueurs" className="hero-path hero-path--player">
              <Target size={18} /> Je suis joueur
            </a>
            <a href="#clubs" className="hero-path hero-path--club">
              <Users size={18} /> Je suis club / coach
            </a>
          </div>

          <div className="hero__actions">
            <StoreButton href={APP_STORE_URL} store="App Store" />
            <StoreButton href={PLAY_STORE_URL} store="Google Play" />
          </div>

          <div className="hero__proofs" aria-label="Avantages clés">
            <span><Check size={15} /> Sans capteur</span>
            <span><Check size={15} /> À la maison</span>
            <span><Check size={15} /> iOS & Android</span>
          </div>
        </motion.div>

        <div className="hero__visual" aria-label="Aperçu de l'application SOKAI">
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
            <PhoneFrame src="/app-start.png" alt="Écran d'accueil SOKAI" priority />
          </motion.div>

          <motion.div
            className="floating-chip floating-chip--time"
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Clock3 size={18} />
            <span><strong>20 min</strong> par jour</span>
          </motion.div>
          <motion.div
            className="floating-chip floating-chip--tracking"
            animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Target size={18} />
            <span><strong>Suivi en direct</strong> scores instantanés</span>
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

function PlayerStory() {
  const [activeScreen, setActiveScreen] = useState(1);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveScreen((current) => (current + 1) % screens.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <>
      <section className="problem-section" id="joueurs">
        <div className="section-shell">
          <div className="split-heading">
            <div>
              <span className="section-index">01 — POUR LES JOUEURS</span>
              <h2>Le talent se travaille aussi entre deux entraînements.</h2>
            </div>
            <p>
              Les séances collectives ne laissent pas toujours le temps de répéter. SOKAI
              ajoute une routine individuelle courte, mesurable et motivante à la maison.
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
            <span className="section-index section-index--light">DANS L'APP</span>
            <h2>Tout ce qui donne envie de jouer. Et de rejouer.</h2>
            <p>
              Découvre un parcours qui transforme chaque session en preuve de progression —
              du premier exercice jusqu'au classement.
            </p>

            <div className="screen-selector" role="tablist" aria-label="Écrans de l'application">
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
                alt="Écran précédent de SOKAI"
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
                <PhoneFrame src={screens[activeScreen].src} alt={`Écran ${screens[activeScreen].label} de SOKAI`} />
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="phone-ghost phone-ghost--right"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneFrame
                src={screens[(activeScreen + 1) % screens.length].src}
                alt="Écran suivant de SOKAI"
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
            <small>PAR JOUR</small>
          </div>
          <div className="daily-copy">
            <span className="section-index">LA ROUTINE SOKAI</span>
            <h2>Un petit créneau. Une vraie habitude.</h2>
            <div className="steps-grid">
              {[
                [Smartphone, "Pose le téléphone", "Cadre-toi, l'app te guide."],
                [Dumbbell, "Choisis ton exercice", "Contrôle, jongle, coordination."],
                [Play, "Joue 20 minutes", "SOKAI suit ta performance."],
                [LineChart, "Vois tes progrès", "XP, stats, séries et classement."],
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
              <StoreButton href={APP_STORE_URL} store="App Store" compact />
              <StoreButton href={PLAY_STORE_URL} store="Google Play" compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ClubDashboard() {
  const bars = [46, 62, 58, 82, 73, 94, 68];
  const players = [
    { initials: "MK", name: "Malo K.", detail: "14 exos · 286 XP", progress: 88, delta: "+14%" },
    { initials: "LN", name: "Lina N.", detail: "12 exos · 244 XP", progress: 76, delta: "+11%" },
    { initials: "YS", name: "Yanis S.", detail: "10 exos · 201 XP", progress: 69, delta: "+8%" },
    { initials: "AM", name: "Aya M.", detail: "9 exos · 188 XP", progress: 61, delta: "+7%" },
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
          <span>U15 · Groupe A</span>
          <span>7 derniers jours</span>
        </div>
      </div>

      <div className="dashboard__content">
        <div className="dashboard__heading">
          <div>
            <small>TABLEAU DE BORD</small>
            <h3>Bonjour Coach Malik.</h3>
          </div>
          <span className="dashboard__action"><Target size={16} /> Assigner un exercice</span>
        </div>

        <div className="metric-row">
          <article>
            <div className="metric-icon"><Users size={19} /></div>
            <span>Joueurs actifs</span>
            <strong>18<small>/20</small></strong>
            <em>+3 cette semaine</em>
          </article>
          <article>
            <div className="metric-icon"><Goal size={19} /></div>
            <span>Exercices terminés</span>
            <strong>86<small>%</small></strong>
            <em>Objectif : 80%</em>
          </article>
          <article>
            <div className="metric-icon"><LineChart size={19} /></div>
            <span>Progression moyenne</span>
            <strong>+12<small>%</small></strong>
            <em>Sur les 30 derniers jours</em>
          </article>
        </div>

        <div className="dashboard__grid">
          <article className="chart-card">
            <div className="card-heading">
              <div><strong>Activité du groupe</strong><span>Sessions terminées</span></div>
              <span className="live-pill"><i /> En direct</span>
            </div>
            <div className="bar-chart" aria-label="Activité hebdomadaire du groupe">
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
                  <span>{["L", "M", "M", "J", "V", "S", "D"][index]}</span>
                </div>
              ))}
            </div>
            <div className="chart-summary">
              <span><strong>104</strong> sessions</span>
              <span><strong>31 h</strong> de jeu</span>
              <span><strong>2 486</strong> répétitions</span>
            </div>
          </article>

          <article className="players-card">
            <div className="card-heading">
              <div><strong>Progression joueurs</strong><span>Objectif hebdomadaire</span></div>
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

      <span className="dashboard__caption"><Sparkles size={14} /> Données de démonstration</span>
    </motion.div>
  );
}

function ClubSection() {
  return (
    <>
      <section className="clubs-section" id="clubs">
        <div className="clubs-grid-overlay" />
        <div className="section-shell">
          <div className="split-heading split-heading--dark">
            <div>
              <span className="section-index section-index--light">02 — POUR LES CLUBS</span>
              <h2>Votre méthodologie continue après l'entraînement.</h2>
            </div>
            <p>
              Assignez des exercices à la maison, suivez l'engagement et rendez la
              progression lisible entre deux séances collectives.
            </p>
          </div>

          <ClubDashboard />

          <div className="club-feature-row">
            {[
              [Target, "Piloter", "Assignez les exercices et objectifs de la semaine."],
              [BarChart3, "Mesurer", "Suivez scores, répétitions, assiduité et progression."],
              [Trophy, "Engager", "Animez le groupe avec des défis et classements internes."],
              [ShieldCheck, "Personnaliser", "Intégrez votre méthode et vos propres mécaniques."],
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

      <section className="offers-section" id="offres">
        <div className="section-shell">
          <div className="offers-heading">
            <span className="section-index">TROIS FAÇONS D'AVANCER ENSEMBLE</span>
            <h2>Une offre qui s'adapte à votre projet sportif.</h2>
            <p>
              Recommandez SOKAI, équipez une équipe ou intégrez vos propres exercices.
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
                {offer.featured && <span className="popular-label">LE PLUS COMPLET</span>}
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
            Les tarifs indiqués sont des points de départ. Les conditions finales dépendent du
            nombre d'équipes, de joueurs et du niveau de personnalisation demandé.
          </p>
        </div>
      </section>
    </>
  );
}

function FaqAndCta() {
  const faqs = [
    ["De quoi un joueur a-t-il besoin ?", "D'un ballon, d'un smartphone et d'un petit espace pour bouger. Aucun capteur ni équipement spécial n'est nécessaire."],
    ["SOKAI est-elle déjà disponible ?", "Oui. L'application est disponible sur l'App Store pour iPhone et iPad, ainsi que sur Google Play pour Android."],
    ["Comment l'application mesure-t-elle la progression ?", "La caméra analyse les mouvements directement sur l'appareil. SOKAI suit ensuite les scores, répétitions, temps d'entraînement, XP et séries."],
    ["Un coach peut-il assigner des exercices ?", "Oui. L'offre Club App prévoit l'assignation d'exercices et un dashboard dédié pour suivre l'activité et la progression des joueurs."],
    ["Peut-on intégrer la méthode de notre club ?", "Oui. SOKAI peut co-construire des exercices sur mesure avec votre staff : consignes, niveaux, objectifs, durée, répétitions et scoring."],
  ];

  return (
    <>
      <section className="faq-section">
        <div className="section-shell faq-grid">
          <div>
            <span className="section-index">FAQ</span>
            <h2>Les réponses avant de commencer.</h2>
            <p>Une question plus précise ? Écrivez-nous, on vous répond directement.</p>
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
            <h2>Joueur ou club, le prochain entraînement commence ici.</h2>
          </div>
          <div className="final-cta__actions">
            <a className="primary-action" href={DOWNLOAD_URL} target="_blank" rel="noreferrer">
              <Download size={19} /> Télécharger SOKAI
            </a>
            <a className="secondary-action" href={DEMO_URL} target="_blank" rel="noreferrer">
              <CalendarDays size={19} /> Réserver une démo club
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer__inner">
        <div className="footer__brand">
          <Image src="/sokaiclub.png" alt="SOKAI Club" width={62} height={62} />
          <div><strong>SOKAI</strong><span>Play. Have fun. Improve.</span></div>
        </div>
        <div className="footer__links">
          <Link href="#joueurs">Joueurs</Link>
          <Link href="#clubs">Clubs</Link>
          <a href="https://app.sokai.club/support" target="_blank" rel="noreferrer">Support</a>
          <a href="https://app.sokai.club/privacy" target="_blank" rel="noreferrer">Confidentialité</a>
          <a href="https://app.sokai.club/terms" target="_blank" rel="noreferrer">Conditions</a>
        </div>
        <p>© {new Date().getFullYear()} SOKAI GROUP. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default function LandingExperience() {
  return (
    <main>
      <Nav />
      <Hero />
      <PlayerStory />
      <ClubSection />
      <FaqAndCta />
      <Footer />
    </main>
  );
}
