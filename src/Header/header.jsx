import photo from "./images/photo.jpg";

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      <img 
        src={photo}
        alt="My photo"
        width="300"
      />
    </div>
  );
}

export default App;