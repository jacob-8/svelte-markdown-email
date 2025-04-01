import { ResponseCodes } from '$lib/response-codes'

const default_headers: RequestInit['headers'] = {
  'content-type': 'application/json',
}

type Return<ExpectedResponse> = {
  data: ExpectedResponse
  error: null
} | {
  data: null
  error: { status: number, message: string }
}

interface RequestOptions {
  fetch?: typeof fetch
  query?: Record<string, string | boolean | number>
  headers?: RequestInit['headers']
  log?: boolean
  formData?: FormData
}

export async function post_request<T extends Record<string, any>, ExpectedResponse extends Record<string, any> = any>(route: string, data: T, options: RequestOptions = {}): Promise<Return<ExpectedResponse>> {
  const fetch_to_use = options.fetch || fetch

  if (options.query) {
    const url = new URL(route)
    Object.entries(options.query).forEach(([key, value]) => {
      url.searchParams.append(key, String(value))
    })
    route = url.toString()
  }

  if (options.formData) {
    const response = await fetch_to_use(route, {
      method: 'POST',
      body: options.formData,
    })
    return handleResponse<ExpectedResponse>(response, options.log)
  }

  const response = await fetch_to_use(route, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: options.headers || default_headers,
  })

  return handleResponse<ExpectedResponse>(response, options.log)
}

export async function get_request<ExpectedResponse extends Record<string, any>>(route: string, options?: RequestOptions): Promise<Return<ExpectedResponse>> {
  const fetch_to_use = options?.fetch || fetch

  if (options?.query) {
    const url = new URL(route)
    Object.entries(options.query).forEach(([key, value]) => {
      url.searchParams.append(key, String(value))
    })
    route = url.toString()
  }

  if (options?.headers) {
    const response = await fetch_to_use(route, { headers: options.headers })
    return handleResponse<ExpectedResponse>(response, options?.log)
  }
  const response = await fetch_to_use(route)
  return handleResponse<ExpectedResponse>(response, options?.log)
}

async function handleResponse<ExpectedResponse extends Record<string, any>>(response: Response, log = false): Promise<Return<ExpectedResponse>> {
  const { status } = response
  if (status !== ResponseCodes.OK) {
    const responseClone = response.clone()
    try {
      try {
        const body = await response.json()
        const error = { status, message: body.message || JSON.stringify(body) }
        return { data: null, error }
      } catch {
        const textBody = await responseClone.text()
        return { data: null, error: { status, message: textBody } }
      }
    } catch (err) {
      return { data: null, error: { status, message: err.message } }
    }
  }

  const body = await response.json() as ExpectedResponse
  if (log)
    console.info({ body })
  return { data: body, error: null }
}
