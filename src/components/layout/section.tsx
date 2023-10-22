import { cn } from '@/lib/utils';
import React from 'react';

export function Section({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("py-10 md:py-12 lg:py-24 xl:py-28", className)}>      
      {props.children}
    </section>
  )  
}