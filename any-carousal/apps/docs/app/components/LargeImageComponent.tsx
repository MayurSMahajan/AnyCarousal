import React from "react";

type LargeImageComponentProps = {
  imageUrl: string;
  credit?: any;
}

export const LargeImageComponent = ({ imageUrl, credit }: LargeImageComponentProps) => {
  return (<div
    style={{
      width: 'clamp(270px, 80vw, 1150px)',
      aspectRatio: '16/9',
      background: '#444',
      borderRadius: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <img style={{
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    }} src={imageUrl} alt="large-image" />
    <p
      style={{
        position: 'absolute',
        bottom: '5%',
        background: 'rgba(0,0,0,0.6)',
        color: 'white',
        padding: '0.5rem',
        borderRadius: '0.5rem',
        fontSize: '0.85rem',
      }}
      dangerouslySetInnerHTML={{ __html: credit }}
    ></p>
  </div>);
}