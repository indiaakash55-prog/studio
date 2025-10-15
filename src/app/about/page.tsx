import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, Info } from "lucide-react";

export const metadata: Metadata = {
  title: 'हमारे बारे में | ऋषि विद्या',
  description: 'ऋषि विद्या ऐप के उद्देश्य और मिशन के बारे में जानें।',
};

const aboutContent = {
  title: 'हमारे बारे में',
  text: `ऋषि विद्या एक विनम्र प्रयास है जिसका उद्देश्य सनातन धर्म की आध्यात्मिक धरोहर को डिजिटल प्रारूप में संरक्षित और सुलभ बनाना है। हमारा मिशन सभी भक्तों तक आरतियाँ, चालीसा, मंत्र और पूजा विधियाँ आसानी से पहुँचाना है, ताकि वे अपनी आध्यात्मिक यात्रा को और भी गहराई दे सकें।

इस ऐप के माध्यम से, हम आशा करते हैं कि हम अपनी समृद्ध परंपराओं को आने वाली पीढ़ियों के लिए जीवित रख सकेंगे और सभी के लिए ईश्वर की भक्ति को और अधिक सरल और आनंदमय बना सकेंगे।`,
};


export default function AboutPage() {
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
          <div className="flex flex-col items-center gap-2">
            <Info className="h-10 w-10 text-accent" />
            <CardTitle className="font-headline text-3xl md:text-4xl text-center text-accent">
              {aboutContent.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-wrap font-body text-lg md:text-xl leading-relaxed text-center text-foreground/90">
            {aboutContent.text}
          </p>
        </CardContent>
      </Card>
    </main>
  );
}