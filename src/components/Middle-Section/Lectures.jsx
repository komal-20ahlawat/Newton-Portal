import { Play } from "lucide-react";

const lectures = [
  {
    subject: "DSA Lab 1 - A",
    title: "Merge Sort Problems",
    xp: 30,
    xpMax: 30,
    date: "April 2, 2026",
    duration: "01:30:00",
  },
  {
    subject: "WAP Lab 1 - A",
    title: "React State, React useState H...",
    xp: 30,
    xpMax: 30,
    date: "April 2, 2026",
    duration: "01:30:00",
  },
  {
    subject: "Maths II - A",
    title: "Expectation of Binomial distrib...",
    xp: 30,
    xpMax: 30,
    date: "April 2, 2026",
    duration: "01:30:00",
  },
  {
    subject: "Maths II Tut 1",
    title: "Multiple disc...",
    xp: 0,
    xpMax: 30,
    date: "April 1, 2026",
    duration: "01:30:00",
  },
];

export default function Lectures() {
  return (
    <section className="w-full">

      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Your lectures</h2>
          <p className="text-xs text-gray-400 mt-1">
            Watch the lectures till you get a good grip on all the topics
          </p>
        </div>
        <button className="text-xs font-semibold text-blue-600 tracking-wide hover:underline mt-1">
          VIEW ALL
        </button>
      </div>

   
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {lectures.map((lec, i) => (
          <div
            key={i}
            className="min-w-[260px] max-w-[270px] flex-shrink-0 flex flex-col gap-2.5"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-[150px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400">
       
              <div className="absolute top-3 left-3">
                <span className="bg-black/70 text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                  {lec.subject}
                </span>
              </div>

     
              <div className="absolute bottom-3 left-3">
                <Play size={16} className="text-white" fill="white" />
              </div>


              <div className="absolute bottom-3 right-3">
                <span className="bg-black/70 text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                  {lec.duration}
                </span>
              </div>
            </div>


            <div>
              <p className="text-sm font-semibold text-gray-900 leading-snug">
                {lec.title}
              </p>


              <div className="flex items-center gap-1.5 mt-1">
                <span className="bg-orange-100 text-orange-500 text-[10px] font-medium px-1.5 py-0.5 rounded">
                  2x
                </span>
                <img
                  className="h-4 w-4"
                  src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/77ba313553d342eaa91e3e9a7ed5649c.svg"
                  alt="xp"
                />
                <span className="text-xs font-medium text-gray-700">
                  {lec.xp}/{lec.xpMax}
                </span>
              </div>

   
              <p className="text-xs text-gray-400 mt-1">
                {lec.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}