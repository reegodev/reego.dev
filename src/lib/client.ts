import { createClient } from '@urql/core'

export default createClient({
  url: import.meta.env.VITE_GITHUB_API_URL,
  fetchOptions: () => {
    return {
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
        'user-agent': 'reego.dev'
      },
    };
  },
  requestPolicy: 'network-only',
})
