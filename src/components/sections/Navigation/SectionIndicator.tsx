import { motion } from 'framer-motion';

interface SectionProps {
  currentSection: number;
  totalSections: number;
}

export default function SectionIndicator({ currentSection, totalSections }: SectionProps) {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
      {[...Array(totalSections)].map((_, index) => {
        const isActive = currentSection === index + 1;
        return (
          <motion.div
            key={index}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {isActive ? (
              <span className="font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
            ) : (
              <div className="w-px h-4 bg-gray-300" />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}