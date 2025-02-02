import React from 'react';
import { Circle } from 'lucide-react';
import { Chewy } from "next/font/google";

const chewy = Chewy({ weight: "400", subsets: ["latin"] });

const Dashboard = () => {
  const progressData = {
    total: 36,
    completed: 12,
    skills: [
      { name: 'Listening', level: 'Intermediate', progress: 75, color: 'rgb(255, 149, 128)' },
      { name: 'Cognitive', level: 'Intermediate', progress: 60, color: 'rgb(198, 176, 255)' },
      { name: 'Vocabulary', level: 'Beginner', progress: 40, color: 'rgb(152, 255, 183)' },
      { name: 'Social', level: 'Intermediate', progress: 65, color: 'rgb(128, 206, 255)' }
    ]
  };

  const learningCards = [
    { image: '/mp1.png', color: 'bg-orange-200' },
    { image: '/mp2.png' },
    { image: '/mp3.png', color: 'bg-yellow-100' }
  ];

  return (
    <div className="p-6 bg-[url('/bg.png')] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6 flex items-end" >
        <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center shadow-md">
            <img src="girl-char.png" alt="user picture" className="w-40 h-40 rounded-full" />
        </div>
          <p className={`text-6xl ml-10 mb-10 text-[#680A76] ${chewy.className}`}>
            Hey, Aigyr!
            {/* REPLACE WITH ACTUAL USERNAME */}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Progress Section */}
          <div className="md:col-span-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg text-black font-semibold mb-4">Overall progress</h2>
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-2">
                  {progressData.completed}/{progressData.total} lesson completed
                </div>
                <div className="h-4 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-orange-300 rounded-full"
                    style={{ width: `${(progressData.completed/progressData.total) * 100}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {progressData.skills.map((skill) => (
                  <div key={skill.name} className="text-center text-black">
                    <div className="relative inline-block">
                      <Circle 
                        size={64}
                        className="text-gray-200"
                      />
                      <div 
                        className="absolute top-0 left-0 w-16 h-16"
                        style={{
                          background: `conic-gradient(${skill.color} ${skill.progress}%, transparent 0)`,
                          borderRadius: '50%'
                        }}
                      />
                    </div>
                    <div className="mt-2">
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-sm text-gray-500">{skill.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {learningCards.map((card) => (
                <div 
                  key={card.title}
                  className={`${card.color} p-4 rounded-lg cursor-pointer transition-transform hover:scale-105 shadow`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <h3 className="text-sm font-medium">{card.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <DailySummary />
          </div>
        </div>
      </div>
    </div>
  );
};

const DailySummary = () => {
  const summaryItems = [
    { label: 'Brushing Teeth', value: 'Done', icon: '🪥' },
    { label: 'Make Your Bed', value: 'Done', icon: '🛏️' },
    { label: 'Eat', value: 'Done', icon: '🍽️' },
    { label: 'Paint', value: 'In Progress', icon: '🎨' },
    { label: 'Ride a Bike', value: 'In Progress', icon: '🚲' },
    { label: 'Go To Sleep', value: 'In Progress', icon: '😴' }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg text-black font-semibold mb-4">Daily Planner</h2>
      <div className="space-y-3">
        {summaryItems.map((item) => (
          <div key={item.label} className="flex text-gray-400 items-center space-x-2">
            <span className="text-xl">{item.icon}</span>
            <div>
              <div className="text-bs text-gray-500">{item.label}</div>
              <div className="text-sm">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;