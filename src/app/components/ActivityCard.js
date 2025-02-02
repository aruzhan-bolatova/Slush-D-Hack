"use client"; // Add this if you're using Next.js App Router (for Next.js 13+)
import { useState } from "react";
import Image from "next/image";
import { useDrag, useDrop } from "react-dnd";

const ActivityCard = ({ imageSrc, title, color, onDrop }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "ACTIVITY",
        item: { title, imageSrc: imageSrc || "/images/placeholder.png", color },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
          ref={drag}
          className={`rounded-2xl shadow-lg p-4 flex flex-col items-center w-32 cursor-pointer transition-transform hover:scale-105 ${
            isDragging ? "opacity-50" : "opacity-100"
          }`}
          style={{ backgroundColor: color }}
        >
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={title}
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
          )}
          <p className="mt-3 text-lg font-semibold text-gray-700">{title}</p>
        </div>
      );
};


export default ActivityCard;
