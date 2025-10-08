import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShareButton } from "./share-button";

type ContentPageProps = {
  title: string;
  content: string;
};

export function ContentPage({ title, content }: ContentPageProps) {
  const textToShare = `${title}\n\n${content}\n\nShared from ऋषि विद्या App`;

  return (
    <main className="flex-1 p-4 md:p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="relative">
          <CardTitle className="font-headline text-3xl md:text-4xl text-center text-accent">
            {title}
          </CardTitle>
          <div className="absolute top-4 right-4">
            <ShareButton textToShare={textToShare} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="whitespace-pre-wrap font-body text-lg md:text-xl leading-relaxed text-center text-foreground/90">
            {content}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
