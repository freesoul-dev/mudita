"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BedDouble, Tent, UtensilsCrossed, Wifi, Car, Mountain, HeartHandshake, Sparkles, ChefHat, Bed, ShowerHead, Coffee, Wind, type LucideProps } from "lucide-react";
import OfferingModal from "./OfferingModal";
import type { Offering } from "./OfferingModal";

const offerings: Offering[] = [
  {
    id: 'accommodations',
    icon: (props: LucideProps) => <BedDouble {...props} />,
    title: "Accommodations",
    description: "Relax in our well-appointed rooms, complete with all modern amenities for a comfortable and restful stay.",
    images: [
        { src: "https://placehold.co/1200x800.png", alt: "A beautifully decorated room at Mudita", hint: "luxury room" },
        { src: "https://placehold.co/1200x800.png", alt: "A second view of the comfortable room", hint: "bedroom interior" },
    ],
    details: "Our accommodations are designed to be your sanctuary. Each room features a plush queen-sized bed, en-suite bathroom, and a private balcony with stunning views. We provide organic cotton linens, locally-made toiletries, and a quiet space for you to unwind and reconnect with yourself."
  },
  {
    id: 'restoratives',
    icon: (props: LucideProps) => <HeartHandshake {...props} />,
    title: "Restoratives",
    description: "Engage in restorative practices like yoga, meditation, and sound baths to heal your mind, body, and spirit.",
    images: [
        { src: "https://placehold.co/1200x800.png", alt: "Person meditating peacefully at sunrise", hint: "meditation yoga" },
        { src: "https://placehold.co/1200x800.png", alt: "A serene yoga session in progress", hint: "yoga retreat" },
    ],
    details: "We offer a variety of restorative practices led by experienced practitioners. Daily yoga and meditation sessions are available for all levels. Immerse yourself in the healing vibrations of a sound bath or join a guided breathwork session to release tension and find inner peace."
  },
  {
    id: 'ital-cuisine',
    icon: (props: LucideProps) => <UtensilsCrossed {...props} />,
    title: "Ital Cuisine",
    description: "Savor delicious and nourishing plant-based meals, featuring farm-to-table ingredients from our gardens.",
    images: [
        { src: "https://placehold.co/1200x800.png", alt: "A vibrant plate of plant-based food", hint: "plant-based food" },
        { src: "https://placehold.co/1200x800.png", alt: "Fresh vegetables from the garden", hint: "organic vegetables" },
    ],
    details: "Our culinary philosophy is centered around the Ital tradition—fresh, natural, and plant-based. We source most of our ingredients from our own organic gardens and local farmers. Every meal is a celebration of flavor and vitality, lovingly prepared by our in-house chef to nourish your body and delight your senses."
  },
  {
    id: 'offsite-experiences',
    icon: (props: LucideProps) => <Mountain {...props} />,
    title: "Offsite Experiences + Eco-Tourism",
    description: "Explore the natural beauty of Portland with guided hiking, river rafting, and visits to pristine local beaches.",
    images: [
        { src: "https://placehold.co/1200x800.png", alt: "A person hiking on a trail with a beautiful view", hint: "hiking trail" },
        { src: "https://placehold.co/1200x800.png", alt: "Rafting down the Rio Grande", hint: "river rafting" },
    ],
    details: "Discover the wonders of Portland, one of Jamaica's most unspoiled parishes. We can arrange guided eco-tours, including bamboo rafting on the Rio Grande, hiking to hidden waterfalls in the Blue Mountains, or simply relaxing on the world-famous Frenchman's Cove beach. Connect with the vibrant spirit of Jamaica."
  },
  {
    id: 'cultural-experiences',
    icon: (props: LucideProps) => <Sparkles {...props} />,
    title: "Cultural Experiences + Ceremonies",
    description: "Participate in authentic local ceremonies and cultural workshops to connect with the heart of Jamaica.",
    images: [
        { src: "https://placehold.co/1200x800.png", alt: "Local Jamaicans playing music", hint: "jamaican culture" },
        { src: "https://placehold.co/1200x800.png", alt: "A traditional Jamaican ceremony", hint: "cultural ceremony" },
    ],
    details: "Immerse yourself in the rich culture of Jamaica. We offer opportunities to participate in traditional ceremonies, learn from local artisans, and enjoy the sounds of authentic drumming and music. These experiences provide a deep connection to the history and spirit of the island."
  },
  {
    id: 'onsite-experiences',
    icon: (props: LucideProps) => <Tent {...props} />,
    title: "Onsite Experiences + Glamping",
    description: "Enjoy our unique glamping setups, nature walks, and stargazing for a memorable eco-tourism adventure.",
    images: [
        { src: "https://placehold.co/1200x800.png", alt: "A cozy glamping tent under the stars", hint: "glamping tent" },
        { src: "https://placehold.co/1200x800.png", alt: "A trail winding through the Mudita property", hint: "nature trail" },
    ],
    details: "You don't have to leave Mudita to have an adventure. Our unique glamping setups offer a chance to sleep comfortably under the stars. Explore our property's walking trails, find a quiet spot to read in a hammock, or join us for a nighttime stargazing session, far from the city lights."
  },
];

const amenities = [
  { icon: Wifi, label: "WiFi" },
  { icon: Car, label: "Transport Facilitation" },
  { icon: ChefHat, label: "Chef" },
  { icon: Bed, label: "Bed Linens" },
  { icon: ShowerHead, label: "Toiletries" },
  { icon: Coffee, label: "Coffee Kit" },
  { icon: Wind, label: "Room Purification" },
];

export default function Offerings() {
  const [selectedOffering, setSelectedOffering] = useState<Offering | null>(null);

  return (
    <>
      <section id="offerings" className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
              Our Offerings
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We provide everything you need for a seamless and rejuvenating experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering) => (
              <Card 
                key={offering.id} 
                className="overflow-hidden group cursor-pointer flex flex-col"
                onClick={() => setSelectedOffering(offering)}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={offering.images[0].src}
                    alt={offering.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={offering.images[0].hint}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <offering.icon className="h-8 w-8 text-accent" />
                      <CardTitle className="font-headline text-2xl">{offering.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{offering.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground">Amenities & Support</h3>
              <p className="mt-2 text-muted-foreground">Your stay includes full support from our dedicated staff.</p>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 text-foreground max-w-4xl mx-auto">
                  {amenities.map(amenity => (
                      <div key={amenity.label} className="flex flex-col items-center gap-2 text-center">
                          <div className="bg-primary/20 p-3 rounded-full">
                            <amenity.icon className="h-6 w-6 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{amenity.label}</span>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </section>

      <OfferingModal 
        offering={selectedOffering}
        isOpen={!!selectedOffering}
        onClose={() => setSelectedOffering(null)}
      />
    </>
  );
}
