import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { fadeInUp } from "@/components/motion/variants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, type Project, type ProjectCategory } from "@/content/projects";

type Category = "all" | ProjectCategory;

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "dev", label: "Développement" },
  { id: "design", label: "Design" },
  { id: "support", label: "Support digital" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-portfolio-heading">
              Mes Projets
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez une sélection de réalisations front-end, design graphique et support digital.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="transition-all"
                data-testid={`button-filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </FadeIn>

        <StaggerContainer>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  variants={fadeInUp}
                  className="group"
                  data-testid={`card-project-${project.id}`}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col hover:border-primary/50 hover:shadow-xl hover:shadow-primary/30 transition-all relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:pointer-events-none"
                  >
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <div className="absolute inset-0 bg-gradient-to-br from-background/60 to-background/40" />
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                          <ImageIcon className="h-16 w-16 text-muted-foreground/30" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="icon"
                              variant="secondary"
                              className="backdrop-blur-md border border-primary/50 hover:border-primary hover:bg-primary/20"
                              data-testid={`button-view-${project.id}`}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="icon"
                              variant="secondary"
                              className="backdrop-blur-md border border-accent/50 hover:border-accent hover:bg-accent/20"
                              data-testid={`button-github-${project.id}`}
                            >
                              <Github className="h-4 w-4" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col relative z-10">
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors" data-testid={`text-title-${project.id}`}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag, tagIndex) => (
                          <Badge key={tag} variant="secondary" className="text-xs" data-testid={`badge-tag-${project.id}-${tagIndex}`}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </StaggerContainer>

        {filteredProjects.length === 0 && (
          <FadeIn>
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucun projet dans cette catégorie pour le moment
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
