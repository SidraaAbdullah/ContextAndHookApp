import React,{useState} from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>SongName:</label>
      <input
        type="text"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add Song</button>
    </form>
  );
};

export default NewSongForm;
