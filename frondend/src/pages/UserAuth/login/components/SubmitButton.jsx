import { useState } from "react";
import { RightArrowSVG } from "../../../../components/Icons/RightArrowSVG";
import { AnimatePresence, animate, motion } from "framer-motion";
export default function SubmitButton({ onClick, isPending }) {
  const [mosueHover, setMouseHover] = useState(false);
  return (
    <button
      className="text-sm w-full bg-NiceGray h-10 rounded-md font-bold flex items-center justify-center gap-1 group"
      onClick={onClick}
      disabled={isPending}
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
      <p>{isPending ? "Loading..." : "Continue with email"}</p>
      <AnimatePresence mode="wait">
        {mosueHover && (
          <motion.div
            className="absolute"
            initial={{ x: "75px", opacity: 0 }}
            animate={{ x: "80px", opacity: 1 }}
            exit={{ x: "75px", opacity: 0 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.5 }}
          >
            <RightArrowSVG fill={"white"}></RightArrowSVG>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
