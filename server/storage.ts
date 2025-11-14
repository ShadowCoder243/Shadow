import { portfolioProjects, contactMessages, type Project, type InsertProject, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getAllProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class DatabaseStorage implements IStorage {
  async getAllProjects(): Promise<Project[]> {
    return await db.select().from(portfolioProjects);
  }

  async getProject(id: string): Promise<Project | undefined> {
    const [project] = await db.select().from(portfolioProjects).where(eq(portfolioProjects.id, id));
    return project || undefined;
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db
      .insert(portfolioProjects)
      .values(insertProject)
      .returning();
    return project;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db
      .insert(contactMessages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }

  async seedDatabase() {
    const existingProjects = await this.getAllProjects();
    if (existingProjects.length > 0) {
      return;
    }

    const sampleProjects: InsertProject[] = [
      {
        title: "E-Commerce Platform",
        description: "Plateforme e-commerce moderne avec paiement intégré et gestion des stocks en temps réel",
        category: "dev",
        tags: ["React", "Node.js", "Stripe", "MongoDB"],
        imageUrl: "/generated_images/Developer_coding_visualization_387e85f4.png",
        link: "https://example.com/ecommerce",
        github: "https://github.com/shadowcoder/ecommerce-platform",
      },
      {
        title: "Brand Identity Design",
        description: "Conception complète d'identité visuelle pour startup tech avec logo, charte graphique",
        category: "design",
        tags: ["Illustrator", "Branding", "Logo Design"],
        imageUrl: "/generated_images/Graphic_design_workspace_a6e46fef.png",
        link: "https://example.com/brand-identity",
        github: "https://github.com/shadowcoder/brand-identity",
      },
      {
        title: "Network Security Audit",
        description: "Audit complet de sécurité réseau, pentesting et recommandations d'amélioration",
        category: "it",
        tags: ["Security", "Pentesting", "Firewall"],
        imageUrl: "/generated_images/IT_security_concept_15bc5ef3.png",
        link: "https://example.com/security-audit",
        github: "https://github.com/shadowcoder/security-tools",
      },
      {
        title: "Mobile App UI/UX",
        description: "Design d'interface complète pour application mobile de fitness avec animations",
        category: "design",
        tags: ["Figma", "UI/UX", "Mobile"],
        imageUrl: "/generated_images/Graphic_design_workspace_a6e46fef.png",
        link: "https://example.com/mobile-ui",
        github: "https://github.com/shadowcoder/fitness-ui",
      },
      {
        title: "Task Management System",
        description: "Application web de gestion de tâches collaborative avec synchronisation temps réel",
        category: "dev",
        tags: ["React", "WebSocket", "PostgreSQL"],
        imageUrl: "/generated_images/Developer_coding_visualization_387e85f4.png",
        link: "https://example.com/task-manager",
        github: "https://github.com/shadowcoder/task-manager",
      },
      {
        title: "IT Infrastructure Setup",
        description: "Configuration complète d'infrastructure IT pour PME avec backup automatique et monitoring",
        category: "it",
        tags: ["Networking", "Backup", "Configuration"],
        imageUrl: "/generated_images/IT_security_concept_15bc5ef3.png",
        link: "https://example.com/infrastructure",
        github: "https://github.com/shadowcoder/infra-scripts",
      },
    ];

    for (const project of sampleProjects) {
      await this.createProject(project);
    }
  }
}

export const storage = new DatabaseStorage();
