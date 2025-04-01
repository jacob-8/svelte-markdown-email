import { browser } from "$app/environment";
import { updates_markdown } from "./updates_markdown.svelte";

export const _updates_markdown_raw_eager = import.meta.glob(["./updates/**/*.md"], {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;


if (browser) {
  updates_markdown.assemble_html(_updates_markdown_raw_eager);
}

if (import.meta.hot) {
  import.meta.hot.accept((module) => {
    if (module?._updates_markdown_raw_eager) {
      updates_markdown.assemble_html(module._updates_markdown_raw_eager)
    }
  })
}