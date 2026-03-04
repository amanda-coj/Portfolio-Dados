import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Portfólio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-gradient-cyan">Amanda</span>{" "}
            <span className="text-foreground">Oliveira</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Analista de Dados.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#sobre-mim"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Sobre mim
              <ArrowDown size={18} />
            </a>
            <a
              href="/Curriculo_Amanda_Oliveira.pdf"
              download
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              <Download size={18} />
              Baixar Currículo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
