import { useState, useEffect } from 'react';
import { X, Music } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import AppHeader from './AppHeader';
import PageHeader from './PageHeader';
import Breadcrumbs from './Breadcrumbs';
import { ChevronDownIcon } from './icons';

function AccordionItem({ 
  label, 
  options, 
  value, 
  onChange 
}: { 
  label: string; 
  options: string[]; 
  value: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative shrink-0 w-full sm:w-[240px] md:w-[260px] lg:w-[272px]" data-name="Accordion Item">
      <div 
        className="bg-[rgba(229,221,213,0.2)] box-border content-stretch flex items-center p-[18px] sm:p-[22px] md:p-[24px] lg:p-[25.6px] relative rounded-[12.8px] cursor-pointer hover:bg-[rgba(229,221,213,0.3)] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div aria-hidden="true" className="absolute border-[#e5ddd5] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[12.8px]" />
        <div className="basis-0 content-stretch flex gap-[12.8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Accordion Title">
          <p className="basis-0 font-['Figtree:SemiBold',_sans-serif] font-semibold grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#1e1e1e] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
            {value || label}
          </p>
          <ChevronDownIcon isOpen={isOpen} />
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[12.8px] shadow-lg border border-[#e5ddd5] overflow-hidden z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-[18px] sm:px-[22px] md:px-[24px] lg:px-[25.6px] py-[14px] sm:py-[15px] md:py-[16px] hover:bg-[rgba(231,109,87,0.1)] cursor-pointer font-['Figtree:SemiBold',_sans-serif] font-semibold text-[#1e1e1e] text-[14px] sm:text-[15px] md:text-[16px] transition-colors"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Frame11({ 
  musicalStyle, 
  difficulty,
  onMusicalStyleChange,
  onDifficultyChange
}: { 
  musicalStyle: string;
  difficulty: string;
  onMusicalStyleChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
}) {
  const musicalStyleOptions = ['Classical', 'Jazz', 'Pop', 'Rock', 'Blues', 'Folk'];
  const difficultyOptions = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[24px] sm:gap-[32px] md:gap-[40px] lg:gap-[46px] items-start sm:items-center relative shrink-0 w-full">
      <AccordionItem 
        label="Musical Style" 
        options={musicalStyleOptions}
        value={musicalStyle}
        onChange={onMusicalStyleChange}
      />
      <AccordionItem 
        label="Difficulty" 
        options={difficultyOptions}
        value={difficulty}
        onChange={onDifficultyChange}
      />
    </div>
  );
}

function Frame12({ 
  musicalStyle, 
  difficulty,
  onMusicalStyleChange,
  onDifficultyChange
}: { 
  musicalStyle: string;
  difficulty: string;
  onMusicalStyleChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[60px] items-start relative shrink-0 w-full max-w-[1100px]">
      <Frame11 
        musicalStyle={musicalStyle}
        difficulty={difficulty}
        onMusicalStyleChange={onMusicalStyleChange}
        onDifficultyChange={onDifficultyChange}
      />
    </div>
  );
}

// Import SVG images
import AltoImage from '../assets/alto-instrument.svg';
import TenorImage from '../assets/tenor-instrument.svg';
import BassImage from '../assets/bass-instrument.svg';

// Icon components for each instrument
function AltorIcon() {
  return (
    <img src={AltoImage} alt="Alto instrument visualization" className="w-full h-full object-contain" />
  );
}

function TenorIcon() {
  return (
    <img src={TenorImage} alt="Tenor instrument visualization" className="w-full h-full object-contain" />
  );
}

function BassIcon() {
  return (
    <img src={BassImage} alt="Bass instrument visualization" className="w-full h-full object-contain" />
  );
}

function InstrumentCard({ 
  icon,
  name,
  range,
  description,
  isSelected,
  onClick 
}: { 
  icon: React.ReactNode;
  name: string;
  range: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div 
      className={`bg-gradient-to-b box-border content-stretch flex from-[rgba(231,109,87,0.1)] flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] lg:gap-[22px] items-center p-[24px] sm:p-[32px] md:p-[38px] lg:p-[45px] relative rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[30px] shrink-0 to-[109.2%] to-[rgba(115,115,115,0)] w-full sm:w-[240px] md:w-[280px] lg:w-[320px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${isSelected ? 'ring-4 ring-[#e76d57] shadow-2xl' : ''}`}
      onClick={onClick}
    >
      <div aria-hidden="true" className={`absolute border-[2px] sm:border-[2.5px] md:border-[3px] border-solid inset-0 pointer-events-none rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[30px] transition-colors ${isSelected ? 'border-[#e76d57]' : 'border-[#e5ddd5]'}`} />
      
      <div className="relative shrink-0 w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] md:w-[170px] md:h-[170px] lg:w-[190px] lg:h-[190px] flex items-center justify-center">
        {icon}
      </div>
      
      <p className="font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-black text-center">
        {name}
      </p>
      
      <div className="flex flex-col gap-2 items-center text-center">
        <p className="font-['SF_Pro_Rounded:Regular',_sans-serif] text-[#6B6563] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
          Range: {range}
        </p>
        <p className="font-['SF_Pro_Rounded:Regular',_sans-serif] text-[#6B6563] text-[12px] sm:text-[13px] md:text-[14px] px-4">
          {description}
        </p>
      </div>
    </div>
  );
}

function Frame9({ selectedInstruments, onInstrumentToggle, maxSelection }: { selectedInstruments: string[]; onInstrumentToggle: (name: string) => void; maxSelection: number }) {
  const instruments = [
    { 
      icon: <AltorIcon />, 
      name: 'Altor',
      range: 'C3 to E6',
      description: 'Rich, warm tone perfect for harmonies'
    },
    { 
      icon: <TenorIcon />, 
      name: 'Tenor',
      range: 'C2 to C6',
      description: 'Deep, expressive voice for lower harmonies'
    },
    { 
      icon: <BassIcon />, 
      name: 'Bass',
      range: 'E1 to G4',
      description: 'Foundation with resonant low tones'
    },
  ];

  return (
    <div className="content-start flex flex-col gap-[30px] sm:gap-[35px] md:gap-[40px] items-start relative shrink-0 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] sm:gap-[32px] md:gap-[40px] lg:gap-[48px] items-start relative shrink-0 w-full justify-items-center">
        {instruments.map((instrument, i) => {
          const isSelected = selectedInstruments.includes(instrument.name);
          const canSelect = isSelected || selectedInstruments.length < maxSelection;
          
          return (
            <div key={i} className={`w-full max-w-[320px] ${!canSelect ? 'opacity-40 pointer-events-none' : ''}`}>
              <InstrumentCard 
                icon={instrument.icon}
                name={instrument.name}
                range={instrument.range}
                description={instrument.description}
                isSelected={isSelected}
                onClick={() => canSelect && onInstrumentToggle(instrument.name)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Frame13({ 
  musicalStyle, 
  difficulty,
  selectedInstruments,
  onMusicalStyleChange,
  onDifficultyChange,
  onInstrumentToggle,
  onGenerate
}: { 
  musicalStyle: string;
  difficulty: string;
  selectedInstruments: string[];
  onMusicalStyleChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
  onInstrumentToggle: (name: string) => void;
  onGenerate: () => void;
}) {
  const canContinue = musicalStyle && difficulty && selectedInstruments.length > 0;
  
  return (
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[60px] items-start w-full">
      <Frame12 
        musicalStyle={musicalStyle}
        difficulty={difficulty}
        onMusicalStyleChange={onMusicalStyleChange}
        onDifficultyChange={onDifficultyChange}
      />
      <Frame9 selectedInstruments={selectedInstruments} onInstrumentToggle={onInstrumentToggle} maxSelection={4} />
      <Button
        onClick={onGenerate}
        className="self-center min-w-[200px] h-12 text-base bg-gradient-to-r from-[#201315] to-[#e76d57] hover:opacity-90"
        disabled={!canContinue}
      >
        Continue
      </Button>
    </div>
  );
}

function ToastNotification({ count, maxSelection, onDismiss }: { count: number; maxSelection: number; onDismiss: () => void }) {
  return (
    <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-2xl border-2 border-[#e5ddd5] p-6 flex items-center gap-4 animate-in slide-in-from-bottom-4 z-50">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-[#e76d57]" />
        <p className="font-['Figtree:SemiBold',_sans-serif] text-[#201315] text-[16px]">
          {count} of {maxSelection} instruments selected
        </p>
      </div>
      <button
        onClick={onDismiss}
        className="ml-2 p-1 hover:bg-[#f8f3eb] rounded-lg transition-colors"
        aria-label="Dismiss notification"
      >
        <X size={20} className="text-[#813D31]" />
      </button>
    </div>
  );
}

export default function InstrumentSelectionScreen({ onGenerate }: { onGenerate: (data: { instruments: string[]; style: string; difficulty: string }) => void }) {
  const [musicalStyle, setMusicalStyle] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [selectedInstruments, setSelectedInstruments] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (selectedInstruments.length > 0 && selectedInstruments.length <= 4) {
      setShowToast(true);
    } else {
      setShowToast(false);
    }
  }, [selectedInstruments]);

  const handleInstrumentToggle = (name: string) => {
    setSelectedInstruments(prev => 
      prev.includes(name) 
        ? prev.filter(i => i !== name)
        : prev.length < 4 ? [...prev, name] : prev
    );
  };

  const handleGenerate = () => {
    if (selectedInstruments.length > 0 && musicalStyle && difficulty) {
      onGenerate({
        instruments: selectedInstruments,
        style: musicalStyle,
        difficulty: difficulty
      });
    }
  };

  return (
    <div className="bg-[#f8f3eb] relative w-full h-screen overflow-hidden flex flex-col">
      <AppHeader
        currentStep={0}
        totalSteps={3}
      />
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4">
          <Breadcrumbs
            steps={["Select Instruments", "Processing", "Results"]}
            currentStep={0}
          />
          <PageHeader
            title="Choose your instruments, style and difficulty"
            subtitle="Select up to 4 instruments and customize your musical preferences"
          />
          <Frame13 
            musicalStyle={musicalStyle}
            difficulty={difficulty}
            selectedInstruments={selectedInstruments}
            onMusicalStyleChange={setMusicalStyle}
            onDifficultyChange={setDifficulty}
            onInstrumentToggle={handleInstrumentToggle}
            onGenerate={handleGenerate}
          />
        </div>
      </div>
      {showToast && (
        <ToastNotification 
          count={selectedInstruments.length} 
          maxSelection={4}
          onDismiss={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
