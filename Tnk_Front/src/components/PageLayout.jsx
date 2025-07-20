"use client";
import React, { useEffect } from 'react';

const PageLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
};

export default PageLayout; 