"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export function CardMotionProvider() {
  const pathname = usePathname();

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = document.querySelectorAll<HTMLElement>(".mc-card-interactive, .mc-reveal");

    if (isReduced || !("IntersectionObserver" in window)) {
      cards.forEach((el: HTMLElement) => el.classList.add("is-revealed"));
      return;
    }

    // A. Viewport Scroll Entrance
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (!target.style.getPropertyValue("--stagger-idx")) {
              const parent = target.parentElement;
              if (parent) {
                const siblings = Array.from(parent.children);
                const idx = siblings.indexOf(target);
                target.style.setProperty("--stagger-idx", String(Math.max(0, idx % 4)));
              }
            }
            target.classList.add("is-revealed");
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    cards.forEach((card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        card.classList.add("is-revealed");
      } else {
        observer.observe(card);
      }
    });

    // B. Cursor Proximity Radial Lighting
    const interactiveCards = document.querySelectorAll<HTMLElement>(".mc-card-interactive");
    const cleanupFns: Array<() => void> = [];

    interactiveCards.forEach((card: HTMLElement) => {
      let rafId: number | null = null;
      const onPointerMove = (e: PointerEvent): void => {
        if (rafId !== null) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", x + "px");
          card.style.setProperty("--mouse-y", y + "px");
        });
      };

      card.addEventListener("pointermove", onPointerMove as EventListener, { passive: true });
      cleanupFns.push(() => {
        card.removeEventListener("pointermove", onPointerMove as EventListener);
        if (rafId !== null) cancelAnimationFrame(rafId);
      });
    });

    return () => {
      observer.disconnect();
      cleanupFns.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
