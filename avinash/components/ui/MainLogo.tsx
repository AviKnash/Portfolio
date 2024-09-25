import React from 'react';
// import Logo from '/app.svg';

const MainLogo = () => {
  return (
    <div className="fixed top-[1rem] left-2 z-50">
      <img src={'/logo.svg'} draggable="false" alt="Logo" className="h-40 w-auto"/>
    </div>
  );
};

export default MainLogo;
