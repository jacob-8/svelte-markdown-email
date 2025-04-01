import type { RenderEmailRequestBody, RenderEmailResponseBody } from './+server'
import { post_request } from '$lib/post-request'

export async function api_render_email(body: RenderEmailRequestBody) {
  return await post_request<RenderEmailRequestBody, RenderEmailResponseBody>(`/newsletters/render`, body)
}
