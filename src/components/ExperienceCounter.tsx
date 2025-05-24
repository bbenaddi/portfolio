import { useEffect, useState } from 'react';
import { 
  calculateExperience, 
  formatExperience, 
  formatRealtimeExperience,
  calculateTotalExperience, 
  getFixedExperience 
} from '@/lib/utils';

interface ExperienceCounterProps {
  startDate: Date;
  endDate?: Date | null;
  showTotal?: boolean;
  fixedMonths?: number;
  showRealtime?: boolean;
}

export function ExperienceCounter({ 
  startDate, 
  endDate, 
  showTotal = false,
  fixedMonths,
  showRealtime = false
}: ExperienceCounterProps) {
  const [experience, setExperience] = useState('');

  useEffect(() => {
    const updateExperience = () => {
      if (fixedMonths !== undefined) {
        const exp = getFixedExperience(fixedMonths);
        setExperience(formatExperience(exp));
      } else if (showTotal) {
        const totalExp = calculateTotalExperience([
          { start: new Date('2022-03-01'), end: null }, // Munvo
          { start: new Date('2021-03-01'), end: new Date('2022-02-28') }, // S2M Total (11 months)
        ]);
        setExperience(showRealtime ? formatRealtimeExperience(totalExp) : formatExperience(totalExp));
      } else {
        const exp = calculateExperience(startDate);
        setExperience(formatExperience(exp));
      }
    };

    updateExperience();
    const interval = setInterval(updateExperience, showRealtime ? 1000 : 60000);

    return () => clearInterval(interval);
  }, [startDate, endDate, showTotal, fixedMonths, showRealtime]);

  return (
    <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded-md">
      {experience}
    </span>
  );
} 