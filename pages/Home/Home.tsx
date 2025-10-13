"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTiktok,
  FaTelegram,
} from "react-icons/fa";
import { ICON_MAP, PROFILE_DATA } from "@/constants";

export default function LinktreePage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/40 py-8 sm:py-12 px-4 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-cyan-100/20 via-transparent to-transparent" />

        {/* Single Soft Orb */}
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/10 via-cyan-200/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Container */}
      <motion.div
        className="max-w-2xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Card */}
        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 shadow-xl border border-white/60">
          {/* Top Accent */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Profile Section */}
            <motion.div
              className="flex flex-col items-center mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {/* Avatar */}
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Subtle Glow */}
                <div className="absolute inset-[-20px] rounded-full bg-blue-400/15 blur-xl" />

                {/* Avatar Image */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-xl bg-white ring-2 ring-blue-100/50">
                  <img
                    src={PROFILE_DATA.avatar}
                    alt={PROFILE_DATA.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                className="text-center space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 bg-clip-text text-transparent leading-tight px-4">
                  {PROFILE_DATA.name}
                </h1>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-semibold text-blue-700">
                    Medical Group
                  </span>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-center max-w-lg mx-auto text-base leading-relaxed px-6 mt-4">
                  {PROFILE_DATA.bio}
                </p>
              </motion.div>
            </motion.div>

            {/* Links */}
            <motion.div
              className="space-y-3 mb-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {PROFILE_DATA.links.map((link) => {
                const IconComponent = link.icon ? ICON_MAP[link.icon] : null;

                return (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="block group"
                  >
                    <div className="relative bg-white border-2 border-blue-100/70 rounded-2xl p-5 shadow-md hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        {IconComponent && (
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                            <IconComponent className="text-white text-xl" />
                          </div>
                        )}

                        {/* Title */}
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-gray-800 text-lg block">
                            {link.title}
                          </span>
                        </div>

                        {/* Arrow */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors duration-300">
                          <svg
                            className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center items-center gap-3 mb-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {PROFILE_DATA.socialLinks.map((social, index) => {
                const IconComponent = social.icon;

                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative group"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                      <IconComponent className="text-2xl text-blue-600 group-hover:text-cyan-500 transition-colors duration-300" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Footer */}
            <motion.div
              className="text-center pt-8 border-t border-gray-200/60 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p className="text-sm text-gray-600 font-medium">
                © {new Date().getFullYear()} {PROFILE_DATA.name}
              </p>
              <p className="text-xs text-blue-600 font-semibold">
                Your Beauty & Wellness Journey
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
