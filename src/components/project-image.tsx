"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImageProps = {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ProjectImage({ src, alt, className, priority = false }: ProjectImageProps) {
  const [hasImage, setHasImage] = useState(Boolean(src));

  if (!src || !hasImage) return null;

  return <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 768px) 50vw, 100vw" className={className} onError={() => setHasImage(false)} />;
}
