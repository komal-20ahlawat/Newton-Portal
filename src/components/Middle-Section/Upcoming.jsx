import { History, ChevronLeft, ChevronRight } from "lucide-react";
import TaskCard from "./TaskCard";

const upcomingTasks = [
  {
    subject: "DSA - A",
    type: "Post Class",
    title: "Merge Sort Problems - Post Class",
    deadline: "Deadline is Apr 6th 2026, 2:00 pm",
    multiplier: "2x",
    xp: 0,
    xpMax: 60,
    solved: 0,
    total: 3,
    badge: "due tomorrow",
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
    badge: "due tomorrow",
  },
  {
    subject: "DSA - A",
    type: "AI Mock Interview",
    title: "DSA AI Mock Interview 5",
    deadline: "Deadline is Apr 8th 2026, 2:00 am",
    isMock: true,
    attemptsLeft: 3,
    duration: "45 minutes",
  },
  {
    subject: "Maths II - A",
    type: "Quiz",
    title: "Expectation of Binomial distribution",
    deadline: "Deadline is Apr 7th 2026, 12:35 pm",
    multiplier: "2x",
    xp: 0,
    xpMax: 40,
    solved: 0,
    total: 2,
  },
];

export default function Upcoming() {
  return (
    <section className="w-full">
  
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
            <History size={20} className="text-gray-600" />
          </div>
          <div>
            <h1 className="text-xl font-medium text-gray-700">Upcoming Deadlines</h1>
            <p className="text-sm text-gray-500 mt-1">Tasks that are due</p>
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

    
      <div
        className="flex gap-4 pb-3"
        style={{ overflowX: "auto", overflowY: "visible" }}
      >
        {upcomingTasks.map((task, i) => (
          <TaskCard key={i} {...task} />
        ))}
      </div>
    </section>
  );
}
