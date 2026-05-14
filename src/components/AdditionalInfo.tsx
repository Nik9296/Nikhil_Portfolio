import React from 'react';
import SectionHeading from './SectionHeading';
import { resumeData } from '../data/resume';

const AdditionalInfo: React.FC = () => {
  return (
    <section className="py-24 px-6 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Additional Details" subtitle="Full Resume Context" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {resumeData.extra.map((line, idx) => (
             <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-gray-400 text-sm font-light italic">
                {line}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
