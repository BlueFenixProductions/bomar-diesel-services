// Polyfills for jsdom so Vuetify components don't crash in tests
// matchMedia
if (typeof window !== 'undefined' && !window.matchMedia) {
  // @ts-ignore - jsdom stub
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}
// ResizeObserver
if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
  class ResizeObserver {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(_cb: any) {}
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  // @ts-ignore - jsdom stub
  window.ResizeObserver = ResizeObserver
}