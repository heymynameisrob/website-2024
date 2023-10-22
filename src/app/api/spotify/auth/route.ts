import { NextResponse } from 'next/server';
import querystring from 'querystring';

const client_id = "d0d01848e0c54fcd919cb8cac29d2148";
const client_secret = "de17a5a4cd404b438d96e0830ea03a37";
const refresh_token = "AQB2XiDJvnmxA8lrHLKPW8K7gGX5VpEdXmrmg2TQO8lhbhGQh4NV5PP_m2sm5PTYeYW1SWjDY32Gv2Smff4J7AICvHeUmLEy1qv4bRuZW5oXkhtQqQRzL00RvtofvFtWJRFNxx4-gnvrTHjZBaqE1b0DCKmw9liv6gtBxsVC9pSCKvoT9-Cvr3e7kzas1_azPugpBp5F";
const token_endpoint = `https://accounts.spotify.com/api/token`;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

export async function GET(){

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

  return NextResponse.json(response, { status: 200 })

}