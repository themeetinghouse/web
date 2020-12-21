import React from 'react';
import './PodcastPlayer.scss';

interface Props {
  data?: string;
}

export default function Podcast({ data }: Props) {
  return (
    <div className="PodcastPlayer">
      <iframe
        src={`https://embed.podcasts.apple.com/us/podcast/the-meeting-house/id${data}?itsct=podcast_box&amp;itscg=30200`}
        height="450px"
        frameBorder="0"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        allow="autoplay *; encrypted-media *;"
        style={{
          width: '100%',
          maxWidth: '1000px',
          overflow: 'hidden',
          borderRadius: '10px',
          backgroundColor: 'transparent',
          backgroundPosition: 'initial initial',
          backgroundRepeat: 'initial initial',
        }}
      />
    </div>
  );
}
