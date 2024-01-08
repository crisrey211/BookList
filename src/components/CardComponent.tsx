'use client';
import { Card } from 'keep-react';
import {
  ArrowsOutSimple,
  Bed,
  MapPinLine,
  Shower,
  Users,
} from 'phosphor-react';
import type { Movie } from '../vite-env';

export const CardComponent: React.FC<Movie> = ({ poster, title }) => {
  return (
    <Card
      className="!max-w-xs overflow-hidden rounded-md md:!max-w-[478px]"
      imgSrc={poster}
      imgSize="md"
      horizontal={true}
    >
      <Card.Container className="space-y-4 p-6">
        <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">
          <MapPinLine size={20} color="#5E718D" />
          <span>{title}</span>
        </Card.Title>
        <Card.Container className="flex items-center justify-between">
          <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
            <Bed size={20} color="#5E718D" />
            <span>3 Bed Room</span>
          </Card.Title>
          <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
            <Shower size={20} color="#5E718D" />
            <span>1 Bath</span>
          </Card.Title>
        </Card.Container>
        <Card.Container className="flex items-center justify-between">
          <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
            <ArrowsOutSimple size={20} color="#5E718D" />
            <span>1,032 sqft</span>
          </Card.Title>
          <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
            <Users size={20} color="#5E718D" />
            <span>Family</span>
          </Card.Title>
        </Card.Container>
        <Card.Container className="my-3 flex items-center justify-between">
          <Card.Title className="text-body-3 font-medium text-metal-500">
            $649,00
          </Card.Title>
        </Card.Container>
      </Card.Container>
    </Card>
  );
};
