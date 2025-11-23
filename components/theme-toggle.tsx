"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme, type ThemeMode } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const menuOptions: Array<{
  key: ThemeMode;
  label: string;
  icon: typeof Sun;
}> = [
  { key: "light", label: "Claro", icon: Sun },
  { key: "dark", label: "Escuro", icon: Moon },
  { key: "system", label: "Sistema", icon: Monitor },
];

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const activeTheme = theme === "system" ? `Sistema (${resolvedTheme})` : theme;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "relative h-10 w-10",
            !isMounted && "animate-pulse bg-muted/30 text-muted-foreground"
          )}
          aria-label="Alternar tema"
        >
          <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Alternar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Tema • {isMounted ? activeTheme : "Carregando"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuOptions.map(({ key, label, icon: Icon }) => {
          const isActive = theme === key;
          return (
            <DropdownMenuItem key={key} onSelect={() => setTheme(key)}>
              <Icon className="mr-2 h-4 w-4" />
              <span className="flex-1">{label}</span>
              {(isActive || (key === "system" && theme === "system")) && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
