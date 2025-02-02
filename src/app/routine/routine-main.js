"use client"; // Add this if you're using Next.js App Router (for Next.js 13+)
import { useState } from 'react';
import DayTabs from '../components/DayTabs';
import ActivityCard from '../components/ActivityCard';
import ProgressBar from '../components/ProgressBar';
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Chewy } from "next/font/google";

const chewy = Chewy({ weight: "400", subsets: ["latin"] });

const RoutineMain = () => {
    const [activities, setActivities] = useState([]);

    return (
        <div className="p-6 bg-[url('/bg.png')] min-h-screen">
            <div className='mt-10 ml-20 '>
                <h1 className={`text-6xl mb-10 text-[#680A76] ${chewy.className}`}>Let's build our schedule together!</h1>
                <div className="flex space-x-4 mb-10">
                    <ActivityCard
                        imageSrc="https://drive.google.com/uc?id=1-plyg8M95Fzf6TT8_nqTMkpvTq6OT8rp"
                        title="Skin Care"
                        color="#FBE7C6"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="https://drive.google.com/uc?id=1HneaBfyVBLatChf1etEf4GZNtld9ZSAN"
                        title="Brushing Teeth"
                        color="#C6E7FB"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="/exercise.png"
                        title="Sports"
                        color="#FBC6F3"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="https://drive.google.com/uc?id=1PKe2-aqETTmM2njJHQDSLUFk-fMzIOSJ"
                        title="Cleaning"
                        color="#c5b4f9"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="https://drive.google.com/uc?id=1TYIYNOsTPzPhl-Q3t8tDCM7RuxBRB0Bi"
                        title="Wash Your Dishes"
                        color="#f9de8b"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="/make-bed.png"
                        title="Make Your Bed"
                        color="#C77171"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="/playground.png"
                        title="Go To Playground"
                        color="#E9C9E1"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="/bike.png"
                        title="Ride a Bike"
                        color="#BEEAD2"
                        onDrop={() => { }}
                    />


                </div>
                <p className='text-gray-500'>Drag and drop images below!</p>
                <ProgressBar activities={activities} setActivities={setActivities} />
                <div className="flex space-x-4 mt-10">
                    <ActivityCard
                        imageSrc="/paint.png"
                        title="Paint"
                        color="#FBE7C6"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="/dress.png"
                        title="Get Dressed"
                        color="#C6E7FB"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="/homework.png"
                        title="Do Homework"
                        color="#FBC6F3"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="/walk.png"
                        title="Go on a Walk"
                        color="#c5b4f9"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="/reading.png"
                        title="Reading"
                        color="#f9de8b"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="/friends.png"
                        title="Meet Friends"
                        color="#C77171"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="/go-sleep.png"
                        title="Go To Sleep"
                        color="#E9C9E1"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="/game.png"
                        title="Play a Game"
                        color="#BEEAD2"
                        onDrop={() => { }}
                    />


                </div>
            </div>
        </div>
    );
};

export default RoutineMain;