import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Na jakim terenie działacie?",
    a: "Działamy na terenie całego województwa mazowieckiego. Realizujemy projekty zarówno w Warszawie, jak i w mniejszych miejscowościach w regionie.",
  },
  {
    q: "Jak wygląda proces wyceny?",
    a: "Po kontakcie umawiamy się na bezpłatną wizję lokalną, podczas której oceniamy zakres prac, następnie przygotowujemy szczegółową wycenę dostosowaną do Twoich potrzeb i budżetu.",
  },
  {
    q: "Czy oferujecie stałą opiekę nad ogrodem?",
    a: "Tak! Oferujemy abonamentową pielęgnację ogrodów — regularne koszenie, nawożenie, przycinanie i sezonowe prace. Dzięki temu Twój ogród wygląda idealnie przez cały rok.",
  },
  {
    q: "Jakie materiały i rośliny używacie?",
    a: "Używamy wyłącznie materiałów najwyższej jakości od sprawdzonych dostawców. Rośliny dobieramy tak, aby pasowały do warunków glebowych i klimatycznych Twojego ogrodu.",
  },
  {
    q: "Jak długo trwa realizacja typowego projektu?",
    a: "Czas realizacji zależy od zakresu prac. Mniejsze projekty realizujemy nawet w ciągu jednego dnia, większe aranżacje od podstaw mogą trwać kilka tygodni. Zawsze ustalamy terminy indywidualnie.",
  },
  {
    q: "Czy udzielacie gwarancji na wykonane prace?",
    a: "Tak, udzielamy gwarancji na wszystkie nasze realizacje. Zależy nam na długotrwałym zadowoleniu klientów, dlatego w razie potrzeby wracamy i poprawiamy.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-muted-foreground text-lg">
            Odpowiadamy na pytania, które najczęściej słyszymy od naszych klientów.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
