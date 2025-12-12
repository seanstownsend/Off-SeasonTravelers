import React, { useEffect } from 'react';

const YellowstoneTemplatePage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <iframe 
        src="/yellowstone-sample.html" 
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          overflow: 'hidden'
        }}
        title="Yellowstone Park Template with Sample Data"
        scrolling="yes"
      />
    </div>
  );
};

export default YellowstoneTemplatePage;