import React from 'react';

export const CurlDivider: React.FC = () => {
  return (
    <div className="w-full h-24 relative overflow-hidden">
      <div className="absolute w-[120%] h-24 bg-white transform -translate-x-[10%]" 
        style={{
          borderRadius: '50%/100% 100% 0 0',
        }}
      />
    </div>
  );
};