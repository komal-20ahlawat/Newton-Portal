import { Users, ChevronRight } from "lucide-react";

export default function Session() {
  return (
    <section className="w-full">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Your Sessions
      </h2>

      <button className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-4 w-[300px] hover:shadow-sm transition-shadow text-left">
        
        
        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
          <Users size={18} className="text-gray-400" />
        </div>

       
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900">
            Group Sessions
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            0
          </p>
        </div>

       
        <ChevronRight size={16} className="text-gray-300 flex-shrink-0" />
      </button>
    </section>
  );
}