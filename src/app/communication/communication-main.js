"use client"; // Add this if you're using Next.js App Router (for Next.js 13+)
import { useState } from "react";
import React from 'react';
import Image from "next/image";
import Card from "../components/VocabCard"; // Adjust the path based on your structure
import HorizontalCard from "../components/HorizontalCard";


const cardDataVertical = [
    { imageSrc: "/want.gif", title: "I want", color: "#f9b4ab" },
    { imageSrc: "/like.gif", title: "I like", color: "#c5b4f9" },
    { imageSrc: "/i-think.gif", title: "I think", color: "#f9de8b" },
    { imageSrc: "/feel.gif", title: "I feel", color: "#b4e3f9" },
];

const cardDataHorizontal = [
    { imageSrc: "/let's.gif", title: "Let's", color: "#b4e3f9" },
    { imageSrc: "/that's.gif", title: "That's", color: "#b4e3f9" }
];

const CommunicationMain = () => {
    const [sentence, setSentence] = useState("..."); // Initial sentence
    const [currentCards, setCurrentCards] = useState([...cardDataVertical, ...cardDataHorizontal]);
    const [selectedWords, setSelectedWords] = useState([]);

    const handleCardClick = async (word) => {
        // Update sentence
        setSentence((prev) => (prev === "..." ? word : `${prev} ${word}`));
        const updatedSelectedWords = [...selectedWords, word];
        setSelectedWords(updatedSelectedWords);

        try {
            // POST to /api/recommendations
            const recommendationsResponse = await fetch("/api/recommendations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ selectedWords: updatedSelectedWords }),
            });

            if (!recommendationsResponse.ok) {
                throw new Error(`Error: ${recommendationsResponse.statusText}`);
            }

            console.log(recommendationsResponse);
            const recommendationsData = await recommendationsResponse.json();
            const { suggestions } = recommendationsData;

            // Fetch cards for each suggested word
            const newCards = await Promise.all(
                suggestions.map(async (suggestedWord) => {
                    const cardResponse = await fetch(`/api/cards?word=${suggestedWord}`);
                    const cardData = await cardResponse.json();
                    return {
                        imageSrc: `/images/${cardData.image}`, // Adjust image path
                        title: cardData.word,
                        color: "#f9de8b", // Default color, can be customized
                    };
                })
            );

            // Update current cards with new recommendations
            setCurrentCards(newCards);
        } catch (error) {
            console.error("Error fetching recommendations or cards:", error);
        }
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
                {currentCards.map((item, index) => (
                    <Card
                        key={index}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        color={item.color}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default CommunicationMain;