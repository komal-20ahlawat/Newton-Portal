import { Calendar, ArrowRight } from "lucide-react";

function RightSidebar() {
  return (
<div className="w-85 h-full border-l border-gray-300 px-5 py-4 overflow-y-auto">

      <div className="bg-blue-100 rounded-2xl p-4 mb-10 relative overflow-hidden border border-blue-200">

        <div className="flex items-center justify-between mb-6">
          <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-md font-semibold">
            LIVE
          </span>

          <span className="bg-blue-600 text-white text-xs px-4 py-1 rounded-md flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            ENDS IN 05:28:26
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-2">
          QUESTION OF THE DAY
        </p>

        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Max Consecutive Ones
        </h2>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white"></div>
          </div>
          <p className="text-gray-600 text-sm">
            170 people have attempted
          </p>
        </div>

        <button className="w-68 h-10 bg-black text-white py-3 rounded-lg flex items-center justify-center gap-3 text-sm font-medium">
          Solve Now
          <ArrowRight size={20} strokeWidth={2} />
        </button>
      </div>

      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-medium">Calendar</h2>

        <button className="flex items-center gap-2 border-2 rounded-xl px-4 py-2 text-sm border-gray-200">
          View
          <Calendar size={18} />
        </button>
      </div>

      <p className="text-gray-500 mb-6 text-sm font-medium">
        Your schedule for the next days
      </p>

      <hr className="mb-6 border-gray-300" />

      <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-lg mb-8 font-medium text-sm">
        You have 3 events today
      </div>

      <div className="flex gap-6 mb-9">
        <div className="text-center">
          <p className="text-xl font-medium">18</p>
          <p className="text-sm">WED</p>
        </div>

        <div className="flex-1">
          <p className="text-xs font-medium text-gray-500">WAP - A</p>
          <p className="text-sm font-medium">Lecture</p>
          <p className="text-gray-500 mb-3 text-xs">9:00 AM - 10:30 AM</p>

          <hr className="mb-4 border-gray-300" />

          <p className="text-xs font-medium text-gray-500">DSA - A</p>
          <p className="text-sm font-medium">Lecture</p>
          <p className="text-gray-500 mb-3 text-xs">10:30 AM - 12:00 PM</p>

          <hr className="mb-4 border-gray-300" />

          <p className="text-xs font-medium text-gray-500">Maths II Tut 1 - A</p>
          <p className="text-sm font-medium">Lecture</p>
          <p className="text-gray-500 mb-3 text-xs">1:00 PM - 2:20 PM</p>
          <hr className="mb-6 border-gray-300" />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="text-center">
          <p className="text-xl font-medium">19</p>
          <p className="text-sm">THU</p>
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-500">WAP - A</p>
          <p className="text-sm font-medium">Lecture</p>
          <p className="text-gray-500 mb-3 text-xs">9:00 AM - 10:30 AM</p>

          <hr className="mb-4 border-gray-300" />

          <p className="text-xs font-medium text-gray-500">DSA - A</p>
          <p className="text-sm font-medium">Lecture</p>
          <p className="text-gray-500 mb-3 text-xs">10:30 AM - 12:00 PM</p>

          <hr className="mb-4 border-gray-300" />

          <p className="text-xs font-medium text-gray-500">Maths II Tut 1 - A</p>
          <p className="text-sm font-medium">Lecture</p>
          <p className="text-gray-500 mb-3 text-xs">1:00 PM - 2:20 PM</p>
          <hr className="mb-6 border-gray-300" />
        </div>
      </div>

    </div>
  );
}

export default RightSidebar;
