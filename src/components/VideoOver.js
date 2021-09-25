import React, { useState, useEffect } from 'react';

const VideoOver = () => {
  const [quote, setQuote] = useState(null);
  return (
    <div>
      <div className="w-screen h-12 font-sans flex items-center text-xl font-medium bg-secondary-darkgray text-primary">
        <p className="ml-10">Full Stack Web Developer Courses</p>
      </div>
    </div>
  );
};

export default VideoOver;
