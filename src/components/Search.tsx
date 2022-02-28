import React, { useState } from 'react';
type Props = {
  setCurrentChannelId: any;
};

const Search = ({ setCurrentChannelId }: Props) => {
  const [channelId, setChannelId] = useState<string>('');

  const getChannel = (event: any) => {
    const {
      target: { value }
    } = event;

    setChannelId(value as string);
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          onChange={(event) => getChannel(event)}
          placeholder="Enter your favourite playlist ID"
        />
        <button disabled={!channelId.length} onClick={() => setCurrentChannelId(channelId)}>
          Get videos
        </button>
      </div>
    </div>
  );
};

export default Search;
