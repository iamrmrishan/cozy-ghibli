import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <section>
        <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
          <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                Create Ghibli Magic with AI
              </h1>
              <p className="mt-8 max-w-2xl text-balance text-lg">
                Bring the charm of Studio Ghibli to life with AI-generated
                images and animations — reimagine your world in hand-painted
                fantasy.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full pl-5 pr-3 text-base"
                >
                  <a href="#generator">
                    <span className="text-nowrap">Generate</span>
                    <ChevronRight className="ml-1" />
                  </a>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
                >
                  <Link href="#link">
                    <span className="text-nowrap">Docs</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
            <Image
              src="/background.png"
              alt="Background animation"
              fill
              style={{ objectFit: "cover" }}
              className="opacity-50 dark:opacity-35 dark:lg:opacity-75"
              unoptimized
            />
          </div>
        </div>
      </section>
    </>
  );
}
