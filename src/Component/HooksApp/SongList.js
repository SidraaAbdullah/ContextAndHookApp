import { useState,useEffect } from "react";
import uuid from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost Home", id: "1" },
    { title: "Almost Home", id: "2" },
    { title: "Almost Home", id: "13" },
    { title: "Almost Home", id: "15" },
  ]);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  useEffect(() => {
    console.log("UseEffect Ran", songs);
  }, [songs]);
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}> {song.title} </li>;
        })}
        <NewSongForm addSong={addSong} />
      </ul>
    </div>
  );
};

export default SongList;
