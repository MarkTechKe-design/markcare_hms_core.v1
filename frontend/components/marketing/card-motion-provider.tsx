"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export function CardMotionProvider() {
  const pathname = usePathname();

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = document.querySelectorAll<HTMLElement>(".mc-card-interactive, .mc-reveal");

    // Immediate reveal if user prefers reduced motion or observer not supported
    if (isReduced || !("IntersectionObserver" in window)) {
      cards.forEach((el: HTMLElement) => el.classList.add("is-revealed"));
      return;
    }

    // High-resilience observer with positive margin to preload reveals before viewport edge
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
      { threshold: 0.01, rootMargin: "0px 0px 100px 0px" }
    );

    cards.forEach((card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      // If element is already in viewport or near top, reveal immediately
      if (rect.top <= window.innerHeight + 80) {
        card.classList.add("is-revealed");
      } else {
        observer.observe(card);
      }
    });

    // Guaranteed fallback: After 600ms, reveal ALL remaining cards so NO section remains empty
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".mc-reveal:not(.is-revealed)").forEach((el) => {
        el.classList.add("is-revealed");
      });
    }, 600);

    // Hardware-accelerated pointer tracking
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
      clearTimeout(fallbackTimer);
      observer.disconnect();
      cleanupFns.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
