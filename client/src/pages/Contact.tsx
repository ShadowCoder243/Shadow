import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { SiFacebook, SiX, SiTiktok } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { GlowCard } from "@/components/motion/GlowCard";
import { fadeInUp } from "@/components/motion/variants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé!",
        description: "Je vous répondrai dans les plus brefs délais.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-contact-heading">
              Connecte-toi à l'ombre
            </h1>
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
                        disabled={contactMutation.isPending}
                        data-testid="button-submit"
                      >
                        {contactMutation.isPending ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="mr-2"
                            >
                              ⚡
                            </motion.div>
                            Envoi en cours...
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
                <GlowCard>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MessageCircle className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-display font-semibold">WhatsApp</h3>
                    </div>
                    <a
                      href="https://wa.me/243894197371"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-whatsapp-card"
                    >
                      +243 894 197 371
                    </a>
                  </div>
                </GlowCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <GlowCard glowColor="blue">
                  <div className="p-6">
                    <h3 className="text-lg font-display font-semibold mb-4">
                      Réseaux Sociaux
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
                        <span className="text-sm">Facebook</span>
                      </a>
                      <a
                        href="https://twitter.com/ShadowCoder243"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                        data-testid="link-twitter-card"
                      >
                        <SiX className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">X / Twitter</span>
                      </a>
                      <a
                        href="https://www.tiktok.com/@ShadowCoder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                        data-testid="link-tiktok-card"
                      >
                        <SiTiktok className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">TikTok</span>
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
