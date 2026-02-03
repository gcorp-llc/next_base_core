// app/[locale]/[...not_found]/page.tsx
import { notFound } from 'next/navigation';

export default function CatchAllNotFound() {
  notFound();   // ← این خط باعث می‌شود Next.js به not-found.tsx داخل همان segment برود
}