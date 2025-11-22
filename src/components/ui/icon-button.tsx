import type { Icon } from '@phosphor-icons/react';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps extends ComponentProps<'button'> {
  icon: Icon;
}

export function IconButton({
  icon: Icon,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'flex h-4 w-4 cursor-pointer items-center justify-center text-yellow transition-colors duration-150 hover:text-yellow-dark',
        className,
      )}
      {...props}
    >
      <Icon />
    </button>
  );
}
