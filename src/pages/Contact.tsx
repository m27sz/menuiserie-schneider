import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { PageHero } from '../components/PageHero';
import { company, galleries, openingHours } from '../data/site';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: '', email: '', phone: '', subject: '', message: '' };

const subjects = ['Demande de devis', ...galleries.map((g) => g.title), 'Autre demande'];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = 'Merci d’indiquer votre nom.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Adresse e-mail invalide.';
  if (values.phone && !/^[\d\s+().-]{6,}$/.test(values.phone)) errors.phone = 'Numéro de téléphone invalide.';
  if (!values.subject) errors.subject = 'Choisissez un sujet.';
  if (values.message.trim().length < 10) errors.message = 'Votre message est un peu court.';
  return errors;
}

function buildMailto(values: FormValues): string {
  const body = [
    values.message,
    '',
    '—',
    values.name,
    values.email,
    values.phone,
  ].filter((line, i) => i < 4 || line).join('\n');
  const params = new URLSearchParams({ subject: `${values.subject} — ${values.name}`, body });
  return `mailto:${company.email}?${params.toString().replace(/\+/g, '%20')}`;
}

const fullAddress = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`;
const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(`Menuiserie Schneider, ${fullAddress}`)}&z=14&output=embed`;

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    window.location.href = buildMailto(values);
    setSent(true);
  };

  const field = (name: keyof FormValues) => ({
    id: name,
    name,
    value: values[name],
    onChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  const error = (name: keyof FormValues) =>
    errors[name] && <span id={`${name}-error`} className="field__error">{errors[name]}</span>;

  return (
    <>
      <PageHero eyebrow="Contact" title="Parlons de votre projet">
        <p>Une question, un devis ? Appelez-nous ou écrivez-nous, nous vous répondons rapidement.</p>
      </PageHero>

      <section className="section">
        <div className="container contact">
          <aside className="contact__info">
            <div className="info-block">
              <h2 className="h3">{company.legalName}</h2>
              <address>
                {company.address.street}
                <br />
                {company.address.postalCode} {company.address.city}
              </address>
            </div>
            <div className="info-block">
              <h3>Téléphone</h3>
              <a href={company.phoneHref} className="big-link">{company.phone}</a>
            </div>
            <div className="info-block">
              <h3>E-mail</h3>
              <a href={`mailto:${company.email}`} className="big-link">{company.email}</a>
            </div>
            <div className="info-block">
              <h3>Horaires d'ouverture</h3>
              <ul className="hours">
                {openingHours.map((h) => (
                  <li key={h.days}><span>{h.days}</span><span>{h.hours}</span></li>
                ))}
              </ul>
            </div>
          </aside>

          <form className="form" onSubmit={onSubmit} noValidate>
            <h2 className="h3">Formulaire de contact</h2>
            <div className="form__row">
              <label className="field">
                <span>Nom *</span>
                <input type="text" autoComplete="name" {...field('name')} />
                {error('name')}
              </label>
              <label className="field">
                <span>Téléphone</span>
                <input type="tel" autoComplete="tel" {...field('phone')} />
                {error('phone')}
              </label>
            </div>
            <label className="field">
              <span>E-mail *</span>
              <input type="email" autoComplete="email" {...field('email')} />
              {error('email')}
            </label>
            <label className="field">
              <span>Sujet *</span>
              <select {...field('subject')}>
                <option value="">— Choisir —</option>
                {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {error('subject')}
            </label>
            <label className="field">
              <span>Message *</span>
              <textarea rows={6} {...field('message')} />
              {error('message')}
            </label>
            <button type="submit" className="btn">Envoyer</button>
            {sent && (
              <p className="form__note" role="status">
                Votre logiciel de messagerie s'est ouvert avec votre message pré-rempli. S'il ne
                s'ouvre pas, écrivez-nous directement à {company.email}.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="map">
        <iframe
          title={`Plan d'accès — ${fullAddress}`}
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
