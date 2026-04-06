import Latest from "./Latest";
import Upcoming from "./Upcoming";
import Performance from "./Performance";
import Lectures from "./Lectures";
import Session from "./Session";
import Footer from "./Footer";

export default function Centre() {
  return (
    <main className="w-full min-w-0 bg-[#f8fafc] px-8 py-7 flex flex-col gap-8">
      <Latest />
      <div className="border-t border-gray-200" />
      <Upcoming />
      <div className="border-t border-gray-200" />
      <Performance />
      <div className="border-t border-gray-200" />
      <Lectures />
      <div className="border-t border-gray-200" />
      <Session />
      <div className="border-t border-gray-200" />
      <Footer />
    </main>
  );
}
