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
                <div className="flex space-x-6 mb-10">
                    <ActivityCard
                        imageSrc="https://drive.google.com/uc?id=1-plyg8M95Fzf6TT8_nqTMkpvTq6OT8rp"
                        title="Homework"
                        color="#FBE7C6"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="https://drive.google.com/uc?id=1HneaBfyVBLatChf1etEf4GZNtld9ZSAN"
                        title="Sports"
                        color="#C6E7FB"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="https://drive.google.com/uc?id=1PaEBOstGEo5UK4B6UEL0M4JrJlYlLoSn"
                        title="Social Time"
                        color="#FBC6F3"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="https://drive.google.com/uc?id=1PKe2-aqETTmM2njJHQDSLUFk-fMzIOSJ"
                        title="Social Time"
                        color="#c5b4f9"
                        onDrop={() => { }}
                    />
                    <ActivityCard
                        imageSrc="https://drive.google.com/uc?id=1TYIYNOsTPzPhl-Q3t8tDCM7RuxBRB0Bi"
                        title="Social Time"
                        color="#f9de8b"
                        onDrop={() => { }}
                    />
                </div>
                <ProgressBar activities={activities} setActivities={setActivities} />
            </div>
        </div>
    );
};

export default RoutineMain;