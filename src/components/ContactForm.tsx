import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  variant?: "hero" | "section";
}

const ContactForm = ({ variant = "section" }: ContactFormProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Wiadomość wysłana!",
      description: "Skontaktujemy się z Tobą najszybciej jak to możliwe.",
    });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  const isHero = variant === "hero";

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl p-6 md:p-8 space-y-4 ${
        isHero
          ? "bg-card/95 backdrop-blur-sm shadow-elegant"
          : "bg-card shadow-card border border-border"
      }`}
    >
      <div className="mb-2">
        <h3 className="font-display text-xl font-bold text-foreground">
          {isHero ? "Zamów bezpłatną wycenę" : "Napisz do nas"}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Odpowiemy w ciągu 24 godzin
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Imię"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-secondary text-secondary-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm"
        />
        <input
          type="tel"
          placeholder="Telefon"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-secondary text-secondary-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm"
        />
      </div>
      <input
        type="email"
        placeholder="E-mail"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-secondary text-secondary-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm"
      />
      <textarea
        placeholder="Opisz swoje potrzeby..."
        rows={3}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-secondary text-secondary-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
      />
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-semibold hover:bg-forest-dark transition-colors text-sm"
      >
        <Send className="w-4 h-4" />
        Wyślij wiadomość
      </button>
    </form>
  );
};

export default ContactForm;
