import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShareButton } from "./share-button";
import { Button } from "./ui/button";
import Link from "next/link";
import { Home } from "lucide-react";

type ContentPageProps = {
  title: string;
  content: string;
};

export function ContentPage({ title, content }: ContentPageProps) {
  const textToShare = `${title}\n\n${content}\n\nShared from ऋषि विद्या App`;

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
            {title}
          </CardTitle>
          <div className="absolute top-4 right-4 md:top-1/2 md:-translate-y-1/2">
            <ShareButton textToShare={textToShare} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="whitespace-pre-wrap font-body text-lg md:text-xl leading-relaxed text-center text-primary">
            {content}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
