
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Players from './components/players/Players';
import type { PlayerType } from './PlayerType';

const PromiseData = async (): Promise<PlayerType[]> => {
  const res = await fetch('data.json');
  const data = await res.json();
  return data;
}

function App() {
  const [fetchPlayer] = useState(() => PromiseData());
  const [dollar, setDollar] = useState<number>(2400);
  return (
    <div className='container mx-auto'>
      <Navbar dollar={dollar} />
      <Banner />
      <Suspense fallback={<p>Data loading...</p>}>
        <Players fetchPlayer={fetchPlayer} dollar={dollar} setDollar={setDollar} />
      </Suspense>
    </div>
  )
}

export default App
