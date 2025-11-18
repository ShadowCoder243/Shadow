import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <Card className="w-full max-w-md mx-4 border border-border/60 shadow-xl shadow-primary/5">
        <CardContent className="pt-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-3 text-primary">
            <AlertCircle className="h-8 w-8" />
            <h1 className="text-2xl font-bold">404 - Page introuvable</h1>
          </div>

          <p className="text-sm text-muted-foreground">
            Cette page est restée dans l'ombre. Retournez à l'accueil pour continuer votre visite.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
