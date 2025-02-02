// components/ProgressBar.js
"use client"; // Add this if you're using Next.js App Router (for Next.js 13+)
import { useState } from "react";
import Image from "next/image";
import { useDrag, useDrop } from "react-dnd";
import ActivityCard from '../components/ActivityCard';

const ProgressBar = ({ activities, setActivities }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "ACTIVITY",
        drop: (item) => handleDrop(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const handleDrop = (activity) => {
        if (!activity.imageSrc) return;
        setActivities((prev) => [...prev, activity]);
    };

    return (
        <div
            ref={drop}
            className={`w-full bg-gray-200 h-48 flex items-center justify-start transition-all ${isOver ? "bg-blue-100" : ""
                }`}
        >
            {activities.map((activity, index) => (
                <ActivityCard
                    key={index}
                    imageSrc={activity.imageSrc}
                    title={activity.title}
                    color={activity.color}
                />
            ))}
        </div>
    );
};

export default ProgressBar;