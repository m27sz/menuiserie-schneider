import { useCallback, useEffect } from 'react';
import type { Photo } from '../data/site';

interface LightboxProps {
  photos: Photo[];
  index: number | null;
  onChange: (index: number | null) => void;
}

export function Lightbox({ photos, index, onChange }: LightboxProps) {
  const close = useCallback(() => onChange(null), [onChange]);
  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + photos.length) % photos.length);
    },
    [index, onChange, photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, close, step]);

  if (index === null) return null;
  const photo = photos[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={photo.alt} onClick={close}>
      <button className="lightbox__close" onClick={close} aria-label="Fermer">×</button>
      {photos.length > 1 && (
        <>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Photo précédente"
          >‹</button>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Photo suivante"
          >›</button>
        </>
      )}
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} />
        <figcaption>
          {photo.alt} <span>{index + 1} / {photos.length}</span>
        </figcaption>
      </figure>
    </div>
  );
}
