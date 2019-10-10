import React from 'react';
import Contact from './components/Contact';
import Claptrap from './components/Claptrap';
import Keanu from './components/Keanu';
import Dio from './components/Dio';

function App() {
  return (
    <div className=''>
      <Contact {...Claptrap}/>
      <Contact {...Keanu}/>
      <Contact {...Dio}/>
    </div>
  );
}

export default App;
