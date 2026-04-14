import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  titlePrimary: string;
  titleSecondary?: string;
  description: string;
  size?: 'normal' | 'large';
}

export default function ServiceCard({
  icon,
  titlePrimary,
  titleSecondary,
  description,
  size = 'normal',
}: ServiceCardProps) {
  return (
    <div
      className={`
        group relative bg-dark-card border border-dark-border rounded-2xl
        hover:border-gold/35 hover:-translate-y-1.5 hover:shadow-gold-md
        active:scale-[0.99] active:shadow-none
        transition-all duration-500 ease-spring cursor-default overflow-hidden
        ${size === 'large' ? 'p-10' : 'p-7'}
      `}
    >
      {/* Subtle inner glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gold/0 group-hover:bg-gold/[0.02] transition-colors duration-500 pointer-events-none" />

      {/* Icon */}
      <div
        className={`
          w-11 h-11 bg-gold/8 rounded-xl flex items-center justify-center mb-5
          text-gold group-hover:bg-gold/15 group-hover:scale-110
          transition-all duration-500 ease-spring
          ${size === 'large' ? 'w-14 h-14 rounded-2xl mb-7' : ''}
        `}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className={`font-bold text-white mb-1 leading-snug ${
          size === 'large' ? 'text-2xl' : 'text-lg'
        }`}
      >
        {titlePrimary}
      </h3>

      {/* Secondary label */}
      {titleSecondary && (
        <p className="text-[11px] text-gold/60 font-semibold tracking-[0.25em] uppercase mb-4">
          {titleSecondary}
        </p>
      )}

      {/* Description */}
      <p
        className={`text-white/50 leading-relaxed ${
          size === 'large' ? 'text-base mt-3' : 'text-sm mt-2'
        }`}
      >
        {description}
      </p>

      {/* Gold bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
