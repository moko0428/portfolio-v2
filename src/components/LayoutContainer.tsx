import React from 'react';

const LayoutContainer = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <section
      id={id}
      className="flex flex-col w-full h-screen  bg-gray-100/50 py-12 px-4 items-center"
    >
      {children}
    </section>
  );
};

export default LayoutContainer;
