"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export function CardMotionProvider() {
  const pathname = usePathname();

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Interactive card radial lighting enhancement
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
      cleanupFns.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
