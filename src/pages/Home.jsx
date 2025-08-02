'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col justify-center items-center px-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-bold text-center mb-4 text-green-500"
      >
        👁‍🗨 0xGorkha
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center text-lg sm:text-xl text-green-300 mb-6"
      >
        Underground. Untraceable. Unstoppable.
      </motion.p>

      {/* Terminal-style box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="w-full max-w-2xl bg-[#0f0f0f] border border-green-700 rounded-lg p-6 shadow-lg"
      >
        <p className="mb-2">
          <span className="text-green-500">$</span> Initializing secure shell...
        </p>
        <p className="mb-2">
          <span className="text-green-500">$</span> Verifying agents...
        </p>
        <p className="mb-2">
          <span className="text-green-500">$</span> Access granted.
        </p>
        <p className="mt-4 text-green-300">📡 Welcome to 0xGorkha OS.</p>
      </motion.div>

      {/* Navigation */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm sm:text-base">
        {['Missions', 'Agents', 'Logs', 'Dark Web', 'About'].map((item, idx) => (
          <button
            key={idx}
            className="border border-green-500 px-4 py-2 rounded hover:bg-green-600 hover:text-black transition duration-200"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-12 text-green-600 text-sm opacity-60">© 2025 ShadowZero. Operate silently.</p>
    </div>
  );
}
