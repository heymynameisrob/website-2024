'use client'
import React from 'react';
import { Avatar as AvatarContainer, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import useSWR from 'swr';
import { fetcher } from '@/lib/api';
import { cn } from '@/lib/utils';

type TrackProps = {
  isPlaying: boolean;
  artist: string;
  title: string;
  songUrl: string;  
}

function AvatarElement({isPlaying}: {isPlaying: boolean}) {
  
  return(
    <AvatarContainer className={cn('w-12 h-12', isPlaying? "animate-spotify border-2 border-[#1db954]" : "")}>
      <AvatarImage       
      src="/avatar.jpg" alt="Rob Hough" />
      <AvatarFallback>RH</AvatarFallback>
    </AvatarContainer>
  )
}

function NowPlayingContent({ track }: {track: TrackProps  }) {

  const { artist, isPlaying, songUrl, title } = track

  return(
    <div className="space-y-2">
      <div className="grid items-center">
        <span className="relative flex items-center justify-between w-[16px] h-[16px]">
          <span className="w-[4px] h-full bg-[#1db954] animate-[nowPlayingAnimation_2.2s_ease_infinite_alternate] origin-bottom"></span>
          <span className="w-[4px] h-full bg-[#1db954] animate-[nowPlayingAnimation_2.2s_ease_infinite_-2.2s_alternate] origin-bottom"></span>
          <span className="w-[4px] h-full bg-[#1db954] animate-[nowPlayingAnimation_2.2s_ease_infinite_-3.7s_alternate] origin-bottom"></span>
        </span>
      </div>
      <p className="text-xs text-slate-900 dark:text-white dark:text-opacity-75">{title} – {artist}</p>
    </div>    
  )
}

export default function Avatar(){  
  const {data, isLoading, error} = useSWR('/api/spotify/now-playing', fetcher);

  if(isLoading) return <AvatarElement isPlaying={false} />

  if(!data.isPlaying) return <AvatarElement isPlaying={false} />

  if(error) {
    throw Error 
  }  

  return(
    <HoverCard>
      <HoverCardTrigger>
        <AvatarElement isPlaying={data?.isPlaying || false} />
      </HoverCardTrigger>
      <HoverCardContent>
        {data?.isPlaying ? <NowPlayingContent track={data} /> : <p>Not Playing</p>}
      </HoverCardContent>
    </HoverCard>
  )
}