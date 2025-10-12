import { ContentPage } from "@/components/content-page";
import { vishnuAarti } from "@/lib/content";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'श्री विष्णु जी की आरती | ऋषि विद्या',
  description: 'Read the full Vishnu Aarti (Om Jai Jagdish Hare) for peace and preservation.',
};

export default function VishnuAartiPage() {
  return <ContentPage title="श्री विष्णु जी की आरती" content={vishnuAarti.text} />;
}
