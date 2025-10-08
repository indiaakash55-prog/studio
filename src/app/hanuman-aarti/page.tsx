import { ContentPage } from "@/components/content-page";
import { hanumanAarti } from "@/lib/content";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'श्री हनुमान आरती | ऋषि विद्या',
  description: 'Read the full Hanuman Aarti for worship and reverence.',
};

export default function HanumanAartiPage() {
  return <ContentPage title={hanumanAarti.title} content={hanumanAarti.text} />;
}
