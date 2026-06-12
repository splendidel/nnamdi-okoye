'use client'

import { useState } from 'react'
import Image from 'next/image'

import Talk01 from '@/public/images/hon-nnamdi-okoye-campaign.jpeg'
import Talk02 from '@/public/images/hon-nnamdi-okoye-campaign-banner.jpeg'
import Talk03 from '@/public/images/hon-nnamdi-okoye-bill-poster.jpeg'
import Talk04 from '@/public/images/nnamdi-okoye-campaign-poster.jpeg'

export default function Talks() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [Talk01, Talk02, Talk03, Talk04]

  return (
    <section>
      <h2 className="font-aspekta text-xl font-[650] mb-5">
        Campaign Posters & Banners
      </h2>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image.src)}
            className="group cursor-pointer relative aspect-video rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src={image}
              alt={`Campaign ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
  <div
    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
    onClick={() => setSelectedImage(null)}
  >
    {/* Close Button */}
    <button
      type="button"
      onClick={() => setSelectedImage(null)}
      className="absolute top-4 right-4 z-60 text-white text-3xl leading-none hover:opacity-70"
      aria-label="Close image"
    >
      ×
    </button>

    {/* Image Container */}
    <div
      className="relative flex items-center justify-center w-full h-full"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={selectedImage}
        alt="Campaign"
        width={2000}
        height={2000}
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
        priority
      />
    </div>
  </div>
)}
    </section>
  )
}