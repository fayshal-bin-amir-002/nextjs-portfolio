"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TProject } from "@/types/project.type";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: TProject;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <Link href={`/projects/${card._id}`}>
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer border border-main-light shadow-md shadow-main-light",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div
            className="text-2xl md:text-4xl font-medium text-white"
            style={{
              textShadow:
                "0 2px 3px rgba(221, 214, 254, 0.3), 0 -2px 3px rgba(221, 214, 254, 0.3), 2px 0 3px rgba(221, 214, 254, 0.3), -2px 0 3px rgba(221, 214, 254, 0.3)",
            }}
          >
            {card.title}
          </div>
        </div>
      </div>
    </Link>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: TProject[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
