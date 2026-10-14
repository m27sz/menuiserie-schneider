import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <div className="page-hero__lead">{children}</div>}
      </div>
    </section>
  );
}
