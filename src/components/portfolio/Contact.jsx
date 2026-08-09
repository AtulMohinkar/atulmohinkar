import { useState } from "react";
import { toast } from "react-toastify";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Section, { Reveal } from "./Section";
import { profile } from "../../data/profile";

const empty = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  else if (values.name.trim().length > 100) errors.name = "Name is too long.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "That email doesn't look right.";
  if (!values.subject.trim()) errors.subject = "Add a short subject.";
  if (values.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";
  else if (values.message.length > 1000) errors.message = "Message is too long (max 1000).";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  const onSubmit = async (e) => {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length) {
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      toast.success("Message sent — I'll reply within 24 hours!");
      setValues(empty);
      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      icon={<Mail size={14} />}
      title="Let's build something together"
      subtitle="Hiring for an internship or junior MERN role? I reply to every message within a day."
    >
      <div className="contact-grid">
        <Reveal>
          <form className="glass pad" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                className="input"
                value={values.name}
                onChange={onChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                maxLength={100}
              />
              {errors.name ? (
                <p className="error-text" id="name-error">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="input"
                value={values.email}
                onChange={onChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                maxLength={255}
              />
              {errors.email ? (
                <p className="error-text" id="email-error">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                className="input"
                value={values.subject}
                onChange={onChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                maxLength={150}
              />
              {errors.subject ? (
                <p className="error-text" id="subject-error">
                  {errors.subject}
                </p>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="textarea"
                value={values.message}
                onChange={onChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                maxLength={1000}
              />
              {errors.message ? (
                <p className="error-text" id="message-error">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={{ marginTop: "1.2rem" }}
              disabled={sending}
            >
              <Send size={16} /> {sending ? "Sending…" : "Send message"}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <a className="glass contact-item card-hover" href={`mailto:${profile.email}`}>
              <span className="cert-icon" aria-hidden="true">
                <Mail size={18} />
              </span>
              {profile.email}
            </a>
            <a className="glass contact-item card-hover" href={`tel:${profile.phone}`}>
              <span className="cert-icon" aria-hidden="true">
                <Phone size={18} />
              </span>
              {profile.phone}
            </a>
            <div className="glass contact-item">
              <span className="cert-icon" aria-hidden="true">
                <MapPin size={18} />
              </span>
              {profile.location}
            </div>
            <div className="map-frame">
              <iframe
                title={`Map showing ${profile.location}`}
                src={profile.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
