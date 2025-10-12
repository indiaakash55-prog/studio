"use client";

import { AppHeader } from "./app-header";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      {children}
    </div>
  );
}
