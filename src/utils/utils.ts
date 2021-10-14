export function randomItem(items: any[]): any {
  return items[Math.floor(Math.random() * items.length)]
}