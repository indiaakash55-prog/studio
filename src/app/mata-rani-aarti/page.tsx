import { ContentPage } from "@/components/content-page";
import { mataRaniAarti } from "@/lib/content";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'माता रानी की आरती | ऋषि विद्या',
  description: 'Read the full Mata Rani Aarti for invoking divine feminine power.',
};

export default function MataRaniAartiPage() {
  return (
    <ContentPage title={mataRaniAarti.title} content={mataRaniAarti.text} />
  );
}
