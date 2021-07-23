const Templates = ({ templates, setMeme }) => {
  return (
    <div className="templates">
      {templates.map((template) => (
        <div
          key={template.id}
          className="template"
          onClick={() => {
            setMeme(template.id);
          }}
        >
          <div
            style={{ backgroundImage: `url(${template.url})` }}
            className="image"
          ></div>
          <p>{template.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Templates;
