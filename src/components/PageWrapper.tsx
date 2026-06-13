import { motion } from 'motion/react';
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
      className="w-full min-h-[calc(100vh-5rem)] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col"
    >
      {children}
    </motion.div>
  );
};
