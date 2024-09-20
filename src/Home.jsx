import React, { useState } from 'react';
import './Home.css';
import myImage from './assets/Blogpic.jpeg'; // Update with the correct path to your image

const Home = () => {
  const [buttonCount, setButtonCount] = useState(0);
  const [randomWord, setRandomWord] = useState('');

  const incrementButtonCount = () => setButtonCount(buttonCount + 1);
  const decrementButtonCount = () => setButtonCount(buttonCount - 1);
  const multiplyButtonCount = () => setButtonCount(buttonCount * 10);
  const divideButtonCount = () => setButtonCount(buttonCount / 2);

  const generateRandomWord = () => {
    const words = ['Guardian', 'Light', 'Darkness', 'Traveler'];
    setRandomWord(words[Math.floor(Math.random() * words.length)]);
  };

  return (
    <section id="home" className="app-section">
      <div className="section-content">
        <h1>Jay Miller</h1>
        <img src={myImage} alt="Jay Miller" className="profile-image" />
        <p>
          Age: 22 <br />
          Location: Lexington, KY <br />
          Looking for: Opportunities in Full Stack Development
        </p>
        <h2>Welcome to My Portfolio</h2>
        <p>Explore my work and learn more about me.</p>
        <button className='btn-increment' onClick={incrementButtonCount}>Increase</button>
        <button className='btn-decrement' onClick={decrementButtonCount}>Decrease</button>
        <button className='btn-multiply' onClick={multiplyButtonCount}>Multiply by 10</button>
        <button className='btn-divide' onClick={divideButtonCount}>Divide by 2</button>
        <p>Button Count: {buttonCount}</p>
        <button className='btn-generate-word' onClick={generateRandomWord}>Generate Random Word</button>
        {randomWord && <p>Random Word: {randomWord}</p>}
        <p>Random Number: {Math.floor(Math.random() * 100)}</p>
      </div>
    </section>
  );
};

export default Home;
