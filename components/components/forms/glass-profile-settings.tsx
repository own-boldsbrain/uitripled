"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UploadCloud } from "lucide-react";

export function GlassProfileSettingsCard() {
  const shouldReduceMotion = useReducedMotion();
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [bio, setBio] = useState(
    "Projetando interfaces expressivas que parecem vivas."
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: shouldReduceMotion ? "linear" : [0.16, 1, 0.3, 1],
      }}
      className="group w-full max-w-3xl rounded-3xl overflow-hidden border border-border/60 bg-card/85 p-8 backdrop-blur-xl sm:p-12 relative"
      aria-labelledby="glass-profile-settings-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
      />
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Perfil
          </div>
          <h1
            id="glass-profile-settings-title"
            className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl"
          >
            Configurações do perfil
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Atualize seu avatar, detalhes pessoais e preferências de
            notificação.
          </p>
        </div>
        <Badge className="group gap-2 rounded-full border border-border/60 bg-white/5 px-4 py-2 text-muted-foreground transition-colors duration-300 hover:border-primary/60 hover:bg-primary/15 hover:text-primary">
          <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
          Salvamento automático ativado
        </Badge>
      </div>

      <form className="grid gap-8 sm:grid-cols-5" onSubmit={handleSubmit}>
        <div className="sm:col-span-2">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-background/40 p-6 backdrop-blur">
            <Avatar className="h-24 w-24 border border-border/60">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-primary/20 text-lg font-semibold text-primary">
                JS
              </span>
            </Avatar>
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">João Silva</p>
              <p className="text-xs text-muted-foreground">
                Designer de Produto Líder
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              className="rounded-full border-border/60 bg-white/5 px-4 py-2 text-sm text-foreground"
            >
              <UploadCloud className="mr-2 h-4 w-4" />
              Atualizar avatar
            </Button>
          </div>
        </div>

        <div className="space-y-6 sm:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="profile-first-name">Nome</Label>
              <Input
                id="profile-first-name"
                defaultValue="João"
                className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
                autoComplete="given-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile-last-name">Sobrenome</Label>
              <Input
                id="profile-last-name"
                defaultValue="Silva"
                className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="profile-email">Endereço de e-mail</Label>
              <Input
                id="profile-email"
                type="email"
                defaultValue="joao.silva@exemplo.com"
                className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile-phone">Número de telefone</Label>
              <Input
                id="profile-phone"
                type="tel"
                placeholder="+55 (11) 99999-9999"
                className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="profile-bio">Biografia</Label>
            <Textarea
              id="profile-bio"
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              rows={4}
              className="rounded-2xl border-border/60 bg-background/60 px-4 py-3 text-sm"
              placeholder="Conte-nos sobre seu papel, interesses ou foco atual."
            />
            <p className="text-right text-xs text-muted-foreground">
              {bio.length}/160 caracteres
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-background/40 p-5 backdrop-blur">
            <h2 className="text-sm font-medium text-foreground">
              Notificações
            </h2>
            <p className="mb-4 text-xs text-muted-foreground">
              Escolha as atualizações que deseja receber sobre seu espaço de
              trabalho.
            </p>
            <div className="space-y-3">
              <label className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                Habilitar notificações
                <Switch
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </label>
              <label className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                Inscrever-se na newsletter
                <Switch checked={newsletter} onCheckedChange={setNewsletter} />
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              className="rounded-full border-border/60 bg-white/5 px-6 py-3 text-sm text-muted-foreground hover:text-primary"
              onClick={() => window.location.reload()}
            >
              Redefinir alterações
            </Button>
            <Button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-30px_rgba(79,70,229,0.75)] transition-transform duration-300 hover:-translate-y-1"
            >
              Salvar configurações
            </Button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
