import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type TimeUnits = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function calculateExperience(startDate: Date): TimeUnits {
  const now = new Date();
  const diff = now.getTime() - startDate.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  
  return {
    years,
    months,
    days: days % 30,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60
  };
}

export function formatExperience(experience: TimeUnits): string {
  const parts = [];
  
  if (experience.years > 0) {
    parts.push(`${experience.years} ${experience.years === 1 ? 'Year' : 'Years'}`);
  }
  if (experience.months > 0 || parts.length > 0) {
    parts.push(`${experience.months} ${experience.months === 1 ? 'Month' : 'Months'}`);
  }
  
  if (parts.length === 0) {
    parts.push('Less than a month');
  }
  
  return parts.join(' and ');
}

export function formatRealtimeExperience(experience: TimeUnits): string {
  const mainParts = [];
  const timeParts = [];
  
  // Format years and months in text format
  if (experience.years > 0) {
    mainParts.push(`${experience.years} ${experience.years === 1 ? 'Year' : 'Years'}`);
  }
  if (experience.months > 0) {
    mainParts.push(`${experience.months} ${experience.months === 1 ? 'Month' : 'Months'}`);
  }
  
  // Format days, hours, minutes, seconds in short format
  if (experience.days > 0) {
    timeParts.push(`${experience.days}d`);
  }
  if (experience.hours > 0) {
    timeParts.push(`${experience.hours}h`);
  }
  if (experience.minutes > 0) {
    timeParts.push(`${experience.minutes}m`);
  }
  timeParts.push(`${experience.seconds}s`);
  
  // Combine both parts
  const mainText = mainParts.join(', ');
  const timeText = timeParts.join(' ');
  
  if (mainText) {
    return `${mainText} and ${timeText}`;
  }
  
  return timeText;
}

export function calculateTotalExperience(dates: { start: Date; end: Date | null }[]): TimeUnits {
  const now = new Date();
  let totalMilliseconds = 0;

  dates.forEach(({ start, end }) => {
    const endDate = end || now;
    totalMilliseconds += endDate.getTime() - start.getTime();
  });

  const seconds = Math.floor(totalMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  
  return {
    years,
    months,
    days: days % 30,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60
  };
}

export function getFixedExperience(months: number): TimeUnits {
  return {
    years: Math.floor(months / 12),
    months: months % 12,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
} 