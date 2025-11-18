import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { SiFacebook, SiTelegram } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { GlowCard } from "@/components/motion/GlowCard";
import { fadeInUp } from "@/components/motion/variants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Logo } from "@/components/Logo";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(3, "Le sujet doit contenir au moins 3 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Créer un lien mailto avec les données du formulaire
    const mailtoLink = `mailto:shadowcoder243@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
    
    // Ouvrir le client de messagerie
    window.location.href = mailtoLink;
    
    // Simuler un délai pour l'UX
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message préparé!",
        description: "Votre client de messagerie devrait s'ouvrir. Si ce n'est pas le cas, envoyez un email à shadowcoder243@gmail.com",
      });
      form.reset();
    }, 500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-contact-heading">
              Connecte-toi à l'ombre
            </h1>
            <div className="flex justify-center mb-8">
              <Logo size={72} />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une question, un projet? N'hésitez pas à me contacter. Je serai ravi d'échanger avec vous.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <GlowCard>
                <div className="p-8">
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Envoyez-moi un message
                  </h2>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nom</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Votre nom"
                                  {...field}
                                  data-testid="input-name"
                                  className="hover-elevate"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="votre@email.com"
                                  {...field}
                                  data-testid="input-email"
                                  className="hover-elevate"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sujet</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Sujet de votre message"
                                {...field}
                                data-testid="input-subject"
                                className="hover-elevate"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Votre message..."
                                rows={6}
                                {...field}
                                data-testid="input-message"
                                className="resize-none hover-elevate"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full group"
                        disabled={isSubmitting}
                        data-testid="button-submit"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="mr-2"
                            >
                              ⚡
                            </motion.div>
                            Préparation...
                          </>
                        ) : (
                          <>
                            Envoyer le message
                            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </GlowCard>
            </FadeIn>
          </div>

          <div className="space-y-6">
            <StaggerContainer>
              <motion.div variants={fadeInUp}>
                <GlowCard glowColor="blue">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="h-6 w-6 text-accent" />
                      <h3 className="text-lg font-display font-semibold">Email</h3>
                    </div>
                    <a
                      href="mailto:shadowcoder243@gmail.com"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                      data-testid="link-email-card"
                    >
                      shadowcoder243@gmail.com
                    </a>
                  </div>
                </GlowCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <GlowCard glowColor="blue">
                  <div className="p-6">
                    <h3 className="text-lg font-display font-semibold mb-4">
                      Présence en ligne
                    </h3>
                    <div className="space-y-3">
                      <a
                        href="https://facebook.com/ShadowCoder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                        data-testid="link-facebook-card"
                      >
                        <SiFacebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">Facebook — ShadowCoder</span>
                      </a>
                      <a
                        href="https://t.me/ShadowCoder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                        data-testid="link-telegram-card"
                      >
                        <SiTelegram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">Telegram — @ShadowCoder</span>
                      </a>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
