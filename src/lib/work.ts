import { getCollection, type CollectionEntry } from 'astro:content';

export type Work = CollectionEntry<'work'>;

// Published case studies, sorted by `order`. Drafts only show up in `npm run dev`.
export async function getWork(): Promise<Work[]> {
  const all = await getCollection('work', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}
