
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Mudita logo" width={50} height={50} />
              <span className="font-headline text-2xl font-bold text-foreground">
                Mudita
              </span>
            </Link>
            <p className="text-sm">
              Your Sanctuary in Nature's Embrace.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#offerings" className="hover:text-primary transition-colors">Offerings</Link></li>
              <li><Link href="/inquire" className="hover:text-primary transition-colors">Inquire</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@muditaretreats.com" className="hover:text-primary transition-colors">info@mudita.rest</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (876) 555-1234</span>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="font-headline text-lg font-semibold mb-4">Location</h3>
             <p className="text-sm">St. Margarets Bay, Portland, Jamaica</p>
             <p className="text-xs text-muted-foreground mt-1">(Approximately 20 minutes from Port Antonio)</p>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mudita Rest & Wellness. All Rights Reserved.</p>
          <p className="mt-2">
            Designed and Developed by{' '}
            <a
              href="https://www.990.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              990
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
