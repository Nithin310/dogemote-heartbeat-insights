
import { FC } from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const DogBowl: FC<IconProps> = ({ className, size = 24 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M10 15.5V12a3 3 0 0 1 3-3h8.5c.2 0 .5 0 .5.5V15c0 2-1.6 4-4.8 4C14.5 19 13 17.5 13 15.5V15h-3z" />
      <path d="M13 12v-1a2 2 0 0 0-2-2H2.5c-.2 0-.5.3-.5.5V15c0 2 1.6 4 4.8 4C10.5 19 12 17.5 12 15.5V15h1" />
    </svg>
  );
};

export const AlertTriangle: FC<IconProps> = ({ className, size = 24 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
};

export const Paw: FC<IconProps> = ({ className, size = 24 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M19.28 9.08s1.75-1.38 2.57-2.2a2.64 2.64 0 0 0 .36-3.25 2.64 2.64 0 0 0-3.25-.36c-.82.82-2.2 2.57-2.2 2.57" />
      <path d="M7.44 22a3.29 3.29 0 0 1-2.29-4.67L6.7 13.8a2 2 0 0 1 2.69-.76 2 2 0 0 1 .76 2.69l-1.55 3.55a3.29 3.29 0 0 1-1.16 2.72Z" />
      <path d="M13.56 18.92c.98.98 2.2 1.16 3.27.54l3.57-2.08a2 2 0 0 0 .65-2.74 2 2 0 0 0-2.74-.66l-3.57 2.08c-1.07.62-2.17 1.88-1.18 2.86Z" />
      <path d="M15.9 13.24c1.41-.03 2.56-.7 3.2-1.82l2.15-3.71a2 2 0 0 0-.74-2.72 2 2 0 0 0-2.72.73l-2.15 3.72c-.64 1.12-.67 2.59-.06 3.18.17.17.38.29.61.34.1.03.2.04.32.04.13 0 .26-.02.39-.05Z" />
      <path d="M8.1 10.65c.98.98 2.41 1.08 3.26.11.13-.15.24-.31.32-.47 1.32-2.3.1-5.21-2.8-6.07-2.9-.86-5.39.74-4.96 3.66l.55 3.82c.09.64.73 1.12 1.38 1.03.65-.09 1.13-.74 1.03-1.39l-.54-3.77c-.13-.98.36-1.28.8-1.4.44-.11 1.09.09 1.31 1.11.32 1.45-.09 3.28-.94 3.82-.21.14-.83.43-1.31-.05-.37-.38-1.01-.39-1.39-.02-.4.38-.42 1.03-.03 1.42.67.69.67.69 2.32-.8Z" />
    </svg>
  );
};
