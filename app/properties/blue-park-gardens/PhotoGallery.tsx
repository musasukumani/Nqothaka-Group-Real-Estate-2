"use client";

import { ArrowLeft, ArrowRight, Images, X } from "lucide-react";
import { useEffect, useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  title?: string;
}

export default function PhotoGallery({
  images,
  title = "Blue Park Gardens",
}: PhotoGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index - 1 + images.length) % images.length);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, isOpen]);

  function openGallery(index = 0) {
    setActiveIndex(index);
    setIsOpen(true);
  }

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % images.length);
  }

  const activeImage = images[activeIndex];

  return (
    <>
      <section className="rounded-xl bg-white p-4 shadow-[0_22px_60px_rgb(0_0_0_/_0.07)] sm:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Photo Gallery
            </p>
            <h2 className="text-[30px] font-medium tracking-[-0.035em]">
              Explore {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => openGallery(0)}
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
          >
            <Images size={16} />
            View All
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              type="button"
              key={image.src}
              onClick={() => openGallery(index)}
              className="group overflow-hidden rounded-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </section>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} photo gallery`}
          className="fixed inset-0 z-50 flex flex-col bg-black/95 text-white"
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                Photo Gallery
              </p>
              <p className="mt-1 text-sm font-medium">
                {activeIndex + 1} of {images.length}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Close photo gallery"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-5 sm:px-8">
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Show previous photo"
            >
              <ArrowLeft size={20} />
            </button>

            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-full max-w-full rounded-xl object-contain shadow-[0_30px_90px_rgb(0_0_0_/_0.45)]"
            />

            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Show next photo"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="border-t border-white/10 px-4 py-4 sm:px-6">
            <div className="mx-auto flex max-w-[980px] gap-3 overflow-x-auto pb-1">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  onClick={() => setActiveIndex(index)}
                  className={`h-20 w-28 shrink-0 overflow-hidden rounded-lg border transition ${
                    index === activeIndex
                      ? "border-white"
                      : "border-white/15 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Show photo ${index + 1}`}
                >
                  <img src={image.src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
