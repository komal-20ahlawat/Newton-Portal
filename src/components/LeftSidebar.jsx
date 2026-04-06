import {
  Home,
  TrendingUp,
  GitBranch,
  Users,
  Calendar,
  Code,
  Trophy,
  FileText,
  Shield,
  HelpCircle,
} from "lucide-react";

function LeftSidebar() {
  return (
    <div className="w-70 h-full border-r border-gray-300 px-6 py-6 overflow-y-auto">

      <div className="mb-6">
        <h2 className="text-md font-bold">S2'25 CS+AI RU</h2>
        <span className="inline-block mt-2 bg-green-200 text-green-800 text-xs px-3 py-1 rounded-md font-medium">
          Enrolled
        </span>
      </div>

      <hr className="mb-6 border-gray-300" />

      <div className="bg-blue-100 text-blue-600 flex items-center gap-4 px-4 py-5 rounded-xl mb-6 cursor-pointer h-12 w-50 hover:bg-gray-200">
        <Home size={22} />
        <span className="text-sm font-medium">Home</span>
      </div>

      <div className="mb-6">
        <h3 className="text-s font-semibold mb-3 pl-2">Subjects</h3>
        <div className="border-2 border-gray-200 rounded-2xl p-4 space-y-2">
          <p className="text-sm cursor-pointer hover:bg-gray-200 rounded-xl h-9 flex items-center px-2">DSA - A</p>
          <p className="text-sm cursor-pointer hover:bg-gray-200 rounded-xl h-9 flex items-center px-2">DSA Lab 1 - A</p>
          <p className="text-sm cursor-pointer hover:bg-gray-200 rounded-xl h-9 flex items-center px-2">Maths II - A</p>
          <p className="text-sm cursor-pointer hover:bg-gray-200 rounded-xl h-9 flex items-center px-2">Maths II Tut 1 - A</p>
          <p className="text-sm cursor-pointer hover:bg-gray-200 rounded-xl h-9 flex items-center px-2">WAP - A</p>
          <p className="text-sm cursor-pointer hover:bg-gray-200 rounded-xl h-9 flex items-center px-2">WAP Lab 1 - A</p>
        </div>
      </div>

      <div className="space-y-8 text-sm">
        <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-200 rounded-xl h-9 px-2">
          <TrendingUp size={22} />
          <span>Scorecard</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-200 rounded-xl h-9 px-2">
          <GitBranch size={22} />
          <span>My Timeline</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-200 rounded-xl h-9 px-2">
          <Users size={22} />
          <span>Expert Sessions</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-200 rounded-xl h-9 px-2">
          <Calendar size={22} />
          <span>Calendar</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-200 rounded-xl h-9 px-2">
          <Code size={22} />
          <span>Arena</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-200 rounded-xl h-9 px-2">
          <Trophy size={22} />
          <span>Leaderboard</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-200 rounded-xl h-9 px-2">
          <FileText size={22} />
          <span>Question of the Day</span>
        </div>
      </div>

      <div className="mt-6 bg-green-100 px-5 py-3 rounded-2xl flex items-center gap-4 cursor-pointer text-green-800 hover:bg-gray-200">
        <Shield size={22} />
        <span className="text-sm">Share a Concern</span>
      </div>

      <div className="mt-6 flex items-center gap-4 cursor-pointer text-sm hover:bg-gray-200 rounded-xl h-9 px-2">
        <HelpCircle size={22} />
        <span>Help & Support</span>
      </div>

    </div>
  );
}

export default LeftSidebar;
