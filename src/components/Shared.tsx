import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading,
  icon,
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-full";

  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white focus:ring-indigo-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5",
    secondary: "bg-slate-700 hover:bg-slate-600 text-white focus:ring-slate-500",
    outline: "border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 focus:ring-indigo-500",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5",
    gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${isLoading ? "opacity-80 cursor-wait" : ""}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {!isLoading && icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: "transparent" | "slate-900" | "glass" | "gradient";
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  children,
  bg = "transparent",
}) => {
  const backgrounds = {
    transparent: "bg-transparent",
    "slate-900": "bg-slate-900/50",
    glass: "glass-card border border-white/10",
    gradient: "bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent",
  };

  return (
    <section id={id} className={`${backgrounds[bg]} ${className}`}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
};
