// @flow
import React from 'react';
type Props = {
  video: {
    resourceId: any;
    thumbnails: any;
    title: string;
  };
};

const Video = ({ video }: Props) => {
  const { title, resourceId } = video;

  return (
    <div>
      <div>
        <iframe
          id="player"
          width="320"
          height="180"
          src={`http://www.youtube.com/embed/${resourceId.videoId}`}
          frameBorder="0"
        ></iframe>
      </div>
      <div className="video__footer">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Video;
