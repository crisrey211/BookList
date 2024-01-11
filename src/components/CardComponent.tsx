'use client';
import { Card, Badge } from 'flowbite-react';
import type { Book } from '../vite-env';

export const CardComponent: React.FC<Book> = ({
  title,
  author,
  year,
  genre,
  synopsis,
  pages,
}) => {
  return (
    <Card
      className="h-50"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      style={{ transform: 'scale(0.9)' }}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <div className="flex flex-wrap gap-2">
        <Badge color="info">género: {genre}</Badge>
        <Badge color="success">autor: {author.name}</Badge>
        <Badge color="gray">año: {year}</Badge>
        <Badge color="purple">páginas: {pages}</Badge>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">{synopsis}</p>
    </Card>
  );
};
