import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { WelcomeHero } from './components/WelcomeHero';
import { Footer } from './components/Footer';
import { AccessibilityModal } from './components/AccessibilityModal';
import { MenuModal } from './components/MenuModal';
import { Page02Placeholder } from './components/Page02Placeholder';

const MainLayout: React.FC = () => {
  const {
    fontScale,
    contrastMode,
    lineHeight,
    letterSpacing,
    focusRing,
    currentPage
  } = useApp();

  // Dynamic CSS class list for accessibility modifiers
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
        {currentPage === 1 ? (
          <WelcomeHero />
        ) : (
          <Page02Placeholder />
        )}
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
