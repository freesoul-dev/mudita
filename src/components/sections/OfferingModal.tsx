"use client";

import React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { LucideProps } from "lucide-react";

export interface Offering {
  id: string;
  icon: (props: LucideProps) => JSX.Element;
  title: string;
  description: string;
  images: { src: string; alt: string; hint: string }[];
  details: string;
}

interface OfferingModalProps {
  offering: Offering | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function OfferingModal({ offering, isOpen, onClose }: OfferingModalProps) {
  if (!offering) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <Carousel className="w-full h-full">
              <CarouselContent>
                {offering.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-80 md:h-full min-h-[400px]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        data-ai-hint={image.hint}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none" />
            </Carousel>
          </div>
          <div className="p-6 md:p-8 flex flex-col">
            <DialogHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                   <offering.icon className="h-6 w-6 text-primary" />
                </div>
                <DialogTitle className="font-headline text-3xl text-foreground">{offering.title}</DialogTitle>
              </div>
              <DialogDescription className="text-muted-foreground text-base text-left">
                {offering.details}
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
