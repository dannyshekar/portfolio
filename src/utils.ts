import { getCollection } from 'astro:content';

export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10); // 2026-09-30
}

export function readingTime(text = '') {
  const words = text.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

const newestFirst = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

// Drafts show while you run `npm run dev`, but are left out of the real site.
const published = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

export async function getPosts() {
  return (await getCollection('blog', published)).sort(newestFirst);
}

export async function getProjects() {
  return (await getCollection('projects', published)).sort(newestFirst);
}

export async function getNotes() {
  return (await getCollection('notes', published)).sort(newestFirst);
}

// Newest first.
export async function getExperience(kind: 'work' | 'education') {
  const entries = await getCollection('experience', ({ data }) => data.kind === kind);
  return entries.sort((a, b) => b.data.start.localeCompare(a.data.start));
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// "2024-03" → "Mar 2024", "2019" → "2019"
export function formatMonth(value: string) {
  const [year, month] = value.split('-');
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

export function formatRange(start: string, end?: string) {
  if (!end) return `${formatMonth(start)} – Present`;
  return `${formatMonth(start)} – ${formatMonth(end)}${isOngoing(end) ? ' (expected)' : ''}`;
}

// True for roles with no end date, or an end date still in the future.
export function isOngoing(end?: string) {
  return !end || end > new Date().toISOString().slice(0, 7);
}

export function slugifyTag(tag: string) {
  return tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
