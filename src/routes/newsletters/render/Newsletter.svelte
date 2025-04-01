<svelte:options css="injected" />

<script lang="ts">
  import MarkdownToEmailHtml from '$lib/components/markdown/MarkdownToEmailHtml.svelte'
  import Row from '$lib/components/Row.svelte'
  import Shell from '$lib/components/Shell.svelte'
  import Footer from './Footer.svelte'
  import Header from './Header.svelte'

  interface Props {
    markdown: string;
    number: number;
  }

  let { markdown, number }: Props = $props();

  const title = `Weekly Update #${number}`
  const preview = 'Here is the latest update on the stars from us to you.'
</script>

<Shell {preview} {title}>
  <Header {number} row={{ backgroundColor: '#006168', space: 12 }} />
  <!-- <Row space={20}>
    <td
      align="center"
      style="padding: 0 0 10px; font-size: 14px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #666666; font-style:italic;"
      class="padding">
      Something in the header on every update.
    </td>
  </Row> -->
  <MarkdownToEmailHtml {markdown} />
  <Row top={10} bottom={20}>
    <td
      class="padding"
      align="center"
      valign="middle"
      style="padding: 10px 0 0;">
      <img
        src="https://images.unsplash.com/photo-1741936428950-3f66f0a69320?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Jacob and Samantha"
        width="250"
        style="display: block; color: #666666; font-family: Helvetica, arial, sans-serif; font-size: 16px; width: 250px; height: auto;" />
    </td>
  </Row>
  <Footer
    address="1234 Somewhere Rd, There, OR 97777"
    row={{ backgroundColor: '#dddddd', space: 20 }} />
</Shell>
