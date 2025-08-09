import React from 'react';

function YoutubeVideo() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1000px',
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        borderRadius: '15px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/11Vh9KcrGP0?autoplay=1&mute=1&controls=0&loop=1&playlist=11Vh9KcrGP0&modestbranding=1&rel=0&showinfo=0"
        title="Custom Autoplay Video"
        frameBorder="0"
        allow="autoplay; fullscreen; encrypted-media"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></iframe>
    </div>
  );
}

export default YoutubeVideo;
