import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Terminal } from "lucide-react";
import { SiFacebook, SiTelegram } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/effects/ParticlesBackground";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { GlowCard } from "@/components/motion/GlowCard";
import { fadeInUp } from "@/components/motion/variants";
import heroImage from "@assets/generated_images/shadooow.png";
import { Logo } from "@/components/Logo";

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
              <Logo size={120} className="md:w-32 md:h-32" />
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
              ShadowCoder243
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono"
            data-testid="text-hero-slogan"
          >
            ShadowCoder243 conçoit un front-end interactif, un design immersif et un accompagnement digital clé en main.
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <a href="mailto:shadowcoder243@gmail.com" className="hover:text-foreground transition-colors">
              shadowcoder243@gmail.com
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/ShadowCOder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <SiFacebook className="h-4 w-4" />
                ShadowCoder
              </a>
              <a
                href="https://t.me/ShadowCoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <SiTelegram className="h-4 w-4" />
                ShadowCoder
              </a>
            </div>
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
              ShadowCoder243 réunit développement front-end, design graphique et accompagnement digital —
              je transforme vos idées en expériences interactives prêtes à être déployées.
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
                    Front-end immersif
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sites vitrines rapides, dashboards interactifs et micro-animations réactives.
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
                    Logos, identités visuelles et interfaces harmonieuses totalement intégrées au site.
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
                    Accompagnement Digital
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Mise en ligne, automatisations no-code légères et coaching pour garder vos outils à jour.
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
