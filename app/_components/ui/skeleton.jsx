import { cn } from "@/app/_lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse  bg-primary-50/30", className)}
      {...props}
    />
  );
}

export { Skeleton };
