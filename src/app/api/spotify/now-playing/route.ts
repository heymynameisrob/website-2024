import { NextResponse } from 'next/server';
import querystring from 'querystring';

const client_id = "d0d01848e0c54fcd919cb8cac29d2148";
const client_secret = "de17a5a4cd404b438d96e0830ea03a37";
const refresh_token = "AQBX-_2h7hmumwoJcCqOs8MPDMGeefhkR_-Z56LvxtpZTU7dMipuOxmDuYxvZby-qFTDZQ2FURECkKBpmjFPzGlK2G4MfHt8rQeOHAOqP5h5S_Gj1eKcXwMii25Rs1C9h-s";
const token_endpoint = `https://accounts.spotify.com/api/token`;
const now_playing_endpoint = `https://api.spotify.com/v1/me/player/currently-playing`;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

export const revalidate = false
export const dynamic = "force-dynamic";

const fetchToken = async () => {
  const response = await fetch(token_endpoint, {
    method: 'POST',
    headers: {       
      Authorization: `Basic ${basic}`,     
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,  
      client_id,
      client_secret            
    })
  });

  return response.json();
}

export async function GET(){

  const { access_token } = await fetchToken();
  
  const response = await fetch(now_playing_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },        
  });
  
  if (response.status === 204) {
    return NextResponse.json('Not Playing', { status: 200 })
  }

  if(response.status === 401){
    return NextResponse.json('Unauthorized', { status: 401 })
  }  

  const song = await response.json();

  const albumImage = song.item.album.images[0].url;
  const artist = song.item.artists.map((artist: { name: string }) => artist.name).join(', ');
  const isPlaying = song.is_playing;
  const songUrl = song.item.external_urls.spotify;
  const title = song.item.name;
  
  const data = {    
    albumImage,
    artist,
    isPlaying,
    songUrl,
    title
  }

  return NextResponse.json(data, { status: 200 })

}