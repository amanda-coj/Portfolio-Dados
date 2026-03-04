import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Engenharia da Computação",
    institution: "UFMA – Universidade Federal do Maranhão",
    status: "Em andamento",
    current: true,
  },
  {
    degree: "Bacharelado em Ciência e Tecnologia",
    institution: "UFMA – Universidade Federal do Maranhão",
    status: "Concluído",
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-12 flex items-center gap-3"
        >
          <span className="w-1 h-8 bg-primary rounded-full" />
          Educação
        </motion.h2>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 bg-card border border-border rounded-xl p-6"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  edu.current
                    ? "bg-primary/20 border-2 border-primary"
                    : "bg-secondary border border-border"
                }`}
              >
                <GraduationCap
                  size={18}
                  className={edu.current ? "text-primary" : "text-muted-foreground"}
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      edu.current
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
