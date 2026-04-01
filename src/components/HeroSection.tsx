import { motion } from "framer-motion";
import { ArrowRight, Star, CalendarCheck, Shield } from "lucide-react";
import heroImg from "@/assets/hero-garden.webp";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Profesjonalnie zaprojektowany ogród z pięknym trawnikiem"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Star className="w-4 h-4 text-gold" />
              Od 2013 roku tworzymy ogrody marzeń
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Twój ogród,{" "}
              <span className="text-gold">Twoja oaza</span>{" "}
              spokoju
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg font-light leading-relaxed">
              Projektujemy, aranżujemy i pielęgnujemy ogrody na terenie całego województwa mazowieckiego. Zaufaj specjalistom z&nbsp;ponad 10-letnim doświadczeniem.
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { icon: CalendarCheck, text: "10+ lat doświadczenia" },
                { icon: Shield, text: "Gwarancja jakości" },
                { icon: Star, text: "Setki zadowolonych klientów" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                  <item.icon className="w-5 h-5 text-gold" />
                  {item.text}
                </div>
              ))}
            </div>

            <a
              href="#uslugi"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-light transition-colors shadow-elegant lg:hidden"
            >
              Zobacz nasze usługi
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <ContactForm variant="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
