import React, { useState } from 'react';
import { playClickSound } from '../utils/sound';

interface SettingsMenuProps {
  onExport: () => void;
  onImport: () => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ onExport, onImport }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    playClickSound();
    setIsOpen(!isOpen);
  };
  
  const handleExportClick = () => {
    playClickSound();
    onExport();
    setIsOpen(false);
  };

  const handleImportClick = () => {
    // Sound is played in App.tsx when file dialog opens
    onImport();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
        style={{ 
            backgroundColor: 'var(--card-bg)', 
            borderColor: 'var(--card-border)'
        }}
        aria-label="Open settings"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={{ color: 'var(--text-secondary)' }} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.96.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div 
            className="absolute right-0 mt-2 w-56 p-2 glass-card z-50 origin-top-right animate-in fade-in-0 zoom-in-95"
            onMouseLeave={() => setIsOpen(false)}
        >
          <div className="space-y-1">
            <button
              onClick={handleExportClick}
              className="w-full text-left px-3 py-2 text-sm rounded-lg flex items-center gap-3 transition-colors hover:bg-[var(--card-hover-bg)]"
              style={{ color: 'var(--text-primary)'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" /><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" fillRule="evenodd" /><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0V9H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L9 4.414V17a1 1 0 102 0V4.414l5.293 5.293a1 1 0 001.414-1.414l-7-7z" /><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" /><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm1 4a1 1 0 112 0v4h8V6a1 1 0 112 0v4a2 2 0 01-2 2H7a2 2 0 01-2-2V6z" clipRule="evenodd" /><path d="M4 16h12V4H4v12zm1-7h10v5H5V9zm10-3H5v2h10V6z" /><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6zm2 4a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z" clipRule="evenodd" /><path d="M9.707 6.293a1 1 0 00-1.414 0L6 8.586V13a1 1 0 102 0V9.414l1.293-1.293a1 1 0 000-1.414z" /><path d="M13.707 9.293a1 1 0 00-1.414 0L10 11.586V16a1 1 0 102 0v-5.414l1.293-1.293a1 1 0 000-1.414z" /><path d="M11 2a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1H9a1 1 0 110-2h1V3a1 1 0 011-1z" /><path d="M3 11a1 1 0 100-2H2a1 1 0 100 2h1zm3-6a1 1 0 011-1h4a1 1 0 110 2H7a1 1 0 01-1-1zm1 10a1 1 0 100-2H6a1 1 0 100 2h1zm1-5a1 1 0 112 0v2a1 1 0 11-2 0v-2zM9 4a1 1 0 112 0v2a1 1 0 11-2 0V4zm5 3a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" /><path d="M9 12a3 3 0 100-6 3 3 0 000 6z" /><path d="M13 10a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M9.707 7.707a1 1 0 00-1.414 0l-2 2a1 1 0 001.414 1.414L9 10.414l.293-.293a1 1 0 000-1.414z" /><path d="M13 5a1 1 0 00-1-1H4a1 1 0 000 2h8a1 1 0 001-1z" /><path d="M13 9a1 1 0 00-1-1H4a1 1 0 000 2h8a1 1 0 001-1z" /><path d="M13 13a1 1 0 00-1-1H4a1 1 0 000 2h8a1 1 0 001-1z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm.01 4a1 1 0 100-2 1 1 0 000 2z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8a1 1 0 11-2 0 1 1 0 012 0zm2 0a1 1 0 11-2 0 1 1 0 012 0zm-2 2a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v2a1 1 0 102 0V5zm-4 4a1 1 0 100 2h8a1 1 0 100-2H7z" clipRule="evenodd" /><path d="M10 2a1 1 0 01.993.883L11 3v1.054a4.006 4.006 0 011.644.693l.83-.83a1 1 0 111.414 1.414l-.83.83a4.006 4.006 0 01.693 1.644H17a1 1 0 110 2h-1.054a4.006 4.006 0 01-.693 1.644l.83.83a1 1 0 11-1.414 1.414l-.83-.83a4.006 4.006 0 01-1.644.693V17a1 1 0 11-2 0v-1.054a4.006 4.006 0 01-1.644-.693l-.83.83a1 1 0 11-1.414-1.414l.83-.83a4.006 4.006 0 01-.693-1.644H3a1 1 0 110-2h1.054a4.006 4.006 0 01.693-1.644l-.83-.83a1 1 0 011.414-1.414l.83.83A4.006 4.006 0 019 4.054V3a1 1 0 011-1zm0 4a3 3 0 100 6 3 3 0 000-6z" clipRule="evenodd" /><path d="M11 14.062V12h2a1 1 0 00-1.79-1.854l1.79 1.854z" /><path d="M12 11h-1v2.062A8.003 8.003 0 014.188 15H4a1 1 0 110-2h.062A8.005 8.005 0 0111 5.188V4a1 1 0 112 0v.062A8.005 8.005 0 0118.812 11H19a1 1 0 110 2h-.062A8.003 8.003 0 0112 18.812V19a1 1 0 11-2 0v-.062A8.005 8.005 0 014.188 12H5a1 1 0 100-2h-.812A8.003 8.003 0 0111 4.188V5a1 1 0 102 0v-.812A8.003 8.003 0 0115.812 12h-2.018a3.001 3.001 0 00-3.64 2.822l-1.018-.982A6.002 6.002 0 0012 6.444V6a1 1 0 00-1-1h-.5a1 1 0 00-.5 1.5l1 1A3.001 3.001 0 0011 11.018V11a1 1 0 102 0v-.206a6.002 6.002 0 00-5.455-5.31l-.982 1.018A3.001 3.001 0 007.794 11H6a1 1 0 100 2h.444a6.002 6.002 0 005.31 5.455l1.018-.982A3.001 3.001 0 0011 14.206V14a1 1 0 100 2h.5a1 1 0 00.5-1.5l-1-1A3.001 3.001 0 0012.804 11H13a1 1 0 110-2h-.206a6.002 6.002 0 00-5.31-5.455l.982-1.018A3.001 3.001 0 0011 7.794V8a1 1 0 11-2 0v-.444a6.002 6.002 0 00-5.455-5.31l-1.018.982A3.001 3.001 0 005.794 6H6a1 1 0 110-2h-.444a6.002 6.002 0 00-5.31 5.455l1.018.982A3.001 3.001 0 004 11.206V12a1 1 0 112 0v.444a6.002 6.002 0 005.455 5.31l.982-1.018A3.001 3.001 0 0011 14.206V14a1 1 0 112 0v.5a1 1 0 01-1.5.866l-1-1A3.001 3.001 0 0111 11.196v.01z" /><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /><path d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zM4.93 5.93a1 1 0 011.414-1.414l.707.707a1 1 0 01-1.414 1.414l-.707-.707zM2 11a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm12.07-5.07a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM17 11a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-2.93 4.07a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM10 17a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1-1zm-5.07-2.93a1 1 0 01-1.414-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707z" /><path fillRule="evenodd" d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm-5.96 4.93a1 1 0 011.414-1.414l.707.707a1 1 0 01-1.414 1.414l-.707-.707zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm14 0a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM14.96 4.93a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM10 16a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1-1zm4.93-4.04a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM4.04 11.96a1 1 0 01-1.414-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707z" clipRule="evenodd" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" /><path d="M10 2C4.477 2 0 6.477 0 12s4.477 10 10 10 10-4.477 10-10S15.523 2 10 2zM8 7a2 2 0 110 4 2 2 0 010-4zm4 0a2 2 0 110 4 2 2 0 010-4z" /><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.95a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM3 11a1 1 0 100-2H2a1 1 0 100 2h1z" clipRule="evenodd" />Export Backup
            </button>
            <button
              onClick={handleImportClick}
              className="w-full text-left px-3 py-2 text-sm rounded-lg flex items-center gap-3 transition-colors hover:bg-[var(--card-hover-bg)]"
              style={{ color: 'var(--text-primary)'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm4 6a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" /><path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a3 3 0 100 6 3 3 0 000-6z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm10.707 5.707a1 1 0 00-1.414-1.414L11 10.586V8a1 1 0 10-2 0v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3z" clipRule="evenodd" />Import Backup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;
