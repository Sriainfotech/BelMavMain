import { ReactNode } from "react";

type Props = {
  kicker?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}: Props) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-3xl ${className}`}>
      {kicker && (
        <div className="flex items-center gap-2 mb-4" style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
          <span className="arc-red-square" />
          <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${dark ? "text-belmav-gold" : "text-belmav-red"}`}>
            {kicker}
          </span>
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-balance ${dark ? "text-belmav-white" : "text-belmav-black"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${dark ? "text-belmav-white/70" : "text-belmav-black/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
