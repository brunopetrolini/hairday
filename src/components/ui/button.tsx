import type { ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = tv({
  base: 'cursor-pointer rounded-lg border transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-25',
  variants: {
    variant: {
      primary:
        'h-14 text-gray-900 bg-yellow border-yellow font-bold text-sm leading-5 hover:border-yellow-light',
      secondary:
        'border-gray-500 bg-gray-600 px-5 py-2 text-gray-200 leading-6 hover:bg-gray-500 disabled:hover:bg-gray-600',
    },
    selected: {
      true: '',
    },
  },
  compoundVariants: [
    {
      variant: 'secondary',
      selected: true,
      class: 'border-yellow text-yellow',
    },
  ],
  defaultVariants: {
    variant: 'primary',
  },
});

export function Button({
  children,
  className,
  variant,
  selected,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, selected, className })}
      {...props}
    >
      {children}
    </button>
  );
}
