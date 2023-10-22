'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Avatar from '@/components/avatar';
import { Button } from '@/components/ui/button';





export function Navbar(): React.ReactElement {
  return (
    <div className="flex items-center justify-between p-4">
    <Avatar />
    <Button>Get in touch</Button>
  </div>
  )
}