import Navbar from './components/Navbar';
import Beranda from "./components/sections/Beranda"
import AboutMe from "./components/sections/AboutMe"
import Portofolio from "./components/sections/Portofolio"
import Experiance from './components/sections/Experiance';
import Certificate from './components/sections/Certificate';

import './styles/global.css';
import ListSkill from './components/sections/ListSkill';

function App() {

  return (
    <main className="border w-full mx-auto">
      <article className='w-full border border-black '>
        <Navbar/>
        <Beranda/>
        <ListSkill/>
        <AboutMe/>
        <Portofolio/>
        <Experiance/>
        <Certificate/>
      </article>
    </main>
  );
}

export default App;
