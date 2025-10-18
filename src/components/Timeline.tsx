import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SCHEDULE } from "@/lib/data";

interface ScheduleItem {
  date: string;
  description: string;
}

const Timeline = () => {
  return (
    <section className="bg-yellow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="var(--color-blue)"
          fillOpacity="1"
          d="M0,64L1440,224L1440,0L0,0Z"
        ></path>
      </svg>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-blue mb-12 text-center text-3xl sm:text-4xl">
          Cronograma
        </h2>

        <div className="relative">
          {/* Vertical line - left on mobile, center on desktop */}
          <div className="bg-blue absolute top-0 left-4 h-full w-1 md:left-1/2 md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {SCHEDULE.map((item: ScheduleItem, index: number) => {
              const isLeft = index % 2 === 0;
              return (
                <TimelineItem
                  key={item.date}
                  item={item}
                  index={index}
                  isLeft={isLeft}
                />
              );
            })}
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="-mb-1"
      >
        <path
          fill="var(--color-red)"
          fillOpacity="1"
          d="M0,224L0,288L180,288L180,224L360,224L360,224L540,224L540,224L720,224L720,128L900,128L900,224L1080,224L1080,96L1260,96L1260,64L1440,64L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

const TimelineItem = ({
  item,
  index,
  isLeft,
}: {
  item: ScheduleItem;
  index: number;
  isLeft: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const date = new Date(item.date);
  const formattedDate = date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content card - full width on mobile, half on desktop */}
      <motion.div
        className={`w-full pl-6 md:w-5/12 md:pl-0 ${isLeft ? "md:pr-0 md:text-right" : "md:pl-0 md:text-left"}`}
        initial={{
          opacity: 0,
          x: isLeft ? -50 : 50,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
              }
            : {
                opacity: 0,
                x: isLeft ? -50 : 50,
              }
        }
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: "easeOut",
        }}
      >
        <div
          className={`rounded-lg bg-white p-4 shadow-lg sm:p-6 ${isLeft ? "md:-mr-6" : "md:-ml-6"}`}
        >
          <time
            dateTime={item.date}
            className="text-blue mb-2 block text-lg font-bold sm:text-xl"
          >
            {formattedDate}
          </time>
          <p className="text-sm text-gray-700 sm:text-base">
            {item.description}
          </p>
        </div>
      </motion.div>

      {/* Calendar icon - left on mobile, positioned relative to center on desktop */}
      <motion.div
        className="absolute left-1 z-10 md:hidden"
        initial={{ scale: 0, rotate: -180 }}
        animate={
          isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
        }
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.2,
          ease: "backOut",
        }}
      >
        <div className="bg-blue flex h-6 w-6 items-center justify-center rounded-full shadow-md sm:h-8 sm:w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 sm:h-5 sm:w-5"
            aria-label="Calendario"
            role="img"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
      </motion.div>

      {/* Center dot - hidden on mobile, visible on desktop */}
      <motion.div
        className="absolute left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.2,
          ease: "backOut",
        }}
      >
        <div className="bg-yellow h-4 w-4 rounded-full border-4 border-white shadow-md" />
      </motion.div>

      {/* Empty space on the other side - only on desktop */}
      <div className="hidden md:block md:w-5/12" />
    </div>
  );
};

export default Timeline;
