
import React, { useState, useEffect } from 'react';
import DataLoader, { InstagramData, InstagramQuery } from './DataLoader';

type Params = {
  query: InstagramQuery
}

export default function InstagramItem({ query }: Params) {

  const [images, setImages] = useState<InstagramData[]>([]);

  useEffect(() => {
    async function getInstagram() {
      const images = await DataLoader.getInstagram(query);
      setImages(images);
      console.log(images.length)
    }

    getInstagram();
  }, [])

  return (
    <div className="ContentItem oneImage InstagramItemDiv">
      {images.map(item => {
        return <img key={item.uri} src={item.uri} alt={item.alt}></img>
      })}
    </div>
  )
}
