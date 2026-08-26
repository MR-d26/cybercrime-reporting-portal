import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Globe, BookmarkCheck, Headphones } from 'lucide-react';

export const ReassuranceCards: React.FC = () => {
  const { t } = useApp();

  const cards = [
    {
      icon: ShieldCheck,
      iconBg: 'bg-[#FFF7ED] text-[#9A3412]',
      title: t.reassurance1Title,
      desc: t.reassurance1Desc
    },
    {
      icon: Globe,
      iconBg: 'bg-[#E8F5E9] text-[#1B5E20]',
      title: t.reassurance2Title,
      desc: t.reassurance2Desc
    },
    {
      icon: BookmarkCheck,
      iconBg: 'bg-[#E0F2FE] text-[#0369A1]',
      title: t.reassurance3Title,
      desc: t.reassurance3Desc
    },
    {
      icon: Headphones,
      iconBg: 'bg-[#FFEDD5] text-[#C2410C]',
      title: t.reassurance4Title,
      desc: t.reassurance4Desc
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-gov p-4 md:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
      {cards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <div
            key={index}
            className={`flex items-start gap-3.5 ${
              index > 0 ? 'pt-3.5 sm:pt-0 sm:pl-4 lg:pl-5' : ''
            }`}
          >
            <div className={`p-2.5 rounded-full shrink-0 ${card.iconBg}`}>
              <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="space-y-0.5 text-left">
              <h3 className="text-sm md:text-[15px] font-bold text-gov-navy leading-snug">
                {card.title}
              </h3>
              <p className="text-xs md:text-[13px] text-gray-600 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
