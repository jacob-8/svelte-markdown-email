import { updates_markdown } from "./updates_markdown.svelte";

export const _template_changed = import.meta.glob(["./render/*.svelte", "/src/lib/components/**/*.svelte"], {
  query: "?raw",
  import: "default",
  eager: true,
});

if (import.meta.hot) {
  import.meta.hot.accept((module) => {
    if (module?._template_changed) {
      updates_markdown.template_changed();
    }
  })
}