import React from 'react';

// Official State Emblem of India (Ashoka Lions + Satyameva Jayate)
export const AshokaEmblemSVG: React.FC<{ className?: string }> = ({ className = "w-10 h-14" }) => (
  <svg viewBox="0 0 100 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="State Emblem of India">
    {/* Ashoka Abacus Base */}
    <rect x="20" y="100" width="60" height="12" rx="2" fill="#1E293B" />
    <path d="M15 112 H85 V116 H15 Z" fill="#0F2540" />
    {/* Ashoka Chakra in Emblem Base */}
    <circle cx="50" cy="106" r="4.5" stroke="#FAF9F6" strokeWidth="1.2" fill="none" />
    <circle cx="50" cy="106" r="1" fill="#FAF9F6" />
    {/* Bull and Horse Accents */}
    <path d="M25 106 Q28 103 32 106" stroke="#FAF9F6" strokeWidth="1.2" />
    <path d="M68 106 Q72 103 75 106" stroke="#FAF9F6" strokeWidth="1.2" />

    {/* Center Lion Head */}
    <path d="M40 30 C38 18, 62 18, 60 30 C65 32, 67 42, 63 50 C65 58, 62 70, 58 80 L42 80 C38 70, 35 58, 37 50 C33 42, 35 32, 40 30 Z" fill="#0F2540" />
    {/* Mane Details */}
    <path d="M43 35 Q50 32 57 35 Q60 45 57 55 Q50 65 43 55 Z" fill="#334155" />
    <path d="M46 38 C48 36, 52 36, 54 38 C56 42, 56 46, 54 48 C52 50, 48 50, 46 48 Z" fill="#1E293B" />
    {/* Crown / Ears */}
    <path d="M38 25 Q42 20 45 26" stroke="#0F2540" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M62 25 Q58 20 55 26" stroke="#0F2540" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Left Lion Profile */}
    <path d="M25 45 C20 40, 24 25, 34 28 C32 35, 30 50, 35 65 L28 78 Q22 60 25 45 Z" fill="#1E293B" />
    {/* Right Lion Profile */}
    <path d="M75 45 C80 40, 76 25, 66 28 C68 35, 70 50, 65 65 L72 78 Q78 60 75 45 Z" fill="#1E293B" />

    {/* Pillar Pedestal Stand */}
    <rect x="35" y="80" width="30" height="20" fill="#334155" />
    <line x1="35" y1="86" x2="65" y2="86" stroke="#475569" strokeWidth="1.5" />
    <line x1="35" y1="94" x2="65" y2="94" stroke="#475569" strokeWidth="1.5" />

    {/* Satyameva Jayate Text in Devanagari */}
    <text x="50" y="130" textAnchor="middle" fill="#0F2540" fontSize="9.5" fontWeight="bold" fontFamily="'Noto Sans Devanagari', sans-serif">
      सत्यमेव जयते
    </text>
  </svg>
);

// I4C (Indian Cybercrime Coordination Centre) Logo SVG
export const I4CLogoSVG: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="I4C Emblem">
    <circle cx="50" cy="50" r="46" fill="#0F2540" />
    {/* Outer Tricolor Ring */}
    <circle cx="50" cy="50" r="43" stroke="#D9480F" strokeWidth="3" />
    <circle cx="50" cy="50" r="40" stroke="#1B5E20" strokeWidth="2.5" />
    {/* Cyber Shield Inner Motif */}
    <path d="M50 16 L76 28 V50 C76 68, 50 82, 50 82 C50 82, 24 68, 24 50 V28 L50 16 Z" fill="#FAF9F6" stroke="#D9480F" strokeWidth="2" />
    {/* Stylized 'i4C' Text inside Shield */}
    <text x="50" y="48" textAnchor="middle" fill="#0F2540" fontSize="22" fontWeight="900" fontFamily="sans-serif">i</text>
    <text x="50" y="68" textAnchor="middle" fill="#D9480F" fontSize="20" fontWeight="900" fontFamily="sans-serif">4C</text>
    {/* Digital nodes background */}
    <circle cx="34" cy="36" r="2.5" fill="#1B5E20" />
    <circle cx="66" cy="36" r="2.5" fill="#1B5E20" />
    <line x1="34" y1="36" x2="43" y2="42" stroke="#1B5E20" strokeWidth="1.5" />
    <line x1="66" y1="36" x2="57" y2="42" stroke="#1B5E20" strokeWidth="1.5" />
  </svg>
);

