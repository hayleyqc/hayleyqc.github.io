import React from 'react';

const Vimeo = ({ id }) => {
  if (!id) return null;
  
  return (
    <div className="my-6 w-full flex justify-center">
      <div style={{ 
        position: 'relative',
        width: '100%',
        maxWidth: '800px', // Adjust max width as needed
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden'
      }}>
        <iframe
          src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={`Vimeo video ${id}`}
        />
      </div>
    </div>
  );
};

export default Vimeo;