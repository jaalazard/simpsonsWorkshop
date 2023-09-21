import "./App.css";
import Avatar from "./components/Avatar";

const simpsons = [
  {
    name: "Homer Simpson",
    image:
      "https://www.pngarts.com/files/11/Homer-Simpson-Cartoon-PNG-Image-Background.png",
    donut: 0,
  },
  {
    name: "Marge Simpson",
    image: "https://www.lessimpson.fr/wp-content/uploads/marge-simpson.webp",
    donut: 0,
  },
  {
    name: "Bart Simpson",
    image: "https://img.favpng.com/15/0/9/bart-simpson-gif-image-desktop-wallpaper-cannabis-png-favpng-eHUMEtrV8nyYLwKeavNrEc3bb.jpg",
    donut: 0,
  },
  {
    name: "Lisa Simpson",
    image:
      "https://i.pinimg.com/originals/4d/63/fb/4d63fbc3629b6c145965922fb575d31e.png",
    donut: 0,
  },
  {
    name: "Maggie Simpson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-D4-DO4xVHA-sqrHycG0KRuQFidrRrdcdCA&usqp=CAU",
    donut: 0,
  },
  {
    name: "Abraham Simpson",
    image:
      "https://www.simpsonspark.com/images/persos/contributions/abraham-simpson-22960.jpg",
    donut: 0,
  },
];

function App() {
  return (
    <>
      <h1>The Simspons</h1>
      <div className="family">
        <Avatar simpsons={simpsons} />
      </div>
    </>
  );
}

export default App;
