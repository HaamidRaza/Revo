import React from 'react';

const StylingAdviceDisplay = ({ advice }) => {
  // Parse the advice text to extract outfits
  const parseAdvice = (text) => {
    // Split by common patterns that indicate new outfits
    const sections = text.split(/\*\*Outfit \d+.*?\*\*|\*\*.*?\*\*/);
    const outfitTitles = text.match(/\*\*Outfit \d+.*?\*\*/g) || text.match(/\*\*.*?\*\*/g) || [];
    
    const outfits = [];
    
    for (let i = 1; i < sections.length; i++) {
      if (sections[i].trim()) {
        outfits.push({
          title: outfitTitles[i - 1]?.replace(/\*\*/g, '').trim() || `Outfit ${i}`,
          description: sections[i].trim()
        });
      }
    }
    
    // If no structured outfits found, try to split by paragraphs
    if (outfits.length === 0) {
      const paragraphs = text.split('\n\n').filter(p => p.trim());
      paragraphs.forEach((paragraph, index) => {
        const lines = paragraph.trim().split('\n');
        if (lines.length > 1) {
          outfits.push({
            title: `Style Suggestion ${index + 1}`,
            description: paragraph.trim()
          });
        } else if (paragraph.length > 50) {
          outfits.push({
            title: `Outfit Idea ${index + 1}`,
            description: paragraph.trim()
          });
        }
      });
    }
    
    return outfits.length > 0 ? outfits : [{ title: "Your Style Advice", description: text }];
  };

  const outfits = parseAdvice(advice);

  return (
    <div className="space-y-6 bg-[#277a68]">
      {outfits.map((outfit, index) => (
        <div 
          key={index}
          className="bg-gradient-to-br from-[#abe4d2] to-[#b2e9ef] rounded-xl p-6 border border-[#b2e9ef] shadow-sm"
        >
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-[#5cbaa2] to-[#40bcd0] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {outfit.title}
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-base">
            {outfit.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StylingAdviceDisplay;