import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechStackModal = ({ open, onClose, techName, techUrl, techIcon: Icon, techDescription, techColor }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  const handleLearnMore = () => {
    window.open(techUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-slate-900/70 border border-purple-500/30 rounded-xl p-8 max-w-sm w-full text-center relative"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center mb-4">
              {Icon && <Icon className={`text-5xl mb-2 ${techColor || 'text-purple-400'}`} />}
              <h3 className="text-2xl font-bold text-purple-400 mb-2">{techName}</h3>
            </div>
            <p className="text-white/80 mb-8 min-h-[60px]">{techDescription}</p>
            <div className="flex flex-col gap-4">
              <button
                className="px-6 py-2 rounded-lg border border-purple-500/30 bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-all"
                onClick={handleLearnMore}
              >
                Learn more about {techName}
              </button>
              <button
                className="px-6 py-2 rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TechStackModal; 