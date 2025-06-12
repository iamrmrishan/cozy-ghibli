import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Features from "./features-12";

export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
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
                    <Link href="#link">
                      <span className="text-nowrap">Generate</span>
                      <ChevronRight className="ml-1" />
                    </Link>
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

            {/* GIF background replaces video */}
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

        <section className="bg-background pb-2">
          <Features />

          {/* <ImageGeneratorForm/> */}

          {/* <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Powering the best teams</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  {[
                    { src: 'nvidia.svg', alt: 'Nvidia Logo', h: 5 },
                    { src: 'column.svg', alt: 'Column Logo', h: 4 },
                    { src: 'github.svg', alt: 'GitHub Logo', h: 4 },
                    { src: 'nike.svg', alt: 'Nike Logo', h: 5 },
                    { src: 'lemonsqueezy.svg', alt: 'Lemon Squeezy Logo', h: 5 },
                    { src: 'laravel.svg', alt: 'Laravel Logo', h: 4 },
                    { src: 'lilly.svg', alt: 'Lilly Logo', h: 7 },
                    { src: 'openai.svg', alt: 'OpenAI Logo', h: 6 },
                  ].map(({ src, alt, h }, idx) => (
                    <div className="flex" key={idx}>
                      <img
                        className={`mx-auto h-${h} w-fit`}
                        src={`https://html.tailus.io/blocks/customers/${src}`}
                        alt={alt}
                        height={h * 4}
                        width="auto"
                      />
                    </div>
                  ))}
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20" />
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20" />
                <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
                <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
              </div>
            </div>
          </div> */}
        </section>
      </main>
    </>
  );
}
