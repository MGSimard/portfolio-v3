import { useState, useEffect, useRef } from "react";
import { IconArrowLeft, IconArrowRight, IconClose } from "./Icons";

interface LightboxProps {
  closeLightbox: () => void;
  imgSrcs: string[];
  startIndex: number;
}

export function Lightbox({ closeLightbox, imgSrcs, startIndex }: LightboxProps) {
  const [currentImg, setCurrentImg] = useState<number>(startIndex);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (startIndex < 0 || startIndex >= imgSrcs.length) {
      console.error("ERROR: Invalid startIndex");
      setCurrentImg(0); // Fallback
    }
  }, [startIndex, imgSrcs.length]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleArrows = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") previous();
      if (e.key === "ArrowRight") next();
      // Escape key already handled by Dialog API.
    };
    document.addEventListener("keydown", handleArrows);
    // Can't use open attribute on render otherwise it breaks focus trapping.
    dialog.showModal();
    return () => {
      document.removeEventListener("keydown", handleArrows);
    };
  }, [currentImg]);

  const previous = () => {
    /** Decided not to wrap-around first -> last, last -> first etc.
     *  Even I would go "Did I already see this one?" when cycling through my old lightbox. */
    if (currentImg !== 0) {
      setCurrentImg((prev) => prev - 1);
    }
  };
  const next = () => {
    if (currentImg < imgSrcs.length - 1) {
      setCurrentImg((prev) => prev + 1);
    }
  };

  return (
    <dialog ref={dialogRef} onClose={closeLightbox} className="lightbox noselect">
      <img src={imgSrcs[currentImg]} alt="IMG" />
      {imgSrcs.length > 1 && (
        <div className="lightbox-arrows">
          <button type="button" onClick={previous} disabled={currentImg === 0}>
            <IconArrowLeft />
          </button>
          <button type="button" onClick={next} disabled={currentImg >= imgSrcs.length - 1} aria-label="Next Image">
            <IconArrowRight />
          </button>
        </div>
      )}
      <button type="button" onClick={closeLightbox} className="lightbox-close" aria-label="Close Lightbox">
        <IconClose />
      </button>
    </dialog>
  );
}
