import { motion } from "framer-motion";
import { Code2, Palette, ShieldCheck, Server } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { GlowCard } from "@/components/motion/GlowCard";
import { TypewriterText } from "@/components/effects/TypewriterText";
import { fadeInUp } from "@/components/motion/variants";
import { Badge } from "@/components/ui/badge";
import devImage from "@assets/generated_images/Developer_coding_visualization_387e85f4.png";
import designImage from "@assets/generated_images/Graphic_design_workspace_a6e46fef.png";
import itImage from "@assets/generated_images/IT_security_concept_15bc5ef3.png";

const devSkills = [
  "React / Next.js",
  "Node.js / Express",
  "TypeScript / JavaScript",
  "Python",
  "PostgreSQL / MongoDB",
  "REST APIs / GraphQL",
  "Git / GitHub",
  "Docker / CI/CD",
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

const itSkills = [
  "Maintenance PC/Mac",
  "Réseaux & Configuration",
  "Dépannage Système",
  "Optimisation Performance",
  "Installation Logiciels",
  "Backup & Recovery",
  "Support Technique",
  "Formation Utilisateurs",
];

const securitySkills = [
  "Pentesting & Audit",
  "Sécurisation Réseau",
  "Firewall Configuration",
  "VPN Setup",
  "Surveillance & Monitoring",
  "Incident Response",
  "OWASP Top 10",
  "Encryption & SSL",
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
                      <h2 className="text-3xl font-display font-bold">Développeur Web & Logiciel</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Création de sites web, applications, APIs et automatisation avec les technologies modernes
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
                      Design de logos, affiches, UI/UX - création visuelle qui marque les esprits
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
                      <Server className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-display font-bold">Support IT</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Maintenance, dépannage et optimisation de vos systèmes informatiques
                    </p>
                    <div className="mb-6 bg-muted/30 p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm">Système opérationnel</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm">Performance optimisée</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm">Sécurité renforcée</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {itSkills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" data-testid={`badge-it-${index}`}>
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden">
                    <img
                      src={itImage}
                      alt="IT Support"
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
                  <div className="order-2 lg:order-1 relative h-64 lg:h-auto rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <ShieldCheck className="h-32 w-32 text-primary/50" />
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <ShieldCheck className="h-8 w-8 text-accent" />
                      <h2 className="text-3xl font-display font-bold">Cybersécurité</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Sécurisation, surveillance et configuration de vos infrastructures réseau
                    </p>
                    <div className="mb-6 space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "95%" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-accent"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">Network Security</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "90%" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-accent"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">Pentesting</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "88%" }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-accent"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">Incident Response</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {securitySkills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" data-testid={`badge-security-${index}`}>
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
