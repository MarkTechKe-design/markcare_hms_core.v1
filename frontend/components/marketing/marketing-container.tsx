import * as React from "react";
import { cn } from "@/lib/utils";

interface MarketingContainerProps extends React.ComponentProps<"div"> {
  size?: "default" | "tight" | "wide";
}

export function MarketingContainer({
  className,
  size = "default",
  ...props
}: MarketingContainerProps) {
  const maxWidthClass =
    size === "tight"
      ? "max-w-5xl"
      : size === "wide"
        ? "max-w-[88rem]"
        : "max-w-7xl";

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidthClass,
        className
      )}
      {...props}
    />
  );
}
