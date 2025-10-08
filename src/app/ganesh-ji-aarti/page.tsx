import { ContentPage } from "@/components/content-page";
import { ganeshJiAarti } from "@/lib/content";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'श्री गणेश जी की आरती | ऋषि विद्या',
  description: 'Read the full Ganesh Ji Aarti for auspicious beginnings.',
};

export default function GaneshJiAartiPage() {
  return (
    <ContentPage title={ganeshJiAarti.title} content={ganeshJiAarti.text} />
  );
}
