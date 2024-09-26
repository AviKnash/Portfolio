import Image from 'next/image';
import React from 'react';

const MainLogo = () => {
  return (
    <div className="fixed top-[1rem] left-2 z-50">
      <Image height={2} width={2} priority  src={'/logo.svg'} draggable="false" alt="Logo" className="h-40 w-auto"/>
    </div>
  );
};

export default MainLogo;
