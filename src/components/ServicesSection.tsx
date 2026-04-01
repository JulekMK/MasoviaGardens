import { motion } from "framer-motion";
import { Leaf, Paintbrush, Droplets, TreePine, Sprout, Truck } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Pielęgnacja ogrodów",
    desc: "Regularne koszenie, nawożenie, odchwaszczanie i dbanie o trawnik i rośliny — Twój ogród zawsze w idealnym stanie.",
  },
  {
    icon: Paintbrush,
    title: "Projektowanie ogrodów",
    desc: "Indywidualne projekty dopasowane do Twojej przestrzeni, stylu życia i budżetu. Od koncepcji po wizualizację.",
  },
  {
    icon: Droplets,
    title: "Systemy nawadniania",
    desc: "Automatyczne systemy nawadniania, które oszczędzają wodę i czas, a Twój ogród zawsze jest odpowiednio nawodniony.",
  },
  {
    icon: TreePine,
    title: "Modelowanie drzew i krzewów",
    desc: "Profesjonalne cięcie formujące i pielęgnacyjne drzew oraz krzewów ozdobnych dla efektownego wyglądu.",
  },
  {
    icon: Sprout,
    title: "Aranżacje od podstaw",
    desc: "Kompleksowa realizacja ogrodu od zera — przygotowanie terenu, nasadzenia, nawierzchnie i elementy dekoracyjne.",
  },
  {
    icon: Truck,
    title: "Usługi mini koparką",
    desc: "Prace ziemne, wykopy pod fundamenty, instalacje i niwelacja terenu — szybko, precyzyjnie i bez zniszczeń.",
  },
];

const ServicesSection = () => {
  return (
    <section id="uslugi" className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Nasze usługi</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Kompleksowa opieka nad Twoim ogrodem
          </h2>
          <p className="text-muted-foreground text-lg">
            Od projektu po realizację i utrzymanie — zajmiemy się wszystkim, abyś mógł cieszyć się pięknym ogrodem bez stresu.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
