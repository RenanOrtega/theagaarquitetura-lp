import { type ReactNode } from "react";

interface SocialIconProps {
  href: string;
  children: ReactNode;
  variant?: "footer" | "button";
  className?: string;
  ariaLabel?: string;
}

export default function SocialIcon({
  href,
  children,
  variant = "footer",
  className = "",
  ariaLabel,
}: SocialIconProps) {
  const baseClasses = "transition-all duration-300";

  const variantClasses = {
    footer: "w-10 h-10 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center hover:bg-opacity-30",
    button: "w-70 h-15 bg-[var(--color-primary-medium)] border border-[var(--color-border-light)] flex items-center justify-center shadow-sm hover:shadow-md rounded-2xl gap-8 group hover:scale-105 hover:-translate-y-1",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}