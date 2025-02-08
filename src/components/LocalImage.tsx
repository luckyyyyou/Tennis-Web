'use client';

interface LocalImageProps {
  className?: string;
}

export function LocalImage({ className = "w-8 h-8" }: LocalImageProps) {
  return (
    <div className={`bg-gray-200 rounded-full flex items-center justify-center ${className}`}>
      <span className="text-gray-400 text-2xl">🎾</span>
    </div>
  );
} 