import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Trophy } from "lucide-react";
import { Logo } from "@/components/Logo";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { fadeInUp, slideInLeft, slideInRight } from "@/components/motion/variants";

const timelineItems = [
  {
    icon: Rocket,
    year: "2020",
    title: "Premiers pixels animés",
    description: "Découverte de la programmation et création de mes premières interfaces interactives",
  },
  {
    icon: Code2,
    year: "2021",
    title: "Focus Front-End",
    description: "Maîtrise de React, Vite et TypeScript pour des expériences 100% côté client",
  },
  {
    icon: Lightbulb,
    year: "2022",
    title: "Design & Créativité",
    description: "Approfondissement UI/UX, identité visuelle et motion design pour harmoniser chaque projet",
  },
  {
    icon: Trophy,
    year: "2023-2025",
    title: "Studio ShadowCoder",
    description: "Accompagnement digital, front-end immersif et identités visuelles clé en main",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-about-heading">
              Qui est ShadowCoder243 ?
            </h1>
            <div className="flex justify-center mb-8">
              <Logo size={80} />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ShadowCoder243 est un passionné d'informatique, créatif et polyvalent, qui ne code pas juste des lignes 
              mais construit des mondes digitaux accessibles à tous.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-display font-bold mb-4">Ma Philosophie</h2>
              <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4 mb-6">
                "Je ne code pas juste des lignes, je construis des mondes."
              </blockquote>
              <p className="text-muted-foreground mb-4">
                Pour moi, chaque projet est une opportunité de créer quelque chose d'unique. 
                Je combine expertise technique et vision créative pour transformer vos idées en 
                réalité digitale.
              </p>
              <p className="text-muted-foreground mb-4">
                Avec ShadowCoder243, je cultive une approche artisanale : compréhension précise de la marque,
                prototypage rapide, phase d'itération et déploiement maîtrisé sur Vercel ou GitHub.
                Cette méthode garantit des interfaces rapides, accessibles et prêtes à scaler.
              </p>
              <p className="text-muted-foreground">
                Que ce soit un site web élégant, une application front-end performante ou un design captivant,
                je m'engage à livrer l'excellence et à rester présent pour l'évolution de vos outils.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-display font-bold mb-4">Mon Approche</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Écoute & Compréhension</h3>
                  <p className="text-sm text-muted-foreground">
                    Je prends le temps de comprendre vos besoins et objectifs avant de proposer une solution
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-2">Innovation & Qualité</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilisation des technologies les plus récentes avec un focus sur la performance et l'UX
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Support Continu</h3>
                  <p className="text-sm text-muted-foreground">
                    Je reste disponible après la livraison pour assurer votre satisfaction totale
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24"
        >
          <div className="bg-muted/30 border border-border rounded-lg p-8">
            <h2 className="text-2xl font-display font-bold mb-4">Pourquoi ShadowCoder243</h2>
            <p className="text-muted-foreground mb-4">
              Le nom ShadowCoder243 reflète mon envie de travailler dans l'ombre pour faire briller vos projets.
              Le numéro 243 rappelle mon attachement au Congo et à la communauté créative qui m'inspire. 
              Mon objectif est simple : rendre votre marque visible en ligne, tout en vous laissant concentré sur votre cœur de métier.
            </p>
            <p className="text-muted-foreground">
              En combinant storytelling, design système et automatisations no-code légères, je propose des expériences cohérentes,
              multicanales et faciles à déployer. Cette vision, je la partage sur les réseaux sociaux, les plateformes freelances et 
              désormais sur Google, afin que le mot-clé “ShadowCoder243” devienne synonyme de fiabilité digitale.
            </p>
          </div>
        </motion.div>

        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            Mon Parcours
          </h2>
        </FadeIn>

        <StaggerContainer className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary shadow-lg shadow-primary/50" />

          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative flex items-center mb-12 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`timeline-item-${index}`}
              >
                <div className={`flex-1 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all ${isEven ? "md:text-right" : ""}`}
                  >
                    <div className={`flex items-center gap-3 mb-2 ${isEven ? "md:justify-end" : ""}`}>
                      <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-sm font-mono text-accent">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 border-4 border-background shadow-lg shadow-primary/50"
                />
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
