import { Monitor, FileText, Trophy, HelpCircle, ChevronRight } from "lucide-react";

const stats = [
  {
    icon: <Monitor size={18} className="text-gray-400" />,
    iconBg: "bg-gray-100",
    label: "Lecture",
    percent: "75%",
    fraction: "(94/125)",
  },
  {
    icon: <FileText size={18} className="text-gray-400" />,
    iconBg: "bg-gray-100",
    label: "My Assignments",
    percent: "80%",
    fraction: "(401/497)",
  },
  {
    icon: <Trophy size={18} className="text-gray-400" />,
    iconBg: "bg-gray-100",
    label: "Contests",
    percent: "84%",
    fraction: "(60/71)",
  },
  {
    icon: <HelpCircle size={18} className="text-gray-400" />,
    iconBg: "bg-gray-100",
    label: "Quizzes",
    percent: "100%",
    fraction: "(24/24)",
  },
];

export default function Performance() {
  return (
    <section className="w-full">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Your performance
      </h2>


      <div className="flex items-center justify-between bg-orange-50 border border-orange-100 rounded-2xl px-4 py-3 mb-5">
        <div className="flex items-center gap-2">
          <FileText size={14} className="text-orange-500 flex-shrink-0" />
          <p className="text-xs">
            <span className="text-orange-600 font-semibold">
              96 pending assignment questions,
            </span>
            <span className="text-orange-500">
              {" "}solve them to boost your placement score.
            </span>
          </p>
        </div>
        <button className="text-xs font-semibold text-orange-600 tracking-wide hover:underline whitespace-nowrap ml-4">
          MY ASSIGNMENTS
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((s, i) => (
          <button
            key={i}
            className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-4 hover:shadow-sm transition-shadow text-left"
          >

            <div
              className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center flex-shrink-0`}
            >
              {s.icon}
            </div>

            <div className="flex-1">
              <p className="text-xs text-gray-500 font-medium mb-0.5">
                {s.label}
              </p>
              <p className="text-xl font-semibold text-gray-900 leading-tight">
                {s.percent}{" "}
                <span className="text-sm font-normal text-gray-400">
                  {s.fraction}
                </span>
              </p>
            </div>

            <ChevronRight size={16} className="text-gray-300 flex-shrink-0" />
          </button>
        ))}
      </div>
    </section>
  );
}