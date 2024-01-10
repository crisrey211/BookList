'use client';
import { Card } from 'keep-react';
import type { Book } from '../vite-env';

export const CardComponent: React.FC<Book> = ({
  cover,
  title,
  author,
  year,
  synopsis,
}) => {
  return (
    <Card
      className="!max-w-xs overflow-hidden rounded-md md:!max-w-[478px]"
      imgSrc={cover}
      imgSize="md"
      horizontal={true}
    >
      <Card.Container className="space-y-4 p-6">
        <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">
          <span>{title}</span>
        </Card.Title>
        <Card.Container className="flex items-center justify-between">
          <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
            <span>{author.name}</span>
          </Card.Title>
          <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
            <span>year:{year}</span>
          </Card.Title>
        </Card.Container>
        <Card.Container className="flex items-center justify-between">
          <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
            <span>pages:1551</span>
          </Card.Title>
          <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
            <span>Family</span>
          </Card.Title>
        </Card.Container>
        <Card.Container className="my-3 flex items-center justify-between text-slate-950">
          {synopsis}
        </Card.Container>
      </Card.Container>
    </Card>
  );
};
