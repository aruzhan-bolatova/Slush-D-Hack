"use client"; // Add this if you're using Next.js App Router (for Next.js 13+)
import { useState } from "react";
import React from 'react';
import Image from "next/image";
import Card from "../components/VocabCard"; // Adjust the path based on your structure


const cardData = [
    { imageSrc: "/apple.png", title: "to eat", color: "#f9b4ab" },
    { imageSrc: "/ball.png", title: "to go", color: "#c5b4f9" },
    { imageSrc: "/cat.png", title: "to have", color: "#f9de8b" },
    { imageSrc: "/dog.png", title: "to wear", color: "#b4e3f9" },
];

const CommunicationMain = () => {
    const [sentence, setSentence] = useState("..."); // ✅ Initial sentence

    const handleCardClick = (word) => {
        setSentence((prev) => `${word}`); // ✅ Update sentence dynamically
    };

    return (
        <div className="ml-20 p-6 bg-[url('/bg.png')] min-h-screen">
            {/* Sentence Input Bar */}

            <div className="bg-white text-3xl text-gray-800 px-4 py-5 flex rounded-lg shadow-md border-2 border-purple-400 w-full max-w-4xl ml-10 mb-6">
                <Image
                    src="/communication.png"
                    alt="communication icon"
                    width={50}
                    height={50}
                    className="object-contain mb-3 mr-10 ml-5"
                />
                <p className="mt-3">{sentence}</p>
                
            </div>



            {/* Card Grid */}
            <div className="flex flex-wrap gap-6 p-10">
                {cardData.map((item, index) => (
                    <Card
                        key={index}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        color={item.color}
                        onClick={handleCardClick}  // ✅ Pass function to update sentence
                    />
                ))}
            </div>
        </div>
    );
};

export default CommunicationMain;