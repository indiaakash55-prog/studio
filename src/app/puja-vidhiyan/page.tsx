import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pujaVidhiyan } from "@/lib/content";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'पूजा की विधियाँ | ऋषि विद्या',
  description: 'Learn step-by-step guides for various Hindu pujas.',
};

export default function PujaVidhiyanPage() {
  return (
    <main className="flex-1 p-4 md:p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl text-center text-accent">
            {pujaVidhiyan.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {pujaVidhiyan.pujas.map((puja) => (
              <AccordionItem value={puja.name} key={puja.name}>
                <AccordionTrigger className="font-headline text-2xl text-primary hover:no-underline">
                  {puja.name}
                </AccordionTrigger>
                <AccordionContent className="px-4 space-y-6">
                  <p className="text-foreground/80 text-lg">{puja.description}</p>
                  
                  <div>
                    <h3 className="font-headline text-xl text-foreground mb-2">पूजा सामग्री</h3>
                    <ul className="list-disc list-inside space-y-1 font-body text-base text-foreground/90">
                      {puja.samagri.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-headline text-xl text-foreground mb-2">पूजा विधि</h3>
                    <p className="whitespace-pre-wrap font-body text-base leading-relaxed text-foreground/90">
                      {puja.vidhi}
                    </p>
                  </div>

                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </main>
  );
}
