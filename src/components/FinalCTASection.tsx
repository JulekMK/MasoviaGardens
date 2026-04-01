import { motion } from "framer-motion";
import { ArrowRight, Clock, Phone, Mail, Facebook } from "lucide-react";
import ContactForm from "./ContactForm";

const FinalCTASection = () => {
  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Gotowy na ogród, o którym zawsze marzyłeś?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Skontaktuj się z nami już dziś i umów bezpłatną konsultację. Wspólnie stworzymy przestrzeń, 
              która stanie się Twoim domowym azylem.
            </p>

            <div className="flex items-center gap-3 bg-primary-foreground/10 rounded-xl p-4 mb-8 border border-primary-foreground/10">
              <Clock className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <div className="text-primary-foreground font-semibold text-sm">Sezon w pełni!</div>
                <div className="text-primary-foreground/70 text-xs">Ograniczona liczba wolnych terminów — nie czekaj, zarezerwuj swój.</div>
              </div>
            </div>

            <div className="space-y-4 text-primary-foreground/90">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:504957783" className="hover:text-gold transition-colors font-medium">504 957 783</a>
              </div>
              <div className="flex items-center gap-3">
                <Facebook className="w-5 h-5 text-gold shrink-0" />
                <a href="https://www.facebook.com/masviagardens" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors font-medium">Masovia Gardens</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:masoviagardens@gmail.com" className="hover:text-gold transition-colors font-medium">masoviagardens@gmail.com</a>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <ContactForm variant="section" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
