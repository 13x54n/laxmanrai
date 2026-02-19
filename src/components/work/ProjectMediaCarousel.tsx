"use client";

import { Carousel } from "@once-ui-system/core";

interface ProjectMediaCarouselProps {
  sources: string[];
  alt?: string;
  aspectRatio?: string;
  sizes?: string;
  priority?: boolean;
}

function isVideo(src: string) {
  return src.toLowerCase().endsWith(".mp4");
}

export function ProjectMediaCarousel({
  sources,
  alt = "",
  aspectRatio = "16 / 9",
  sizes = "(max-width: 960px) 100vw, 960px",
  priority = false,
}: ProjectMediaCarouselProps) {
  const items = sources.map((src) => {
    if (isVideo(src)) {
      return {
        slide: (
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 56,
              right: 56,
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            <video
              src={src}
              controls
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "auto",
              }}
            />
          </div>
        ) as React.ReactNode,
        alt,
      };
    }
    return { slide: src, alt };
  });

  if (items.length === 0) return null;

  return (
    <Carousel
      items={items}
      aspectRatio={aspectRatio}
      sizes={sizes}
      priority={priority}
      controls
      indicator="line"
      radius="m"
    />
  );
}
