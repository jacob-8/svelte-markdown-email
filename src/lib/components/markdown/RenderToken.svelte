<script lang="ts">
  import type { Token } from 'marked'
  import DashedLine from '../email/DashedLine.svelte'
  import Image from '../email/Image.svelte'
  import Paragraph from '../email/Paragraph.svelte'
  import Title from '../email/Title.svelte'
  import RenderToken from './RenderToken.svelte'

  interface Props {
    token: Token
  }
  const { token }: Props = $props()
  const { type } = token
</script>

{#if type === 'image'}
  <Image row={{ x_padding: 0 }} src={token.href} alt={token.text} />
{:else if type === 'html'}
  {#if !token.raw.startsWith('<!--')}
    {@html token.raw}
  {/if}
{:else if type === 'paragraph'}
  <Paragraph row={{ bottom: 15 }}>
    {#each token.tokens as _token}
      <RenderToken token={_token} />
    {/each}
  </Paragraph>
{:else if type === 'list'}
  <Paragraph row={{ bottom: 15 }}>
    <ul style="margin: 0;">
      {#each token.items as item}
        <li>
          {#each item.tokens as _token}
            <RenderToken token={_token} />
          {/each}
        </li>
      {/each}
    </ul>
  </Paragraph>
{:else if type === 'hr'}
  <DashedLine row={{ top: 10, bottom: 30 }} />
{:else if type === 'text'}
  {#if token.tokens}
    {#each token.tokens as _token}
      <RenderToken token={_token} />
    {/each}
  {:else}
    {token.text}
  {/if}
{:else if type === 'strong'}
  <strong>{token.text}</strong>
{:else if type === 'em'}
  <em>{token.text}</em>
{:else if type === 'heading'}
  <Title text={token.text} row={{ top: 35, bottom: 25 }} />
  <!-- not using token.depth (1-6) -->
{:else if type !== 'space'}
  <pre>{JSON.stringify(token, null, 2)}</pre>
{/if}
