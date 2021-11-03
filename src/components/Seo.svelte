<script lang="ts">
import { page } from '$app/stores'
export let title: string
export let description: string
export let image: string = ''

const origin = import.meta.env.VITE_DOMAIN
const defaultImage = origin + '/social_picture.jpg'
const query = $page.query.toString()
</script>

<title>{title} | reego.dev</title>
<meta name="description" content="{description}">

<meta property="og:title" content="{title} | reego.dev">
<meta property="og:description" content="{description}">
<meta property="og:image" content="{image || defaultImage}">
<meta property="og:url" content="{origin}{$page.path}{query ? '?' + query : ''}">
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@reegodev">
