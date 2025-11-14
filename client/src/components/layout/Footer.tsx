import { Link } from "wouter";
import { Code2, Mail, MessageCircle } from "lucide-react";
import { SiFacebook, SiX, SiTiktok } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-lg font-display font-bold">ShadowCoder</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Stay in the shadow, code in the light
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
              <a
                href="https://wa.me/243894197371"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
                +243 894 197 371
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://facebook.com/ShadowCoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-facebook"
                >
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/ShadowCoder243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="link-twitter"
                >
                  <SiX className="h-5 w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@ShadowCoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-tiktok"
                >
                  <SiTiktok className="h-5 w-5" />
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
