import fs from 'node:fs'
import path from 'node:path'
import { areaKeys, type MediaItem, type MediaLibrary } from '@/lib/media'

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'])
const VIDEO_EXTENSIONS = new Set(['.mp4', '.mov', '.m4v', '.webm'])

const byNaturalName = new Intl.Collator('en', { numeric: true, sensitivity: 'base' }).compare

function readMediaFolder(folder: string): MediaItem[] {
  const dir = path.join(process.cwd(), 'public', 'media', folder)
  let files: string[]
  try {
    files = fs.readdirSync(dir)
  } catch {
    return []
  }

  return files
    .filter((file) => !file.startsWith('.'))
    .sort(byNaturalName)
    .flatMap<MediaItem>((file) => {
      const ext = path.extname(file).toLowerCase()
      const src = `/media/${folder}/${encodeURIComponent(file)}`
      if (IMAGE_EXTENSIONS.has(ext)) return [{ type: 'image', src, name: file }]
      if (VIDEO_EXTENSIONS.has(ext)) return [{ type: 'video', src, name: file }]
      return []
    })
}

export function getMediaLibrary(): MediaLibrary {
  return Object.fromEntries(areaKeys.map((key) => [key, readMediaFolder(key)])) as MediaLibrary
}

export function getHeroPhotos(): string[] {
  return readMediaFolder('hero')
    .filter((item) => item.type === 'image')
    .map((item) => item.src)
}
