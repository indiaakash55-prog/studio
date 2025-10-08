import { ContentPage } from "@/components/content-page";
import { jaharveerBabaAarti } from "@/lib/content";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'श्री जाहरवीर बाबा की आरती | ऋषि विद्या',
  description: 'Read the full Jaharveer Baba Ki Aarti for blessings and protection.',
};

export default function JaharveerBabaAartiPage() {
  return (
    <ContentPage title={jaharveerBabaAarti.title} content={jaharveerBabaAarti.text} />
  );
}
