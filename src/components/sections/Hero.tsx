"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/DSC03886.jpg"
        alt="View from the retreat"
        fill
        className="object-cover"
        priority
        data-ai-hint="retreat view"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg">
          Mudita
        </h1>
        <p className="mt-4 font-headline text-2xl md:text-4xl drop-shadow-md">
          Your Sanctuary in Nature's Embrace
        </p>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/90">
          A space for Rest, Retreat, Refuge, Healing and Wellness.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/inquire">Inquire About Your Retreat</Link>
        </Button>
      </div>
    </section>
  );
}
