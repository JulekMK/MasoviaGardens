import { motion } from "framer-motion";
import { CheckCircle, Award, Clock, ThumbsUp, Wrench, MapPin } from "lucide-react";

const benefits = [
  { icon: Award, text: "Ponad 10 lat doświadczenia w branży" },
  { icon: ThumbsUp, text: "Setki zadowolonych klientów na Mazowszu" },
  { icon: Wrench, text: "Profesjonalny sprzęt i materiały najwyższej jakości" },
  { icon: Clock, text: "Terminowość i punktualność przy każdym zleceniu" },
  { icon: MapPin, text: "Działamy na terenie całego województwa mazowieckiego" },
  { icon: CheckCircle, text: "Indywidualne podejście i dobór optymalnych rozwiązań" },
];

const WhyUsSection = () => {
  return (
    <section id="dlaczego-my" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Dlaczego my</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Zaufaj profesjonalistom, którzy kochają to, co robią
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Masovia Gardens to nie tylko firma ogrodnicza — to pasja i wieloletnie doświadczenie. 
              Każdy projekt traktujemy indywidualnie, bo wiemy, że Twój ogród to przedłużenie Twojego domu.
            </p>

            <div className="grid gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <b.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{b.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "10+", label: "Lat doświadczenia" },
              { value: "500+", label: "Zrealizowanych projektów" },
              { value: "100%", label: "Zadowolonych klientów" },
              { value: "24h", label: "Czas odpowiedzi" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
