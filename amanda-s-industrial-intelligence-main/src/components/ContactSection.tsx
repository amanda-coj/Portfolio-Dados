import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "amandacaroline.oj@gmail.com",
    href: "mailto:amandacaroline.oj@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "amanda-coj",
    href: "https://www.linkedin.com/in/amanda-coj",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "amanda-coj",
    href: "https://github.com/amanda-coj/",
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-12 flex items-center gap-3"
        >
          <span className="w-1 h-8 bg-primary rounded-full" />
          Contato
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 card-hover group text-center block"
            >
              <contact.icon
                size={24}
                className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform"
              />
              <p className="text-sm font-medium text-foreground mb-1">
                {contact.label}
              </p>
              <p className="text-xs text-muted-foreground">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-24 pt-8 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Amanda Oliveira. Todos os direitos
          reservados.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
