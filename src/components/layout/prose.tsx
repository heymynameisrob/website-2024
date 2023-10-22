import { cn } from '@/lib/utils';
import React from 'react';

export function Prose({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main className={cn("prose prose-slate space-y-6 prose-p:text-opacity-75 prose-h1:font-syne prose-h1:font-medium lg:space-y-10 lg:prose-lg xl:space-y-12 dark:prose-invert", className)}>      
      {props.children}
    </main>
  )  
}