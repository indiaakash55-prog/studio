import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { divyaMantraKosh } from "@/lib/content";
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: 'दिव्य मंत्र कोश | ऋषि विद्या',
  description: 'A collection of powerful mantras including Gayatri Mantra, Maha Mrityunjaya Mantra, and more.',
};

export default function DivyaMantraKoshPage() {
  return (
    <main className="flex-1 p-4 md:p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="relative flex-row items-center justify-center">
           <div className="absolute top-4 left-4 md:top-1/2 md:-translate-y-1/2">
            <Button asChild variant="ghost" size="icon">
              <Link href="/">
                <Home className="h-6 w-6" />
                <span className="sr-only">Home</span>
              </Link>
            </Button>
          </div>
          <CardTitle className="font-headline text-3xl md:text-4xl text-center text-accent">
            {divyaMantraKosh.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {divyaMantraKosh.mantras.map((mantra, index) => (
            <div key={mantra.name}>
              <div className="text-center">
                <h2 className="font-headline text-2xl text-primary">{mantra.name}</h2>
                <p className="whitespace-pre-wrap font-body text-lg md:text-xl leading-relaxed text-foreground/90 mt-4">
                  {mantra.mantra}
                </p>
              </div>
              {index < divyaMantraKosh.mantras.length - 1 && <Separator className="my-8 bg-border/50" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
