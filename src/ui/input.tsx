import * as React from 'react';

import { Input, type InputProps } from '@heroui/react';

const StyledInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      size='lg'
      classNames={{
        label: '',
        input: ['bg-transparent', 'placeholder:text-white/50 text-white focus-visible:outline-none '],
        innerWrapper: 'bg-transparent',
        inputWrapper:
          'h-14 data-[hover=true]:bg-white/10 bg-white/10 hover:bg-white/10 focus-visible:outline-none focus-within:!bg-white/10 !cursor-text backdrop-blur-sm !border-0',
      }}
      radius='none'
      {...props}
    />
  );
});
StyledInput.displayName = 'StyledInput';

export { StyledInput };
