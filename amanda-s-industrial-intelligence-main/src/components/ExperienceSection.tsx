import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Ambev (Terceirizada)",
    role: "Analista de Dados",
    period: "Jan 2023 - Atual",
    current: true,
    description: [
      "Identificação de oportunidades via análise de dados de manutenção com foco em redução de custos operacionais.",
      "Desenvolvimento de dashboards gerenciais e relatórios estratégicos para rotinas fabris.",
      "Tratamento de dados multivariados utilizando Python e SQL para visualizações no Power BI.",
      "Gestão de indicadores de manutenção, KPIs de desempenho e planejamento junto ao time de confiabilidade.",
    ],
    skills: ["Excel Avançado", "Power BI", "Python", "SQL","Gestão de KPIs", "ETL"],
  },
  {
    company: "Piacentini do Brasil",
    role: "Auxiliar Administrativa de T.I.",
    period: "Mar 2022 - Nov 2022",
    current: false,
    description: [
      "Criação de dashboards em Power BI para monitoramento de rotinas de segurança.",
      "Otimização de processos administrativos através de planilhas avançadas em Excel.",
      "Gestão de ativos eletrônicos, contas de usuários e suporte técnico a softwares e infraestrutura.",
      "Manutenção preventiva de hardware e suporte ao servidor da unidade.",
    ],
    skills: ["Power BI", "Excel Avançado", "Suporte TI", "Infraestrutura"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 flex items-center gap-3"
        >
          <span className="w-1.5 h-10 bg-primary rounded-full" />
          Experiência Profissional
        </motion.h2>

        <div className="relative">
          {/* Linha da Timeline */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border/60" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-8"
              >
                {/* Ícone e Indicador */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 relative ${
                      exp.current
                        ? "bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                        : "bg-muted border border-border"
                    }`}
                  >
                    <Briefcase
                      size={18}
                      className={exp.current ? "text-primary-foreground" : "text-muted-foreground"}
                    />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-lg font-medium text-primary mb-4">{exp.role}</p>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-muted-foreground text-sm leading-relaxed">
                        <ChevronRight size={16} className="text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="text-[10px] uppercase tracking-wider font-bold border border-border px-2 py-0.5 rounded bg-card text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;