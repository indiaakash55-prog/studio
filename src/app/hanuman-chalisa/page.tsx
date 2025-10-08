import { ContentPage } from "@/components/content-page";
import { hanumanChalisa } from "@/lib/content";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'श्री हनुमान चालीसा | ऋषि विद्या',
  description: 'Read the full Hanuman Chalisa for strength, courage, and devotion.',
};


export default function HanumanChalisaPage() {
  return (
    <ContentPage title={hanumanChalisa.title} content={hanumanChalisa.text} />
  );
}
