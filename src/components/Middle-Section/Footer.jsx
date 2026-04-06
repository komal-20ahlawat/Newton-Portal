import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full pt-8 pb-6">
      <div className="flex items-start justify-between">

        <div>
          <div className="flex  mb-2">
            <div className="w-9 h-9  overflow-hidden">
 <img className="w-6 mt-1" src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/bbe791d38e9a4bc188b07d81691a6372.svg"></img>
</div>
            <div className="leading-tight">
              <p className="text-sm font-medium text-gray-900">Newton School</p>
              <p className="text-sm font-medium text-gray-900">of Technology</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed max-w-[200px]">
            Copyright © 2026 Incanus Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>

    
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-gray-900">Legal</p>
          <div className="w-6 border-t border-gray-200 mb-1" />
          
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Support
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Terms &amp; Conditions
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Privacy Policy
          </a>

          <div className="flex items-center gap-3 mt-2">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}