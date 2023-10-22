import React from 'react';
import { cn } from '@/lib/utils';

export function VStack({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return(
    <div className={cn('flex flex-col', className)} {...props}>
      {props.children}
    </div>
  );
}

export function HStack({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return(
    <div className={cn('flex flex-row', className)} {...props}>
      {props.children}
    </div>
  );
}