// High Quality Indian Citizen Illustration performing Namaste with I4C badge matching reference
export const NamasteCitizenSVG: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => (
  <svg viewBox="0 0 380 480" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Indian Citizen Welcome Illustration">
    <defs>
      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5CBA7" />
        <stop offset="100%" stopColor="#E5AA70" />
      </linearGradient>
      <linearGradient id="kurtaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FAF8F5" />
        <stop offset="100%" stopColor="#F0ECE1" />
      </linearGradient>
      <linearGradient id="dupattaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0F2540" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
    </defs>

    <g>
      {/* Hair Back Bun */}
      <path d="M120 140 C110 180, 115 240, 125 260 C130 200, 250 220, 255 260 C265 240, 270 180, 260 140 C250 80, 130 80, 120 140 Z" fill="#1E1E24" />
      <circle cx="190" cy="240" r="38" fill="#1E1E24" />

      {/* Torso / Kurta */}
      <path d="M100 360 L125 240 Q190 225 255 240 L280 360 L300 480 H80 L100 360 Z" fill="url(#kurtaGrad)" stroke="#E2E8F0" strokeWidth="1.5" />

      {/* Dupatta Draped Across Shoulders */}
      <path d="M85 290 C110 250, 140 235, 160 290 C165 330, 150 480, 80 480 Z" fill="url(#dupattaGrad)" />
      <path d="M295 290 C270 250, 240 235, 220 290 C215 330, 230 480, 300 480 Z" fill="url(#dupattaGrad)" />
      <path d="M150 250 Q190 280 230 250 Q215 230 150 250 Z" fill="#0F2540" />

      {/* Neck */}
      <path d="M170 190 L170 235 Q190 245 210 235 L210 190 Z" fill="url(#skinGrad)" />

      {/* Face Base */}
      <path d="M135 130 C135 210, 245 210, 245 130 C245 80, 135 80, 135 130 Z" fill="url(#skinGrad)" />

      {/* Ears */}
      <ellipse cx="132" cy="140" rx="8" ry="12" fill="url(#skinGrad)" />
      <ellipse cx="248" cy="140" rx="8" ry="12" fill="url(#skinGrad)" />
      <circle cx="131" cy="150" r="3" fill="#D97706" />
      <circle cx="249" cy="150" r="3" fill="#D97706" />

      {/* Eyes & Warm Expression */}
      <path d="M152 125 Q165 117 176 125" stroke="#2D3748" strokeWidth="3" strokeLinecap="round" />
      <circle cx="164" cy="130" r="4" fill="#1A202C" />
      <path d="M204 125 Q215 117 228 125" stroke="#2D3748" strokeWidth="3" strokeLinecap="round" />
      <circle cx="216" cy="130" r="4" fill="#1A202C" />

      {/* Eyebrows */}
      <path d="M148 115 Q164 107 178 116" stroke="#1A202C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M202 116 Q216 107 232 115" stroke="#1A202C" strokeWidth="2.5" strokeLinecap="round" />

      {/* Traditional Red Bindi */}
      <circle cx="190" cy="112" r="3" fill="#DC2626" />

      {/* Nose */}
      <path d="M187 132 Q190 148 194 148 Q197 148 196 144" stroke="#D69E2E" strokeWidth="1.5" strokeLinecap="round" />

      {/* Gentle Warm Smile */}
      <path d="M168 162 Q190 180 212 162" stroke="#B91C1C" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Hair Front Styling */}
      <path d="M135 115 C150 90, 185 92, 190 105 C195 92, 230 90, 245 115 C230 80, 150 80, 135 115 Z" fill="#111827" />

      {/* Namaste Hands (Folded Anjali Mudra in center) */}
      <path d="M110 330 Q150 280 175 240" stroke="url(#skinGrad)" strokeWidth="26" strokeLinecap="round" />
      <path d="M270 330 Q230 280 205 240" stroke="url(#skinGrad)" strokeWidth="26" strokeLinecap="round" />
      
      {/* Hands Folded in Prayer */}
      <path d="M174 255 C170 220, 180 200, 190 190 C200 200, 210 220, 206 255 Z" fill="url(#skinGrad)" stroke="#E5AA70" strokeWidth="1" />
      <line x1="182" y1="200" x2="182" y2="240" stroke="#D69E2E" strokeWidth="1" />
      <line x1="190" y1="192" x2="190" y2="245" stroke="#D69E2E" strokeWidth="1" />
      <line x1="198" y1="200" x2="198" y2="240" stroke="#D69E2E" strokeWidth="1" />

      {/* Official I4C Lanyard Badge */}
      <path d="M165 230 L180 310" stroke="#0F2540" strokeWidth="3" />
      <path d="M215 230 L200 310" stroke="#0F2540" strokeWidth="3" strokeDasharray="3 2" />
      <rect x="184" y="308" width="12" height="8" rx="2" fill="#94A3B8" />
      <rect x="168" y="316" width="44" height="50" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
      <rect x="172" y="320" width="36" height="8" fill="#0F2540" />
      <text x="190" y="326" textAnchor="middle" fill="#FFFFFF" fontSize="5" fontWeight="bold">I4C</text>
      <circle cx="190" cy="338" r="7" fill="#FFF7ED" stroke="#D9480F" strokeWidth="1" />
      <text x="190" y="341" textAnchor="middle" fill="#0F2540" fontSize="6" fontWeight="bold">i4C</text>
      <line x1="174" y1="352" x2="206" y2="352" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

