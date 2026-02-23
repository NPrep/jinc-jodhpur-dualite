import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(5,150,105,0.3)]',
    outline: 'border-[1.5px] border-[var(--primary)] text-[var(--primary)] bg-transparent hover:bg-[var(--primary-light)]',
    ghost: 'text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]',
  };

  const sizes = {
    sm: 'min-h-[44px] px-4 py-2 text-sm',
    md: 'min-h-[44px] px-6 py-3 text-[15px]',
    lg: 'min-h-[44px] px-6 py-3 text-[15px] font-semibold',
  };

  return (
    <button
      className={cn(
        'rounded-[8px] transition-all duration-200 font-semibold flex items-center justify-center gap-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
