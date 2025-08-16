"use client";

import { useState, useEffect } from "react";
import { IconArrowUp } from "@tabler/icons-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 2000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 rounded-full transition duration-300 bg-[#2c5530] text-white p-2"
        >
          <IconArrowUp />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
