import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFilteredHeaderSectionData(voicesData: any[]) {
  return voicesData
    ?.filter((item) => item?.acf?.title_section || item?.acf?.subtitle_section)
    .map((item) => ({
      title: item?.acf?.title_section,
      subtitle: item?.acf?.subtitle_section,
    }));
}

export const getMediaType = (url: string | undefined): 'video' | 'image' | 'unknown' => {
  if (!url) return 'unknown';

  const videoExtensions = ['mp4', 'webm', 'mov', 'ogg'];
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];

  const extension = url.split('.').pop()?.toLowerCase();

  if (extension && videoExtensions.includes(extension)) return 'video';
  if (extension && imageExtensions.includes(extension)) return 'image';

  return 'unknown';
};
