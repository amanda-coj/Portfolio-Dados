import { motion } from "framer-motion";
import { ExternalLink, BarChart3 } from "lucide-react";
import projectCusto from "@/assets/project-custo.png";
import projectMpa from "@/assets/project-mpa.png";
import projectFarol from "@/assets/project-farol.png";
import projectAto from "@/assets/project-ato.png";

const projects = [
  {
    title: "Gestão de Custos",
    category: "Custo de Manutenção",
    desc: "Análise estratégica de OPEX industrial com visões detalhadas por área, material e fornecedor para otimização do orçamento de manutenção.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNmYzYmY4ZDctNDIwZi00ODkyLWFiOTYtYjYwMjg4YmZlM2Q4IiwidCI6ImNkMjgxZGMzLTgyY2UtNGU5MS1iYjE5LTNiOWQ4ZTE1ODJkMSJ9",
    image: projectCusto,
  },
  {
    title: "MPA – Eficiência Operacional",
    category: "Manutenção Preventiva",
    desc: "Monitoramento de indicadores de performance e eficiência, permitindo a identificação rápida de gargalos e melhoria contínua dos processos.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZWFlZjA1MWEtNWVkZC00ODhkLWJhZGMtNGQ1NzU0YjA3NjdlIiwidCI6ImNkMjgxZGMzLTgyY2UtNGU5MS1iYjE5LTNiOWQ4ZTE1ODJkMSJ9",
    image: projectMpa,
  },
  {
    title: "Farol Preditiva",
    category: "Manutenção Preditiva (PdM)",
    desc: "Sistema de monitoramento baseado em condição e análise de criticidade para redução de quebras e aumento da disponibilidade de ativos.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMzhlMGRjNGYtMmI1MS00ZWJjLWEyZTEtYWNjOWUwMDUzMjcxIiwidCI6ImNkMjgxZGMzLTgyY2UtNGU5MS1iYjE5LTNiOWQ4ZTE1ODJkMSJ9",
    image: projectFarol,
  },
  {
    title: "ATO - Visão Consolidada",
    category: "Operações Autônomas",
    desc: "Dashboard de acompanhamento tático com visão consolidada de indicadores de ATO, facilitando o alinhamento de metas e suporte à decisão.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZWFlZjA1MWEtNWVkZC00ODhkLWJhZGMtNGQ1NzU0YjA3NjdlIiwidCI6ImNkMjgxZGMzLTgyY2UtNGU5MS1iYjE5LTNiOWQ4ZTE1ODJkMSJ9",
    image: projectAto,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 flex items-center gap-3"
        >
          <span className="w-1.5 h-10 bg-primary rounded-full" />
          Projetos de Business Intelligence
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 block"
            >
              {/* Container da Imagem Ajustado */}
              <div className="aspect-video overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-widest font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                </div>
                
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-xl">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={20}
                    className="text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.desc}
                </p>
                
                <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                   <BarChart3 size={14} className="text-primary" />
                   <span className="text-xs font-medium text-primary uppercase">
                    Power BI Expert View
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;