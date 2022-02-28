import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import Video from './components/Video';

const App = () => {
  const [videos, setVideos] = useState<any>([]);
  const [searchError, setSearchError] = useState<string>('');
  const [currentChannelId, setCurrentChannelId] = useState<string>('');

  useEffect(() => {
    (async () => {
      if (currentChannelId) {
        try {
          const data = await fetch(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${currentChannelId}&maxResults=50&key=AIzaSyAbW-TiFBpM1pkdipEW9bR6u95rKeq74TI`
          ).then((response: any) => response.json());

          if (!data.items) throw new Error();
          console.log(data);
          setVideos(data.items);
          setSearchError('');
        } catch (error) {
          setSearchError('Couldnt retrieve videos, check your channel ID.');
        }
      }
    })();
  }, [currentChannelId]);

  useEffect(() => {
    setCurrentChannelId('');
  }, [videos]);

  return (
    <div>
      <h1>Youtube Videos</h1>
      <Search setCurrentChannelId={(id: string) => setCurrentChannelId(id)} />
      <div className="search__errors">{searchError}</div>
      <div className="videos">
        {videos.map((video: any) => (
          <Video key={video.id} video={video.snippet} />
        ))}
      </div>
    </div>
  );
};

export default App;
