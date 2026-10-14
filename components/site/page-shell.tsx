import type { ReactNode } from "react";
import { Footer } from "@/components/site/sections/footer";
import { Header } from "@/components/site/sections/header";
import { Preloader } from "@/components/site/sections/preloader";

export function SiteShell({
  children,
  preloader = false,
  jsonLd,
}: {
  children: ReactNode;
  preloader?: boolean;
  jsonLd?: ReactNode;
}) {
  return (
    <div className="app-root">
      {jsonLd}
      <div className="bg-dots" aria-hidden />
      <div className="bg-grain" aria-hidden />
      {preloader ? <Preloader /> : null}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
