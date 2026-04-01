import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";

const projects = [
  {
    img: gallery1,
    title: "Ogród przydomowy – Warszawa",
    desc: "Kompleksowa aranżacja z geometrycznymi rabatami i strefą wypoczynku.",
  },
  {
    img: gallery2,
    title: "System nawadniania – Wołomin",
    desc: "Automatyczny system zraszaczy zapewniający równomierne nawodnienie całego trawnika.",
  },
  {
    img: gallery3,
    title: "Strefa relaksu – Legionowo",
    desc: "Elegancka przestrzeń wypoczynkowa otoczona żywopłotami i trawami ozdobnymi.",
  },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Realizacje</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Nasze najlepsze projekty
          </h2>
          <p className="text-muted-foreground text-lg">
            Każdy ogród to unikalna historia. Zobacz efekty naszej pracy i zainspiruj się.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-2xl overflow-hidden bg-card shadow-card border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 lg:p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
