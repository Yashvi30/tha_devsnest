const Meme = ({ meme, setMeme }) => {
  return (
    <div className="meme">
      <img src={meme.url} alt="" />
      <div>
        {[...Array(meme.box_count)].map((el, index) => (
          <input type="text" placeholder={`Enter caption ${index + 1}`} />
        ))}
      </div>
      <div>
        <button>Generate meme</button>
        <button
          onClick={() => {
            setMeme(null);
          }}
        >
          Choose template
        </button>
      </div>
    </div>
  );
};

export default Meme;
