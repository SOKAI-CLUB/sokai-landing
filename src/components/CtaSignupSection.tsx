'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Check, ArrowRight, Calendar, ExternalLink, Twitter, Instagram, Linkedin, Youtube, CheckCircle2, AlertCircle } from 'lucide-react';

type Props = {
  title?: string;
  subtitle?: string;
  onSubmit?: (data: { email: string; name?: string; consent: boolean; source: 'landing' }) => Promise<void> | void;
  socialLinks?: { x?: string; instagram?: string; linkedin?: string; youtube?: string };
  locale?: 'fr' | 'en';
  calendlyUrl?: string;
}

// i18n dictionary
const copy = {
  fr: {
    title: "Rejoins la waitlist SOKAI ⚽️",
    subtitle: "Des updates, des accès anticipés et des surprises.",
    emailLabel: "Adresse email",
    emailPlaceholder: "ton@email.com",
    nameLabel: "Prénom (optionnel)",
    namePlaceholder: "Ton prénom",
    consent: "J'accepte de recevoir des emails de SOKAI. Vous pouvez vous désinscrire à tout moment.",
    primaryCta: "Je m'inscris",
    secondaryCta: "Prendre un RDV",
    trustCopy: "Zéro spam. 1–2 emails / mois.",
    successTitle: "🎉 Merci !",
    successMessage: "Tu es maintenant sur la waitlist. On te tient au courant très bientôt !",
    successSocial: "En attendant, suis-nous :",
    errorGeneric: "Une erreur s'est produite. Réessaie dans quelques instants.",
    emailError: "Veuillez entrer une adresse email valide",
    consentError: "Vous devez accepter de recevoir nos emails",
    valueBullets: [
      "Accès anticipé à l'app",
      "Invitations bêta exclusives",
      "Concours et cadeaux"
    ]
  },
  en: {
    title: "Join the SOKAI waitlist ⚽️",
    subtitle: "Product updates, early access and perks.",
    emailLabel: "Email address",
    emailPlaceholder: "your@email.com",
    nameLabel: "First name (optional)",
    namePlaceholder: "Your name",
    consent: "I agree to receive emails from SOKAI. You can unsubscribe at any time.",
    primaryCta: "Join the waitlist",
    secondaryCta: "Book a meeting",
    trustCopy: "Zero spam. 1–2 emails / month.",
    successTitle: "🎉 Thank you!",
    successMessage: "You're now on the waitlist. We'll keep you posted very soon!",
    successSocial: "In the meantime, follow us:",
    errorGeneric: "An error occurred. Please try again in a few moments.",
    emailError: "Please enter a valid email address",
    consentError: "You must agree to receive our emails",
    valueBullets: [
      "Early app access",
      "Exclusive beta invites",
      "Contests and giveaways"
    ]
  }
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CtaSignupSection({ 
  title, 
  subtitle, 
  onSubmit, 
  socialLinks, 
  locale = 'fr', 
  calendlyUrl 
}: Props) {
  const t = copy[locale];
  const [formState, setFormState] = useState({
    email: '',
    name: '',
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    return emailRegex.test(email.trim());
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.email.trim()) {
      newErrors.email = t.emailError;
    } else if (!validateEmail(formState.email)) {
      newErrors.email = t.emailError;
    }
    
    if (!formState.consent) {
      newErrors.consent = t.consentError;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const submitData = {
        email: formState.email.trim(),
        name: formState.name.trim() || undefined,
        consent: formState.consent,
        source: 'landing' as const
      };

      if (onSubmit) {
        await onSubmit(submitData);
      } else {
        // TODO: Wire to Supabase
        // 1. Create profiles_waitlist table with columns: id, email, name, consent, source, created_at
        // 2. Call API route: await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify(submitData) })
        // 3. API route should insert into Supabase: supabase.from('profiles_waitlist').insert(submitData)
        // 4. Optionally capture UTM params from URL and store them as well
        
        // Simulate API call for now
        await new Promise(resolve => setTimeout(resolve, 800));
      }
      
      setIsSuccess(true);
    } catch (error) {
      console.error('Waitlist signup error:', error);
      setSubmitError(t.errorGeneric);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormState(prev => ({ ...prev, [field]: value }));
    // Clear field error on change
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const isFormValid = validateEmail(formState.email) && formState.consent;

  const socialIcons = [
    { key: 'x', icon: Twitter, url: socialLinks?.x },
    { key: 'instagram', icon: Instagram, url: socialLinks?.instagram },
    { key: 'linkedin', icon: Linkedin, url: socialLinks?.linkedin },
    { key: 'youtube', icon: Youtube, url: socialLinks?.youtube }
  ].filter(social => social.url);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 bg-gradient-to-br from-sokai-charcoal via-sokai-black to-sokai-charcoal overflow-hidden"
      style={{ '--color-primary': '#7CFF00' } as React.CSSProperties}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-sokai-neon/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sokai-neon/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Main content */}
          <div className="max-w-2xl mx-auto lg:mx-0">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="text-center lg:text-left mb-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
                      {title || t.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-sokai-gray max-w-lg">
                      {subtitle || t.subtitle}
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        {t.emailLabel} *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-sokai-gray" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder={t.emailPlaceholder}
                          className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-sokai-black/50 text-white placeholder-sokai-gray focus:outline-none focus:ring-2 focus:ring-sokai-neon focus:border-transparent transition-colors ${
                            errors.email ? 'border-red-500' : 'border-sokai-gray/30'
                          }`}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          aria-invalid={!!errors.email}
                        />
                      </div>
                      {errors.email && (
                        <p id="email-error" role="alert" className="mt-2 text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Name field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        {t.nameLabel}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-sokai-gray" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          value={formState.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder={t.namePlaceholder}
                          className="block w-full pl-10 pr-3 py-3 border border-sokai-gray/30 rounded-lg bg-sokai-black/50 text-white placeholder-sokai-gray focus:outline-none focus:ring-2 focus:ring-sokai-neon focus:border-transparent transition-colors"
                        />
                      </div>
                    </div>

                    {/* Consent checkbox */}
                    <div>
                      <div className="flex items-start gap-3">
                        <div className="flex items-center h-5">
                          <input
                            id="consent"
                            type="checkbox"
                            checked={formState.consent}
                            onChange={(e) => handleInputChange('consent', e.target.checked)}
                            className={`h-4 w-4 rounded border focus:ring-2 focus:ring-sokai-neon focus:ring-offset-0 ${
                              errors.consent ? 'border-red-500' : 'border-sokai-gray/30'
                            } bg-sokai-black/50 text-sokai-neon`}
                            aria-describedby={errors.consent ? 'consent-error' : undefined}
                            aria-invalid={!!errors.consent}
                          />
                        </div>
                        <label htmlFor="consent" className="text-sm text-sokai-gray leading-5">
                          {t.consent}
                        </label>
                      </div>
                      {errors.consent && (
                        <p id="consent-error" role="alert" className="mt-2 text-sm text-red-400 flex items-center gap-1 ml-7">
                          <AlertCircle className="h-4 w-4" />
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    {/* Submit error */}
                    {submitError && (
                      <div role="alert" className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <p className="text-sm text-red-400 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          {submitError}
                        </p>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-sokai-neon text-sokai-charcoal font-semibold rounded-lg hover:bg-sokai-neon/90 focus:outline-none focus:ring-2 focus:ring-sokai-neon focus:ring-offset-2 focus:ring-offset-sokai-charcoal disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        {isSubmitting ? (
                          <div className="h-5 w-5 border-2 border-sokai-charcoal/20 border-t-sokai-charcoal animate-spin rounded-full" />
                        ) : (
                          <>
                            {t.primaryCta}
                            <ArrowRight className="h-5 w-5" />
                          </>
                        )}
                      </motion.button>
                      
                      {calendlyUrl && (
                        <motion.a
                          href={calendlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 border-2 border-sokai-gray/30 text-white font-semibold rounded-lg hover:border-sokai-neon hover:text-sokai-neon focus:outline-none focus:ring-2 focus:ring-sokai-neon focus:ring-offset-2 focus:ring-offset-sokai-charcoal transition-all"
                        >
                          <Calendar className="h-5 w-5" />
                          {t.secondaryCta}
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      )}
                    </div>

                    {/* Trust copy */}
                    <p className="text-xs text-sokai-gray/70 text-center">
                      {t.trustCopy}
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center lg:text-left"
                  aria-live="polite"
                >
                  <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
                      {t.successTitle}
                    </h2>
                    <p className="text-lg text-sokai-gray mb-6">
                      {t.successMessage}
                    </p>
                    
                    {socialIcons.length > 0 && (
                      <div>
                        <p className="text-sm text-sokai-gray mb-4">{t.successSocial}</p>
                        <div className="flex justify-center lg:justify-start gap-4">
                          {socialIcons.map(({ key, icon: Icon, url }) => (
                            <motion.a
                              key={key}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-3 bg-sokai-black/50 rounded-full text-sokai-gray hover:text-sokai-neon hover:bg-sokai-neon/10 transition-all focus:outline-none focus:ring-2 focus:ring-sokai-neon"
                              aria-label={`Follow us on ${key}`}
                            >
                              <Icon className="h-5 w-5" />
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Value propositions (desktop only) */}
          <div className="hidden lg:block">
            <div className="max-w-md">
              <h3 className="text-xl font-semibold text-white mb-6">
                {locale === 'fr' ? 'Ce qui t\'attend :' : 'What awaits you:'}
              </h3>
              <ul className="space-y-4">
                {t.valueBullets.map((bullet, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-center gap-3 text-sokai-gray"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-sokai-neon/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-sokai-neon" />
                    </div>
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}