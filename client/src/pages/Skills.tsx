import { motion } from "framer-motion";
import { Code2, Palette, MonitorSmartphone, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { GlowCard } from "@/components/motion/GlowCard";
import { TypewriterText } from "@/components/effects/TypewriterText";
import { fadeInUp } from "@/components/motion/variants";
import { Badge } from "@/components/ui/badge";
import devImage from "@assets/generated_images/Developer_coding_visualization_387e85f4.png";
import designImage from "@assets/generated_images/Graphic_design_workspace_a6e46fef.png";

const devSkills = [
  "React / Next.js",
  "Vite / Tailwind CSS",
  "TypeScript / JavaScript",
  "Framer Motion / GSAP",
  "Three.js / R3F",
  "Intégration API côté client",
  "Optimisation Core Web Vitals",
  "Accessibilité & SEO",
];

const designSkills = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma / Sketch",
  "UI/UX Design",
  "Logo Design",
  "Branding",
  "Typography",
  "Color Theory",
];

const supportSkills = [
  "Maintenance logicielle",
  "Optimisation d'interface",
  "Assistance CMS",
  "Intégration No-Code",
  "Automatisation légère",
  "Support contenu",
  "Formation client",
  "Suivi post-livraison",
];

const creativeSkills = [
  "Direction artistique",
  "Design système",
  "Motion UI",
  "Prototypage Figma",
  "Brand voice",
  "Micro-interactions",
  "Documentation design",
  "Workshops créatifs",
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-skills-heading">
              Ce que je sais faire
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une expertise polyvalente au service de vos projets digitaux
            </p>
          </div>
        </FadeIn>

        <div className="space-y-24">
          <StaggerContainer>
            <motion.div variants={fadeInUp}>
              <GlowCard>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Code2 className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-display font-bold">Créateur Front-End & UI</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Création de sites web, applications front-end et micro-interactions avec des technologies 100% orientées client.
                    </p>
                    <div className="mb-6 bg-muted/30 p-4 rounded-lg border border-border">
                      <div className="font-mono text-sm text-primary mb-2">
                        <TypewriterText text="const createWebsite = () => {" speed={30} />
                      </div>
                      <div className="font-mono text-sm text-accent ml-4">
                        <TypewriterText text="  return 'Professional & Fast';" speed={30} />
                      </div>
                      <div className="font-mono text-sm text-primary">
                        <TypewriterText text="};" speed={30} />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {devSkills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" data-testid={`badge-dev-${index}`}>
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden">
                    <img
                      src={devImage}
                      alt="Development"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard glowColor="blue">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto rounded-lg overflow-hidden">
                    <img
                      src={designImage}
                      alt="Design"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Palette className="h-8 w-8 text-accent" />
                      <h2 className="text-3xl font-display font-bold">Graphiste Créatif</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Logos, identités visuelles et UI/UX sur mesure pour offrir une expérience cohérente et mémorable.
                    </p>
                    <div className="mb-6">
                      <div className="flex gap-4 mb-3">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-primary/50 hover-elevate cursor-pointer" />
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent to-accent/50 hover-elevate cursor-pointer" />
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary via-accent to-primary hover-elevate cursor-pointer" />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {designSkills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" data-testid={`badge-design-${index}`}>
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <MonitorSmartphone className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-display font-bold">Support Digital</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Maintenance front, optimisation continue et accompagnement pour vos outils en ligne.
                    </p>
                    <div className="mb-6 bg-muted/30 p-4 rounded-lg border border-border space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm">Site en ligne et monitoré</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm">Performance suivie</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm">Clients autonomes & formés</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {supportSkills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" data-testid={`badge-support-${index}`}>
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 via-accent/30 to-primary/10 flex items-center justify-center">
                    <MonitorSmartphone className="h-24 w-24 text-primary/70" />
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard glowColor="blue">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 via-primary/10 to-background flex items-center justify-center">
                    <Sparkles className="h-32 w-32 text-accent/60" />
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="h-8 w-8 text-accent" />
                      <h2 className="text-3xl font-display font-bold">Studio Créatif</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Workshops, animations et guidelines pour garantir une expérience interactive cohérente.
                    </p>
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "96%" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-accent"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">Branding</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "92%" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-accent"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">UX Motion</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "90%" }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-accent"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">Prototypage</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {creativeSkills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" data-testid={`badge-creative-${index}`}>
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
