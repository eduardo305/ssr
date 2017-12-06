import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home component</h1>
      <button
        className='btn'
        onClick={() => console.log('clicked')}>OK</button>
    </div>
  );
}

export default Home;