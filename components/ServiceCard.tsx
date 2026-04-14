import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  titlePrimary: string;
  titleSecondary?: string;
  description: string;
}

export default function ServiceCard({
  icon,
  titlePrimary,
  titleSecondary,
  description,
}: ServiceCardProps) {
  return (
    <div className="
      bg-dark-card border border-dark-border rounded-xl p-8
      hover:border-gold/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5
      transition-all duration-300 cursor-default group
    ">
      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6 text-gold group-hover:bg-gold/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-1">{titlePrimary}</h3>
      {titleSecondary && (
        <p className="text-xs text-gold/70 font-medium tracking-widest uppercase mb-4">
          {titleSecondary}
        </p>
      )}
      <p className="text-white/55 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
