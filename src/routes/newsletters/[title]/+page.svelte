<script lang="ts">
  import { page } from "$app/state";
  import Iframe from "../../../lib/components/Iframe.svelte";
  import { updates_markdown } from "../updates_markdown.svelte";
  import "../get_updates";
  import "../update_on_template_change";

  const update_data = $derived.by(() => {
    return Object.values(updates_markdown.updates).find((update) => update.title === page.params.title);
  });
</script>

<div class="p-3">
  <div class="p-2 flex text-lg">
    <a class="mr-2 hover:underline" href="/newsletters">Back</a>
    <div>
      {page.params.title}
    </div>
  </div>

  {#if update_data}
    <div class="w-full h-90vh border border-black">
      <Iframe html={update_data.html} />
    </div>
  {:else}
    <div class="text-red-500">No updates found for {page.params.title}</div>
  {/if}
</div>
