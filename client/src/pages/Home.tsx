import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, ShieldCheck, Terminal } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/effects/ParticlesBackground";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { GlowCard } from "@/components/motion/GlowCard";
import { fadeInUp } from "@/components/motion/variants";
import heroImage from "@assets/generated_images/Cyberpunk_hero_background_19e73930.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <Code2 className="h-24 w-24 md:h-32 md:w-32 text-primary mx-auto" />
              <motion.div
                className="absolute inset-0 bg-primary/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
            data-testid="text-hero-title"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
              ShadowCoder
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono"
            data-testid="text-hero-slogan"
          >
            Stay in the shadow, code in the light
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/portfolio">
              <Button size="lg" className="group" data-testid="button-view-portfolio">
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="backdrop-blur-sm" data-testid="button-contact-me">
                Me contacter
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              Ce que je fais
            </h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Développement web, design graphique, support IT et cybersécurité - 
              je transforme vos idées en solutions digitales professionnelles
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeInUp}>
              <GlowCard>
                <div className="p-6" data-testid="card-service-dev">
                  <div className="relative">
                    <Terminal className="h-12 w-12 text-primary mb-4" />
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">
                    Développement Web
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sites web, applications, APIs et automatisation avec les technologies modernes
                  </p>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard glowColor="blue">
                <div className="p-6" data-testid="card-service-design">
                  <div className="relative">
                    <Palette className="h-12 w-12 text-accent mb-4" />
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">
                    Design Graphique
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Logos, affiches, UI/UX - création visuelle qui marque les esprits
                  </p>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard>
                <div className="p-6" data-testid="card-service-it">
                  <div className="relative">
                    <Code2 className="h-12 w-12 text-primary mb-4" />
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">
                    Support IT
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Maintenance, dépannage et optimisation de vos systèmes informatiques
                  </p>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard glowColor="blue">
                <div className="p-6" data-testid="card-service-security">
                  <div className="relative">
                    <ShieldCheck className="h-12 w-12 text-accent mb-4" />
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">
                    Cybersécurité
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sécurisation, surveillance et configuration de vos infrastructures
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <div className="text-center mt-16">
              <Link href="/skills">
                <Button size="lg" variant="outline" data-testid="button-explore-skills">
                  Explorer mes compétences
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
