import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre-mim" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full" />
            Sobre mim
          </h2>

          <p className="text-muted-foreground leading-relaxed text-lg">
            Seja muito bem-vindo(a) ao meu portfólio. 
          </p>

          <div className="mt-6 flex items-start gap-4">
            <span className="text-5xl font-black text-accent leading-none">
              3+
            </span>
            <p className="text-muted-foreground leading-relaxed pt-1">
               anos em análise de dados, conhecimentos na área de Dados e Business Intelligence, atuando na análise
e desenvolvimento de dashboards utilizando a plataforma Power BI, extração de relatórios, desenvolvimento de ferramentas de
gestão visual, criação de indicadores de performance, interpretação e transformação de dados
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
