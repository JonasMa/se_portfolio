import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { MenuItem } from '../components/menu';

interface UseBufferedVisibility {
  (): [
    MenuItem | undefined,
    (input: MenuItem) => void,
    (input: MenuItem) => void,
  ];
}

// Knows which sections are in view and decides which is probably more important
export const useFocusedSection: UseBufferedVisibility = () => {
  const [focusedSection, setFocusedSection] = useState<MenuItem>();
  const [visibleSections, setVisibleSections] = useState<MenuItem[]>([]);

  const addSection = (section: MenuItem) => {
    setVisibleSections([...visibleSections, section]);
  };

  const removeSection = (section: MenuItem) => {
    setVisibleSections(visibleSections.filter((s) => s !== section));
  };

  useEffect(() => {
    if (visibleSections.length === 0) return;
    // This is a hack to have 'about' selected when in doubt
    const bestVisibility = visibleSections.sort()[0];
    setFocusedSection(bestVisibility);
  }, [visibleSections]);

  return [focusedSection, addSection, removeSection];
};
