import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Skill from './skill';

const Skills = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <motion.div className="flex flex-col items-center w-full bg-white p-10 pb-20 h-full">
      <Skill
        setHoveredId={setHoveredId}
        hoveredId={hoveredId}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </motion.div>
  );
};

export default Skills;
