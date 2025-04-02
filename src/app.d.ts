// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {}

declare namespace svelteHTML {
  // enhance elements
  interface IntrinsicElements {
    'my-custom-element': { 'someattribute': string, 'on:event': (e: CustomEvent<any>) => void }
  }
  interface HTMLAttributes<T> {
    // If you want to use the beforeinstallprompt event
    onbeforeinstallprompt?: (event: any) => any
    // If you want to use myCustomAttribute={..} (note: all lowercase)
    mycustomattribute?: any // You can replace any with something more specific if you like
  }
}
