import { OmIcon } from "@/components/icons/om-icon";
import { cn } from "@/lib/utils";

export function Loader({ className, size = "md" }: { className?: string, size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-20 w-20",
    lg: "h-28 w-28",
  };
  const iconSizeClasses = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-14 w-14",
  }

  return (
    <div className={cn("relative flex items-center justify-center", sizeClasses[size], className)}>
      <div className="absolute h-full w-full animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      <OmIcon className={cn("text-primary", iconSizeClasses[size])} />
    </div>
  );
}
