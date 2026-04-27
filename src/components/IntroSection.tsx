"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Hello, I’m <br />
        <span className="text-violet-500">Manish Kumar</span>
      </motion.h1>

      <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
        I’m a{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-200">
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              1500,
              "Backend Developer",
              1500,
              "Laravel Specialist",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </span>{" "}
        with over <span className="font-semibold">4+ years of experience</span>{" "}
        building scalable, secure, and high-performance web applications.
      </p>
    </>
  );
}
