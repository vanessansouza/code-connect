declare module 'jest-axe' {
  export function toHaveNoViolations(): void
  export function axe(container: Element): Promise<unknown>
}
