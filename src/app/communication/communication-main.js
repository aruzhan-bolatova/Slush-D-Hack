import React from 'react';
import Card from "../components/VocabCard"; // Adjust the path based on your structure


const cardData = [
    { imageSrc: "/apple.png", title: "Apple", color:"#f9b4ab" },
    { imageSrc: "/ball.png", title: "Ball", color:"#f9b4ab" },
    { imageSrc: "/cat.png", title: "Cat", color:"#f9b4ab" },
    { imageSrc: "/dog.png", title: "Dog", color:"#f9b4ab" },
];

const CommunicationMain = () => {
    return (
        <div className="ml-20 p-6 bg-[url('/bg.png')] min-h-screen">

            <div className="flex flex-wrap gap-6 p-10">
                {cardData.map((item, index) => (
                    <Card key={index} imageSrc={item.imageSrc} title={item.title} color={item.color} />
                ))}
            </div>

        </div>
    )
}

export default CommunicationMain;