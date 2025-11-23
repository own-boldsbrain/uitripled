"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Github, Twitter, Chrome } from "lucide-react";

const socialProviders = [
  { name: "Google", icon: Chrome },
  { name: "Twitter", icon: Twitter },
  { name: "GitHub", icon: Github },
];

export function GlassSignUpCard() {
  const shouldReduceMotion = useReducedMotion();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: shouldReduceMotion ? "linear" : [0.16, 1, 0.3, 1],
      }}
      className="group w-full rounded-3xl overflow-hidden border border-border/60 bg-card/85 p-8 backdrop-blur-xl sm:p-12 relative"
      aria-labelledby="glass-sign-up-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
      />
      <div className="mb-8 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Cadastrar-se
        </div>
        <h1
          id="glass-sign-up-title"
          className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl"
        >
          Crie sua conta
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Comece a construir interfaces expressivas. Escolha um provedor ou
          cadastre-se com e-mail.
        </p>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        {socialProviders.map((provider) => (
          <Button
            key={provider.name}
            variant="outline"
            className="flex items-center justify-center gap-2 rounded-full border-border/60 bg-card/70 text-sm text-foreground transition-transform duration-300 hover:-translate-y-1 hover:text-primary"
            aria-label={`Continuar com ${provider.name}`}
          >
            <provider.icon className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">{provider.name}</span>
          </Button>
        ))}
      </div>

      <div className="mb-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border/70" />
        <span className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
          ou
        </span>
        <div className="h-px flex-1 bg-border/70" />
      </div>

      <form className="grid gap-6 sm:grid-cols-2" onSubmit={handleSubmit}>
        <div className="space-y-2 sm:col-span-1">
          <Label htmlFor="first-name">Nome</Label>
          <Input
            id="first-name"
            name="firstName"
            placeholder="João"
            autoComplete="given-name"
            required
            className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
          />
        </div>
        <div className="space-y-2 sm:col-span-1">
          <Label htmlFor="last-name">Sobrenome</Label>
          <Input
            id="last-name"
            name="lastName"
            placeholder="Silva"
            autoComplete="family-name"
            required
            className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="sign-up-email">Endereço de e-mail</Label>
          <Input
            id="sign-up-email"
            type="email"
            placeholder="voce@exemplo.com"
            autoComplete="email"
            required
            className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
          />
        </div>
        <div className="space-y-2 sm:col-span-1">
          <Label htmlFor="sign-up-password">Senha</Label>
          <Input
            id="sign-up-password"
            type="password"
            placeholder="Crie uma senha"
            autoComplete="new-password"
            required
            className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
          />
        </div>
        <div className="space-y-2 sm:col-span-1">
          <Label htmlFor="sign-up-confirm-password">Confirmar senha</Label>
          <Input
            id="sign-up-confirm-password"
            type="password"
            placeholder="Repita a senha"
            autoComplete="new-password"
            required
            className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm text-muted-foreground">
            <Checkbox
              id="sign-up-terms"
              checked={acceptedTerms}
              onCheckedChange={(checked) => setAcceptedTerms(Boolean(checked))}
            />
            <span>
              Concordo com os{" "}
              <button
                type="button"
                className="text-primary underline-offset-4 hover:underline"
              >
                termos de serviço
              </button>{" "}
              e{" "}
              <button
                type="button"
                className="text-primary underline-offset-4 hover:underline"
              >
                política de privacidade
              </button>
              .
            </span>
          </label>
        </div>

        <div className="sm:col-span-2">
          <Button
            type="submit"
            disabled={!acceptedTerms}
            className="w-full rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-30px_rgba(79,70,229,0.75)] transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Criar conta
          </Button>
        </div>
      </form>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Já tem uma conta?{" "}
        <button
          type="button"
          className="text-primary underline-offset-4 hover:underline"
        >
          Entrar
        </button>
      </p>
    </motion.div>
  );
}
