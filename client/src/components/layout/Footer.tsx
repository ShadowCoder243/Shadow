import { Link } from "wouter";
import { Mail } from "lucide-react";
import { SiFacebook, SiTelegram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={28} />
              <span className="text-lg font-display font-bold">SHADOWCODER</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Front-end immersif, identité visuelle et accompagnement digital sur-mesure.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Navigation</h3>
            <nav className="space-y-2">
              <Link href="/about">
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground" data-testid="link-footer-about">
                  À propos
                </Button>
              </Link>
              <Link href="/skills">
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground" data-testid="link-footer-skills">
                  Compétences
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground" data-testid="link-footer-portfolio">
                  Portfolio
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-foreground" data-testid="link-footer-contact">
                  Contact
                </Button>
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:shadowcoder243@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-4 w-4" />
                shadowcoder243@gmail.com
              </a>
              <div className="space-y-2 pt-2">
                <a
                  href="https://facebook.com/ShadowCoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-facebook"
                >
                  <SiFacebook className="h-5 w-5" />
                  ShadowCoder
                </a>
                <a
                  href="https://t.me/ShadowCoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  data-testid="link-telegram"
                >
                  <SiTelegram className="h-5 w-5" />
                  @ShadowCoder
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} ShadowCoder. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
