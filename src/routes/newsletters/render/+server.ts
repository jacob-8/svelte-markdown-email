import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { ResponseCodes } from '$lib/response-codes';
import { render_component_to_html } from '$lib/render-component-to-html';
import Newsletter from './Newsletter.svelte'

export interface RenderEmailRequestBody {
    markdown: string;
    number: number;
}

export interface RenderEmailResponseBody {
    html: string;
}

export const POST: RequestHandler = async ({request}) => {
  const { markdown, number } = await request.json() as RenderEmailRequestBody

  if (!markdown) {
    error(ResponseCodes.BAD_REQUEST, 'Missing markdown')
  }
  
  const html = render_component_to_html({ component: Newsletter, props: { markdown, number } })

  return json({ html } satisfies RenderEmailResponseBody)
};