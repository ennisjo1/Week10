import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MagicButton() {
  return(
    <div>
    <h3>This is a Magic Button</h3>
    <button> Magic </button>
    </div>
  );
}

const book = {
  title: '',
  author: 'Earnest Hemingway',
  published: '1929',
  image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Book_cover_photo_for_%22Family_and_the_State_in_Soviet_Lithuania%22.jpg',
  width: '264',
  height: '378'
};

const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false },
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
    key={zine.id}
    style={{
      color: zine.isAvailable ? 'green' : 'red'
    }}
  >
    {zine.title}
  </li>
  );
  return(
    <ul> {listZines} </ul>
  )}
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
      <h1>Week 10.3</h1>
      <header className="App-header">
      <ZineRack/>
      <Bookshelf/>
      </header>
    </div>
  );
}
export default App;