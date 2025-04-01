<script lang="ts">
  import Iframe from "./Iframe.svelte";
  import { updates_markdown } from "./updates_markdown.svelte";
  import './get_updates'
  import './update_on_template_change'
</script>

<div class="p-3">
  {#each Object.entries(updates_markdown.updates) as [path, { title, html }] (path)}
    <div class="mb-3 bg-gray-100">
      <div class="flex p-2 border-t border-x border-black">
        <a href="/newsletters/{title}" class="font-semibold">
          {title}
        </a>
        <div class="ml-auto"></div>
        <!-- <button type="button" onclick={() => {}} class="ml-2 text-sm text-gray-500 hover:underline">
          Edit Markdown
        </button> -->
        <button
          type="button"
          onclick={() => navigator.clipboard.writeText(html)}
          class="ml-2 text-sm text-gray-500 hover:underline"
        >
          Copy HTML
        </button>
      </div>
      <div class="w-full h-500px border border-black">
        <Iframe {html} />
      </div>
    </div>
  {/each}
</div>
