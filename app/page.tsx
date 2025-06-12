import Features from "@/components/features-12";
import ImageGenerator from "@/components/generator";
import HeroSection from "@/components/hero-section";
import ImagePlaceholder from "@/components/placeholder";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <HeroSection />
        <section className="bg-background pb-2">
          <Features />
        </section>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Generator Panel - Full width on mobile, 1/3 width on desktop */}
            <div id="generator" className="lg:col-span-1 order-1 lg:order-1">
              <ImageGenerator />
            </div>

            {/* Image Display Panel - Full width on mobile, 2/3 width on desktop */}
            <div className="lg:col-span-2 order-2 lg:order-2">
              <ImagePlaceholder />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
