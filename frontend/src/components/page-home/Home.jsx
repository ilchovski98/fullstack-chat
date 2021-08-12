import React from 'react';
import Hero from './../global/Hero/Hero';

const Home = () => {

  return (
    <Hero 
      title="Join the rapidly growing community!"
      entry="Over 1 000 000 daily users!"
      btnText="Register"
      btnPath="/register"
      background="../../../assets/images/mobile.jpg"
    />
  );
}

export default Home;