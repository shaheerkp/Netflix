import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Rowpost from './components/Rowpost/Rowpost'

import { action,originals,horror } from './urls';


function App() {


  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost title="NETFLEX ORGINALS"  url={originals} />
      <Rowpost title="ACTION" url={action} isSmall />
      <Rowpost title="HORROR" url={horror} isSmall />
      
          </div>
  );
}

export default App;
