export const areaKeys = ['jatszohaz', 'pince', 'terasz'] as const
export type AreaKey = (typeof areaKeys)[number]

export type MediaItem = {
  type: 'image' | 'video'
  src: string
  name: string
}

export type MediaLibrary = Record<AreaKey, MediaItem[]>

export const areaCovers: Record<AreaKey, string> = {
  jatszohaz: '/images/jatszovar.png',
  pince: '/images/happy-pince.png',
  terasz: '/images/terasz.png',
}

export function videoMimeType(src: string) {
  return src.toLowerCase().endsWith('.webm') ? 'video/webm' : 'video/mp4'
}
