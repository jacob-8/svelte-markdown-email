<script lang="ts">
  interface Props {
    html: string;
  }

  let { html }: Props = $props();
</script>

<iframe srcdoc={html} class="w-full h-full"></iframe>