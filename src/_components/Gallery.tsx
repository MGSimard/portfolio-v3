import { useState } from "react";
import { Lightbox } from "./Lightbox";

export function Gallery({ imgSrcs }: { imgSrcs: string[] }) {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [startIndex, setStartIndex] = useState<number>(0);

  const openLightbox = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const targetIndex = target.getAttribute("data-order");
    setStartIndex(Number(targetIndex));
    setLightboxOpen(true);
  };

  const thumbify = (src: string) => {
    return src.replace(".webp", "_thumb.webp");
  };

  return (
    <>
      <div className="grid-6x gallery">
        {imgSrcs.map((imgSrc, i) => (
          <img key={`${imgSrc}-${i}`} src={thumbify(imgSrc)} alt="IMG" onClick={openLightbox} data-order={i} />
        ))}
      </div>
      {lightboxOpen && (
        <Lightbox closeLightbox={() => setLightboxOpen(false)} imgSrcs={imgSrcs} startIndex={startIndex} />
      )}
    </>
  );
}
