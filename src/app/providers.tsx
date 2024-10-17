"use client";

import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/components/Context/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // Todo: Use Session storage instead of AuthProvider
    <AuthProvider>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}
