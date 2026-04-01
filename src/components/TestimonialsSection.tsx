import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Jestem bardzo zadowolona z wykonanej usługi. Trawnik został skoszony szybko i sprawnie. Pan Radosław jest kontaktową osobą, która ma fach w ręku.",
    author: "Zofia",
    location: "Warszawa",
  },
  {
    text: "Jestem wręcz zachwycony jakością prac wykonanych przez tę firmę. Z całą odpowiedzialnością szczerze polecam — naprawdę warto. Ceny nie są wygórowane, a jakość wykonanych prac naprawdę cieszy.",
    author: "Bogdan",
    location: "Warszawa",
  },
  {
    text: "Pan Radosław to bardzo rzetelna osoba! Punktualny, profesjonalny, przygotowany logistycznie do pracy. Zrealizował zlecenie w 100%. Bardzo polecam!",
    author: "Magdalena",
    location: "Korytnica",
  },
  {
    text: "Miło, kulturalnie, pełen profesjonalizm. Ogród dawno tak nie wyglądał, a poprzedni ogrodnik może się od Pana Radosława uczyć.",
    author: "Tomasz",
    location: "Wołomin",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="opinie" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Opinie klientów</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Co mówią o nas klienci
          </h2>
          <p className="text-muted-foreground text-lg">
            Zadowolenie klientów to nasz najlepszy dowód jakości.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div>
                <div className="font-semibold text-foreground text-sm">{t.author}</div>
                <div className="text-muted-foreground text-xs">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
