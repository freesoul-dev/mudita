import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, MapPin, Wind } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Why Mudita?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Entering Mudita Rest & Wellness you immediately feel at home. It is impossible to resist the Land's invitation to Pause, to be with Nature, to Remember you are Nature….
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <span className="font-headline">Our Philosophy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                We believe in the healing power of nature. Mudita is a space designed to help you disconnect from the hustle and reconnect with your inner self, surrounded by Jamaica's natural beauty.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <span className="font-headline">The Physical Space</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                Sits on several acres of elevated green space with views of the Rio Grande and a breathtaking ocean vista. This 'bird's land' is filled with a constant breeze and the nightly sound of nature.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-primary/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <span className="font-headline">Prime Location</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                Located in the serene St. Margarets Bay, Portland, our retreat is a world away from the crowds, yet conveniently located just 20 minutes from the charming town of Port Antonio.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-16 text-center">
            <Image 
                src="/images/DSC04113.jpg" 
                alt="Panoramic view of Mudita's landscape" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-xl mx-auto"
                data-ai-hint="panoramic landscape"
            />
        </div>
      </div>
    </section>
  );
}
