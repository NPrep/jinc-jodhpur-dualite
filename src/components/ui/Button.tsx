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
    primary: 'bg-brand-pink text-white hover:bg-brand-dark shadow-sm',
    outline: 'border-2 border-brand-pink text-brand-pink hover:bg-brand-light',
    ghost: 'text-brand-secondary hover:bg-brand-light hover:text-brand-pink',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg font-semibold',
  };

  return (
    <button 
      className={cn(
        'rounded-md transition-all duration-200 font-medium flex items-center justify-center gap-2',
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
