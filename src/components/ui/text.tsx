import { createElement, type JSX, type ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

interface TextProps extends VariantProps<typeof textVariants> {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const textVariants = tv({
  base: 'font-sans text-gray-200',
  variants: {
    variant: {
      'title-lg': 'text-2xl leading-8 font-bold',
      'title-md': 'text-base leading-6 font-bold',
      'title-sm': 'text-sm leading-5 font-bold',
      'text-md': 'text-base leading-6 font-normal',
      'text-sm': 'text-sm leading-5 font-normal',
    },
  },
  defaultVariants: {
    variant: 'text-md',
  },
});

export function Text({ children, as = 'span', variant, className }: TextProps) {
  return createElement(
    as,
    { className: textVariants({ variant, className }) },
    children,
  );
}
