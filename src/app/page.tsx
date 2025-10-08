import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, BookOpenText, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'श्री हनुमान चालीसा',
    href: '/hanuman-chalisa',
    description: 'Strength, courage, and devotion.',
    icon: <BookOpenText className="size-8 text-accent" />,
  },
  {
    title: 'श्री हनुमान आरती',
    href: '/hanuman-aarti',
    description: 'Worship and reverence.',
    icon: <Sparkles className="size-8 text-accent" />,
  },
  {
    title: 'माता रानी की आरती',
    href: '/mata-rani-aarti',
    description: 'Divine feminine power.',
    icon: <Sparkles className="size-8 text-accent" />,
  },
  {
    title: 'श्री गणेश जी की आरती',
    href: '/ganesh-ji-aarti',
    description: 'Auspicious beginnings.',
    icon: <Sparkles className="size-8 text-accent" />,
  },
  {
    title: 'श्री विष्णु जी की आरती',
    href: '/vishnu-aarti',
    description: 'Preservation and balance.',
    icon: <Sparkles className="size-8 text-accent" />,
  },
  {
    title: 'श्री जाहरवीर बाबा की आरती',
    href: '/jaharveer-baba-aarti',
    description: 'Blessings and protection.',
    icon: <Sparkles className="size-8 text-accent" />,
  },
  {
    title: 'दिव्य मंत्र कोश',
    href: '/divya-mantra-kosh',
    description: 'A collection of powerful mantras.',
    icon: <Shield className="size-8 text-accent" />,
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          ऋषि विद्या
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          An abode of spiritual wisdom and divine chants.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.title}>
            <Card className="flex flex-col justify-between h-full hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <CardTitle className="font-headline text-2xl text-foreground">
                    {feature.title}
                  </CardTitle>
                </div>
                <CardDescription className="pt-2">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <div className="flex justify-end p-4">
                 <ArrowRight className="size-6 text-muted-foreground" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
