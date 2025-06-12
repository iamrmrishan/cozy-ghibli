/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BorderBeam } from '@/components/magicui/border-beam';
import { Badge } from '@/components/ui/badge';

// Sample images array for FeedPage
export const sampleImages = [
  { image: '/one.jpg', alt: 'Forest with morning mist', model: 'Model A' },
  { image: '/two.jpg', alt: 'Mountain peak at sunrise', model: 'Model B' },
  { image: '/three.jpg', alt: 'Desert dunes and sky', model: 'Model C' },
  { image: '/four.jpg', alt: 'Calm ocean waves', model: 'Model A' },
  { image: '/five.jpg', alt: 'City skyline at night', model: 'Model B' },
  { image: '/six.jpg', alt: 'Snowy forest path', model: 'Model C' },
  { image: '/seven.jpg', alt: 'Lush green valley', model: 'Model A' },
  { image: '/eight.jpg', alt: 'Starry night sky', model: 'Model B' },
];

/**
 * FeedPage component
 * Displays a responsive grid of images using the animated card snippet
 *  - 4 images per row on desktop, 2 per row on mobile
 *  - Uses framer-motion for initial mount animation
 *  - Each card shows a decorative border beam, striped overlay, and model badge
 *
 * @param {{ image: string; alt: string; model: string }[]} props.images  Array of image objects
 */
export default function FeedPage({ images = sampleImages }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 pt-25">
      {images.map((item, index) => (
        <div
          key={index}
          className="bg-background relative flex overflow-hidden rounded-3xl border p-2"
        >
          {/* model badge */}
          <Badge variant="default" className="absolute top-3 left-4 z-10">
            {item.model}
          </Badge>

          {/* diagonal stripe overlay */}
          <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]" />

          {/* animated image container */}
          <div className="aspect-76/59 bg-background relative w-full rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="h-full w-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
              >
                {/* Use native img tag to avoid Next.js domain config issues */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* animated border beam */}
          <BorderBeam
            duration={6}
            size={200}
            className="from-transparent via-yellow-700 to-transparent dark:via-white/50 absolute inset-0"
          />
        </div>
      ))}
    </div>
  );
}



