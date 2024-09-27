// gtag.d.ts (or globals.d.ts)
export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
