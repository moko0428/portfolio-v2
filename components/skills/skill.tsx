import React from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Skills_Data } from '@/data/skills.data';
import Image from 'next/image';

interface SkillProps {
  setHoveredId: (id: number | null) => void;
  hoveredId: number | null;
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
}

const Skill = ({
  setHoveredId,
  hoveredId,
  selectedId,
  setSelectedId,
}: SkillProps) => {
  return (
    <section>
      <header className="flex flex-col items-center justify-center gap-2 mb-2">
        <h2 className="text-2xl font-bold">SKILL</h2>
        <span>눌러보세요!</span>
      </header>
      <LayoutGroup>
        <motion.div className="w-full max-w-xl grid grid-cols-3 gap-4 p-4">
          {Skills_Data.map((skill) => (
            <motion.div
              key={skill.id}
              layoutId={`skill-${skill.id}`}
              layout
              className={`
                flex flex-col items-center gap-2 p-4 'shadow-lg'
                bg-white rounded-lg ${
                  skill.hot
                    ? 'shadow-[0_0_10px_rgba(172,55,55,0.5)]'
                    : 'shadow-[0_0_10px_rgba(0,0,0,0.1)]'
                }
                cursor-pointer
                ${selectedId === skill.id ? 'col-span-3 row-span-2' : ''}
                min-h-[100px]
                transition-shadow duration-300
                hover:shadow-xl
              `}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedId(selectedId === skill.id ? null : skill.id);
              }}
              onMouseEnter={() => setHoveredId(skill.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="relative"
                layoutId={`image-container-${skill.id}`}
              >
                <Image
                  src={hoveredId === skill.id ? skill.hoverCover : skill.cover}
                  alt={skill.title}
                  width={selectedId === skill.id ? 150 : 100}
                  height={selectedId === skill.id ? 150 : 100}
                  className="relative transition-all duration-300"
                />
                <motion.div
                  className="absolute offset-0 "
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:
                      hoveredId === skill.id || selectedId === skill.id
                        ? 0.3
                        : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ mixBlendMode: 'color' }}
                />
              </motion.div>

              <motion.div
                className="text-sm font-semibold text-center"
                layoutId={`title-${skill.id}`}
              >
                {skill.title}
              </motion.div>

              <AnimatePresence>
                {selectedId === skill.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-700 overflow-y-auto w-full max-h-[150px]"
                  >
                    {skill.description?.map((desc, index) => (
                      <p key={index} className="mb-2">
                        {desc}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>
    </section>
  );
};

export default Skill;
