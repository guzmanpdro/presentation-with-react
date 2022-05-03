import picture from './profile-picture.jpg';
import './App.css';

function App() {
  return (
    <div className="main">
      <p>
        Hola 👋 mi nombre es <strong className='name'>Pedro Guzmán</strong>
      </p>
      <img src={picture} className="picture" alt="Profile" />
      <p className='description'>
        Actualmente estoy cursando un bootcamp de React y esto es lo primero que hice con la librería 👨‍💻 
      </p>
    </div>
  );
}

export default App;
