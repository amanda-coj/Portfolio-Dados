import { motion } from "framer-motion";
import { BarChart3, LayoutDashboard, FolderKanban, Truck } from "lucide-react";

const skills = [
  {
    icon: BarChart3,
    title: "Visualização & Análise de Dados",
    desc: "Transformação de dados brutos em insights visuais claros e acionáveis para suporte à decisão.",
  },
  {
    icon: LayoutDashboard,
    title: "Design de Dashboards",
    desc: "Criação de dashboards interativos e intuitivos em Power BI com foco em UX e storytelling de dados.",
  },
  {
    icon: FolderKanban,
    title: "Gestão de Projetos",
    desc: "Planejamento e execução de projetos de dados com metodologias ágeis e foco em entregas de valor.",
  },
  {
    icon: Truck,
    title: "Supply Chain",
    desc: "Análise e otimização de cadeias de suprimentos com indicadores de performance e eficiência.",
  },
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-12 flex items-center gap-3"
        >
          <span className="w-1 h-8 bg-primary rounded-full" />
          Principais Habilidades
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <skill.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
