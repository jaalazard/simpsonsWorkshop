import './App.css'
import Avatar from './components/Avatar'

const bart = {
    image: "https://www.123-stickers.com/2104/bart-simpsons-fesses.jpg",
    firstname: "Bart",
    lastname: "Simpson",
  };

const homer = {
    image: "https://e7.pngegg.com/pngimages/580/272/png-clipart-homer-simpson-illustration-homer-simpson-bart-simpson-s-guide-to-life-marge-simpson-bart-simpson.png",
    firstname: "Homer",
    lastname: "Simpson",
  };

function App() {

  return (
    <>
      <Avatar {...homer}  />
      <Avatar {...bart} />
    </>
  )
}

export default App
