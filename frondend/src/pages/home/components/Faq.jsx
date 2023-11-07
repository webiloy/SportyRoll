import { AiOutlinePlus } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export function Faq() {
  const Information = [
    {
      question: "How do I get started on Sporty Roll?",
      answer:
        "Sign up, explore workouts, share, track progress, engage with community, check FAQs, stay consistent, and review privacy settings to get started on Sporty Roll, your fitness journey companion.",
    },
    {
      question: "What types of workouts are available on Sporty Roll?",
      answer:
        "You'll find various workout types on Sporty Roll, including strength training, cardio, yoga, HIIT, and more. These options cater to diverse fitness preferences and goals, ensuring a comprehensive selection for all users.",
    },
    {
      question: "Are the workout plans suitable for beginners?",
      answer:
        "Certainly, Sporty Roll provides a range of workout plans specifically designed to accommodate beginners. These plans feature exercises and routines that are easy to follow, gradually increasing in intensity as users progress.",
    },
    {
      question: "Is Sporty Roll free to use?",
      answer:
        "Sporty Roll is completely free to use. We believe that access to fitness and a supportive community should be available to everyone. You can sign up, explore workouts, connect with others, and track your fitness progress without any cost. ",
    },
    {
      question: "Is there a mobile app for Sporty Roll?",
      answer:
        "At this time, Sporty Roll is still in development and does not have a dedicated mobile app. However, you can conveniently access and use Sporty Roll on your mobile device by visiting our website. We've designed the site to be mobile-friendly, allowing you to enjoy all the features and benefits of the platform while on the go. Stay tuned for updates on the release of our mobile app as we continue to enhance the user experience.",
    },
  ];
  const [isOpen, setIsOpen] = useState(-1);
  return (
    <div className="flex flex-col bg-gradient-to-bl from-black to-[#141414] min-h-[450px] py-10 px-2 md:px-10 lg:px-28 max-w-[2000px] m-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-secondary text-center mb-4 lg:hidden">
        FAQ
      </h1>
      <h1 className="hidden lg:block text-secondary font-bold mb-4 text-4xl">
        Frequently Asked Questions
      </h1>
      <ul className="text-secondary-text child:m-5 child:lg:mx-0 child:border-b child:border-[#4d4d4d] child:p-2  child:flex  child:lg:border-none lg:child:bg-[#1f1f1f] lg:text-white child:lg:px-10 child:lg:py-5 child:lg:my-2 child:text-lg child:lg:rounded-sm lg:font-medium">
        <AnimatePresence mode="wait" initial={false}>
          {Information.map((info, index) => {
            const answerIsOpen = index === isOpen;
            return (
              <motion.li
                key={index}
                className="hover:bg-opacity-70 duration-300 ease-in-out cursor-pointer flex flex-col gap-2 overflow-hidden"
                animate={{ height: answerIsOpen ? "200px" : "75px" }}
                exit={{ height: "auto" }}
                transition={{ duration: 0.1 }}
                onClick={() => setIsOpen(index)}
              >
                <div className={`w-full flex justify-between `}>
                  {info.question}
                  <AiOutlinePlus className="text-lg lg:text-xl flex-shrink-0"></AiOutlinePlus>
                </div>
                {answerIsOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-500"
                  >
                    {info.answer}
                  </motion.div>
                )}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
}
