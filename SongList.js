import React, {Component} from 'react';

function SongList(props) {
    const songsForList = props.songs.map((song) => (
      <Song key={song.id} song={song} />
    ));
    return (
      <div>
        <ul>{songsForList}</ul>
      </div>
    );
  }

export default SongList;