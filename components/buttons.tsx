import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
};

export function PrimaryButton({ href, children, className = "", icon = true }: LinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 bg-belmav-red text-belmav-white px-6 py-3.5 font-semibold text-sm tracking-wide transition-colors duration-300 hover:bg-belmav-black ${className}`}
    >
      {children}
      {icon && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}

export function SecondaryButton({ href, children, className = "", icon = false }: LinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 border border-belmav-black text-belmav-black px-6 py-3.5 font-semibold text-sm tracking-wide transition-colors duration-300 hover:bg-belmav-black hover:text-belmav-white ${className}`}
    >
      {children}
      {icon && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}

export function GhostLightButton({ href, children, className = "", icon = false }: LinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 border border-belmav-white/40 text-belmav-white px-6 py-3.5 font-semibold text-sm tracking-wide transition-colors duration-300 hover:bg-belmav-white hover:text-belmav-black ${className}`}
    >
      {children}
      {icon && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}

export function PrimaryButtonEl(
  props: ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }
) {
  const { className = "", children, ...rest } = props;
  return (
    <button
      {...rest}
      className={`group inline-flex items-center justify-center gap-2 bg-belmav-red text-belmav-white px-6 py-3.5 font-semibold text-sm tracking-wide transition-colors duration-300 hover:bg-belmav-black disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}
