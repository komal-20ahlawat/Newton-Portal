import { Trophy, FileText, BookOpen, Brain, Sparkles, Clock } from "lucide-react";

const typeConfig = {
  contest: {
    icon: <Trophy size={14} />,
    iconBg: "bg-[#f1f3f5]",
    outerBg: "bg-[#f1f3f5]",
    stripBg: "bg-[#eef0f2]",
  },
  "in class": {
    icon: <FileText size={14} />,
    iconBg: "bg-green-100",
    outerBg: "bg-[#a0ebc2]",
    stripBg: "bg-[#a0ebc2]",
  },
  "post class": {
    icon: <FileText size={14} />,
    iconBg: "bg-orange-100",
    outerBg: "bg-orange-100",
    stripBg: "bg-orange-100",
  },
  quiz: {
    icon: <BookOpen size={14} />,
    iconBg: "bg-purple-100",
    outerBg: "bg-purple-100",
    stripBg: "bg-purple-100",
  },
  "ai mock interview": {
    icon: <Sparkles size={14} />,
    iconBg: "bg-[#dac0ee]",
    outerBg: "bg-[#dac0ee]",
    stripBg: "bg-[#dac0ee]",
  },
};

export default function TaskCard({
  subject,
  type,
  title,
  deadline,
  multiplier = "2x",
  xp,
  xpMax,
  solved,
  total,
  badge,

  isMock = false,
  attemptsLeft,
  duration,
}) {
  const key = type?.toLowerCase();
  const config = typeConfig[key] || typeConfig["contest"];

  return (
    <div
      className={`w-[320px] flex-shrink-0 rounded-2xl border border-gray-200 ${config.outerBg} overflow-hidden`}
    >
      
      <div className="bg-white rounded-2xl m-1 border border-gray-200">

        <div className="px-4 py-4 border-b border-gray-100 flex items-center justify-between">
          <p className="text-xs font-medium text-gray-600">{subject}</p>
          {badge && (
<span className="bg-red-600 text-white text-xs font-semibold px-3.5 py-1 rounded-lg h-7 text-center">
  {badge}
</span>
          )}
        </div>

        <div className="px-4 py-4">


          <div className="flex items-center gap-2 text-black text-sm">
            <div
              className={`w-7 h-7 ${config.iconBg} rounded-lg flex items-center justify-center`}
            >
              {config.icon}
            </div>
            {type}
          </div>

          <h2 className="text-sm font-semibold mt-2 text-gray-900 leading-snug">
            {title}
          </h2>

          <p className="text-sm text-gray-500 mt-3">{deadline}</p>

          <div className="flex items-center gap-1 mt-3 h-[20px]">
  {isMock ? (
    <span className="text-xs text-gray-500">
      Attempts Left: {attemptsLeft}
    </span>
  ) : (
    <>
      <span className="bg-orange-100 text-orange-600 text-[10px] px-1.5 py-0.5 font-semibold rounded">
        {multiplier}
      </span>
      <img
        className="h-4 w-4"
        src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/77ba313553d342eaa91e3e9a7ed5649c.svg"
        alt="xp"
      />
      <span className="text-xs font-medium text-gray-800">
        {xp}/{xpMax}
      </span>
    </>
  )}
</div>
        </div>
      </div>


     <div className="flex items-center justify-between px-4 py-2">
  

  <div className="flex items-center gap-2 text-xs text-gray-600">
    {isMock ? (
      <>
        <Clock size={14} />
        <span>{duration}</span>
      </>
    ) : (
      <>
        <span className="text-lg font-medium text-gray-900">
          {solved}
        </span>
        <span className="text-gray-500">/ {total} Solved</span>
      </>
    )}
  </div>

  <button className="bg-black text-white px-6 py-2.5 rounded-xl text-xs font-medium">
    {isMock ? "Attempt" : "Solve"}
  </button>
</div>
    </div>
  );
}
