import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const audiences = [
  {
    title: 'Wellness Retreats',
    description: 'A serene environment for meditation, yoga, and healing workshops.',
    image: { src: '/images/AdobeStock_802844941_Preview.jpeg', alt: 'Group meditating in a tranquil setting', hint: 'meditation retreat' },
  },
  {
    title: 'Creative Escapes',
    description: 'Find inspiration in nature for your writing or artistic endeavors.',
    image: { src: '/images/AdobeStock_1655189212_Preview.jpeg', alt: 'Person writing in a notebook outdoors', hint: 'writing nature' },
  },
  {
    title: 'Intimate Ceremonies',
    description: 'A breathtaking backdrop for small weddings and special celebrations.',
    image: { src: '/images/AdobeStock_918310449_Preview.jpeg', alt: 'An intimate wedding ceremony setup', hint: 'wedding ceremony' },
  },
  {
    title: 'Family & Friends',
    description: 'Reconnect with loved ones and create lasting memories together.',
    image: { src: '/images/AdobeStock_1087700008_Preview.jpeg', alt: 'Family enjoying a peaceful vacation', hint: 'family vacation' },
  },
];

export default function IdealFor() {
  return (
    <section id="ideal-for" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Who is Mudita For?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We welcome groups and individuals seeking a unique space for connection and renewal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience) => (
            <Card key={audience.title} className="overflow-hidden group border-none shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-80">
                <Image
                  src={audience.image.src}
                  alt={audience.image.alt}
                  fill
                  className="object-cover"
                  data-ai-hint={audience.image.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="font-headline text-xl font-bold text-white">{audience.title}</h3>
                </div>
              </div>
              <CardContent className="p-4 bg-card">
                <p className="text-muted-foreground text-sm">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-foreground">Ready to create your experience?</p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/inquire">Plan Your Retreat</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
