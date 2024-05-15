import React, { forwardRef, ReactNode, useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';

const CvSection = forwardRef<
  HTMLElement,
  {
    title: string;
    children: ReactNode;
    onViewChange: (inView: boolean) => void;
  }
>(({ children, title, onViewChange }, ref) => {
  return (
    <InView
      as="div"
      onChange={(inView) => onViewChange(inView)}
      threshold={0}
      rootMargin="-25% 0px -55% 0px"
    >
      <h3 className="font-sans text-yellow mb-5 mt-16 text-base">{title}</h3>
      <section ref={ref}>{children}</section>
    </InView>
  );
});

export default CvSection;
