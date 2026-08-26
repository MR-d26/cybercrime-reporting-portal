import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { WelcomeHero } from './components/WelcomeHero';
import { Page02TellUs } from './components/Page02TellUs';
import { Page03FindPath } from './components/Page03FindPath';
import { Page04ReviewInfo } from './components/Page04ReviewInfo';
import { Page05AddDetails } from './components/Page05AddDetails';
import { Page06AddEvidence } from './components/Page06AddEvidence';
import { Page07ReviewSubmit } from './components/Page07ReviewSubmit';
import { Page08Placeholder } from './components/Page08Placeholder';
import { Footer } from './components/Footer';
import { AccessibilityModal } from './components/AccessibilityModal';
import { MenuModal } from './components/MenuModal';

const MainLayout: React.FC = () => {
  const {
    fontScale,
    contrastMode,
    lineHeight,
    letterSpacing,
    focusRing,
    currentPage
  } = useApp();

  const getAccessibilityClasses = () => {
    const classes = [];
    if (fontScale === 'sm') classes.push('font-scale-sm');
    if (fontScale === 'lg') classes.push('font-scale-lg');
    if (fontScale === 'xl') classes.push('font-scale-xl');

    if (lineHeight === 'relaxed') classes.push('line-height-relaxed');
    if (lineHeight === 'loose') classes.push('line-height-loose');

    if (letterSpacing === 'wide') classes.push('letter-spacing-wide');

    if (contrastMode === 'high-light') classes.push('contrast-high');
    if (contrastMode === 'high-dark') classes.push('contrast-dark');

    if (focusRing) classes.push('focus-highlight');

    return classes.join(' ');
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#FAF9F6] text-[#1E293B] ${getAccessibilityClasses()}`}>
      {/* Government Portal Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1 flex flex-col">
        {currentPage === 1 && <WelcomeHero />}
        {currentPage === 2 && <Page02TellUs />}
        {currentPage === 3 && <Page03FindPath />}
        {currentPage === 4 && <Page04ReviewInfo />}
        {currentPage === 5 && <Page05AddDetails />}
        {currentPage === 6 && <Page06AddEvidence />}
        {currentPage === 7 && <Page07ReviewSubmit />}
        {currentPage >= 8 && <Page08Placeholder />}
      </main>

      {/* Government Portal Footer */}
      <Footer />

      {/* Interactive Modals */}
      <AccessibilityModal />
      <MenuModal />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;
