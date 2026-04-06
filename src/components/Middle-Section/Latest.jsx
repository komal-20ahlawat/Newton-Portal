import { History, ChevronLeft, ChevronRight } from "lucide-react";
import TaskCard from "./TaskCard";

const latestTasks = [
  {
    subject: "WAP - A",
    type: "Contest",
    title: "Practice Assignment",
    deadline: "Deadline is Mar 8th 2026, 6:00 pm",
    multiplier: "2x",
    xp: 0,
    xpMax: 440,
    solved: 0,
    total: 16,
  },
  {
    subject: "DSA - A",
    type: "AI Mock Interview",
    title: "DSA Mock AI Interview",
    deadline: "Deadline is Mar 9th 2026, 6:00 pm",
    isMock: true,
    attemptsLeft: 3,
    duration: "45 minutes",
  },
  {
    subject: "DSA - A",
    type: "Contest",
    title: "DSA Assignment 4 - Binary Search",
    deadline: "Deadline is Mar 8th 2026, 11:00 am",
    multiplier: "2x",
    xp: 0,
    xpMax: 440,
    solved: 31,
    total: 31,
  },
  {
    subject: "DSA Lab 1 - A",
    type: "In Class",
    title: "Merge Sort Problems - In Class",
    deadline: "Deadline is Apr 7th 2026, 1:03 pm",
    multiplier: "2x",
    xp: 40,
    xpMax: 80,
    solved: 1,
    total: 2,
  },
];

export default function Latest() {
  return (
    <section className="w-full">

      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
            <History size={20} className="text-gray-600" />
          </div>
          <div>
            <h1 className="text-xl font-medium text-gray-700">Latest Released</h1>
            <p className="text-sm text-gray-500 mt-1">All your tasks released recently</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-2">
        {latestTasks.map((task, i) => (
          <TaskCard key={i} {...task} />
        ))}
      </div>
    </section>
  );
}

