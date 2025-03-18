import { INTROTEXT } from '@/src/constants/intro';
import React from 'react';

const IntroText = () => {
  const renderHighlightedText = (text: string, highlights: string[]) => {
    if (highlights.length === 0) return text;

    const parts = [];
    let lastIndex = 0;

    highlights.forEach((highlight) => {
      const index = text.indexOf(highlight, lastIndex);
      if (index !== -1) {
        if (index > lastIndex) {
          parts.push(text.slice(lastIndex, index));
        }
        parts.push(
          <span
            key={index}
            className="font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          >
            {highlight}
          </span>
        );
        lastIndex = index + highlight.length;
      }
    });

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  return (
    <div className="flex flex-col justify-center items-center *:text-2xl gap-4 mt-32">
      {INTROTEXT.map((item, index) => (
        <div key={index}>
          {renderHighlightedText(item.text, item.highlights)}
        </div>
      ))}
    </div>
  );
};

export default IntroText;
