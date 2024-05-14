import React, { forwardRef, ReactNode, useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';

const CvSection = forwardRef<
  HTMLElement,
  {
    title: string;
    children: ReactNode;
    onInView: () => void;
    onViewChange: (inView: boolean) => void;
  }
>(({ children, title, onInView, onViewChange }, ref) => {


  const onChange = (inView: boolean) => {
    if (inView) {
      onInView();
    }
    onViewChange(inView);
  };
  return (
    <InView
      as="div"
      onChange={onChange}
      threshold={0}
      rootMargin="-25% 0px -55% 0px"
    >
      <h3 className="font-sans text-yellow mb-5 mt-16 text-base">{title}</h3>
      <section ref={ref}>{children}</section>
    </InView>
  );
});

export default CvSection;