// India Gate Watermark SVG with ~4% opacity
export const IndiaGateWatermarkSVG: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 600 700" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.04" stroke="#0F2540" strokeWidth="2" fill="none">
      <rect x="100" y="600" width="400" height="40" rx="4" />
      <rect x="130" y="560" width="340" height="40" />
      <rect x="150" y="240" width="90" height="320" />
      <rect x="360" y="240" width="90" height="320" />
      <path d="M240 560 V380 C240 300, 360 300, 360 380 V560 Z" fill="#0F2540" fillOpacity="0.02" />
      <path d="M240 380 C240 310, 360 310, 360 380" />
      <rect x="120" y="200" width="360" height="40" />
      <line x1="100" y1="200" x2="500" y2="200" strokeWidth="3" />
      <rect x="150" y="120" width="300" height="80" />
      <rect x="220" y="140" width="160" height="40" strokeWidth="1.5" />
      <path d="M250 120 Q300 80 350 120 Z" />
      <line x1="300" y1="80" x2="300" y2="60" strokeWidth="2" />
      <circle cx="300" cy="55" r="4" fill="#0F2540" />
    </g>
  </svg>
);

// Ashoka Chakra Watermark with strictly 3.5% opacity
export const AshokaChakraWatermarkSVG: React.FC<{ className?: string }> = ({ className = "w-96 h-96" }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.035" stroke="#0F2540" strokeWidth="1.8">
      <circle cx="100" cy="100" r="90" />
      <circle cx="100" cy="100" r="82" strokeWidth="1" />
      <circle cx="100" cy="100" r="16" fill="#0F2540" fillOpacity="0.05" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const rad = (angle * Math.PI) / 180;
        const x2 = 100 + 82 * Math.cos(rad);
        const y2 = 100 + 82 * Math.sin(rad);
        return <line key={i} x1="100" y1="100" x2={x2} y2={y2} strokeWidth="1.2" />;
      })}
    </g>
  </svg>
);
