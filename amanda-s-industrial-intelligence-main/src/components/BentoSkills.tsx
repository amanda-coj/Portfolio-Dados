import { motion } from "framer-motion";

const techSkills = [
  { name: "Power BI" },
  { name: "SQL" },
  { name: "Python" },
  { name: "Excel / VBA" },
  { name: "AWS" },
  { name: "Azure" },
];

const BentoSkills = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Título com animação e indicador lateral */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-12 flex items-center gap-3"
        >
          <span className="w-1 h-8 bg-primary rounded-full" />
          Tecnologias & Ferramentas
        </motion.h2>

        {/* Grid de Habilidades */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
          {techSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 flex flex-col justify-center min-h-[120px] hover:shadow-lg hover:border-primary/50 transition-all duration-300 group cursor-default"
            >
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoSkills;