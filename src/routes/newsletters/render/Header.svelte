<script lang="ts">
  import type { ComponentProps } from 'svelte'
  import Row from '$lib/components/email/Row.svelte'

  interface Props {
    number: number
    row: ComponentProps<typeof Row>
  }

  const {
    number,
    row,
  }: Props = $props()
</script>

<Row {...row}>
  <td align="center" valign="top" style="font-family: Helvetica, Arial, sans-serif; font-size: 20px; color: white;">Athletic.net # {number}</td>
</Row>
