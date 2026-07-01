import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function EngineerOnboardingFooter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the footer once the user scrolls down more than 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-4 py-4 sm:px-6 md:px-8 shadow-md z-50 transition-all duration-300 ease-in-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Side: Back Button */}
        <div className="w-full sm:w-auto flex justify-start order-2 sm:order-1">
          <Button
            className="w-full sm:w-auto px-5 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
            onClick={() => console.log("Back clicked")}
          >
            Back
          </Button>
        </div>

        {/* Right Side: Skip and Submit Action Group */}
        <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-6 order-1 sm:order-2">
          <Button
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:underline cursor-pointer"
            onClick={() => console.log("Skip clicked")}
          >
            Skip for now
          </Button>

          <Button
            className="w-full sm:w-auto px-6 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
            onClick={() => console.log("Submit clicked")}
          >
            Submit
          </Button>
        </div>
      </div>
    </footer>
  );
}