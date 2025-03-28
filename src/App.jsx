import { useState } from 'react'
import Logo from './assets/panda.svg'
import './App.css'
import Image1 from './assets/image1.jpg'

function MagicButton() {
  return(
    <div>
    <h3>This is a Magic Button</h3>
    <button> Magic </button>
    </div>
  );
}

const book = {
  title: 'Image 1',
  description: 'Earnest Hemingway',
  image: Image1,
  width: '50vw',
  height: '30vw'
};

const magazines = [
  { id: 1, title: 'Hate', theme: 'architecture', isAvailable: true, color: '#800000'},
  { id: 2, title: "Don't Like", theme: 'architecture', isAvailable: true, color: '#43014f'},
  { id: 3, title: 'Like', theme: 'design', isAvailable: false, color: '#9e86fa7'},
  { id: 4, title: 'Love', theme: 'design', isAvailable: false, color:'#fea0ff', },
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <button class="buttonZones"
    key={zine.id}
    style={{
      backgroundColor: zine.color
    }}
  >
    {zine.title}
  </button>
  );
  return(
    <div class="Zones"> {listZines}  </div>
    
  )  
 
function Bookshelf() {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
      }
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>How do you feel about this image?</h1>

      <Bookshelf/>
      <ZineRack/>

    </div>
  );
}
export default App;