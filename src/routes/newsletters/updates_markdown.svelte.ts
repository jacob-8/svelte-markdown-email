import { api_render_email } from "./render/call";

interface UpdateData {
  title: string;
  markdown: string;
  html: string;
}

class UpdatesMarkdown {
  updates = $state<Record<string, UpdateData>>({});

  async assemble_html(markdown_modules: Record<string, string>, { template_changed } = { template_changed: false }) {
    for (const [path, markdown] of Object.entries(markdown_modules)) {
      if (!template_changed && this.updates[path]?.markdown === markdown) {
        continue;
      }
      const title = path.split("/").pop().replace('.md', '')
      const number = +title.match(/\d+/)?.[0]
      const { data: { html } } = await api_render_email({ markdown, number })
      this.updates[path] = {
        title,
        markdown,
        html,
      }
    }
  }

  async template_changed() {
    for (const [path, {title, markdown}] of Object.entries(this.updates)) {
      const number = +title.match(/\d+/)?.[0]
      const { data: { html } } = await api_render_email({ markdown, number })

      this.updates[path] = {
        title,
        markdown,
        html,
      }
    }
  }
}

export const updates_markdown = new UpdatesMarkdown();

