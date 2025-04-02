<script lang="ts">
  import Body from './Body.svelte'
  import Head from './Head.svelte'
  import Html from './Html.svelte'

  interface Props {
    dark?: boolean
    language?: string
    preview: string
    title: string
    children?: import('svelte').Snippet
  }

  const {
    dark = false,
    language = 'en',
    preview,
    title,
    children,
  }: Props = $props()
</script>

<Html {language}>
  <Head {dark}>
    <title>{title}</title>
  </Head>
  <Body {preview}>
    {@render children?.()}
  </Body>
</Html>
