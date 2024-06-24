// src/MermaidDiagram.js

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default', // You can change the theme if you want
});

const MermaidDiagram = ({ chart }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      mermaid.contentLoaded();
    }
  }, [chart]);

  return <div ref={chartRef} className="mermaid">{chart}</div>;
};

export default MermaidDiagram;
