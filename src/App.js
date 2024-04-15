import SocialMedia from './assets/components/SocialMedia';
import Statistic from './assets/components/Statistics';
import SubscribeForm from './assets/components/SubscribeForm';
import './App.css';

function App() {
  return (
    <div className="App flex  justify-center background min-h-screen bg-white">
     <div className='App_cointainer max-w-screen-sm flex flex-col m-12 items-center'>
     <SubscribeForm/>
     <Statistic/>
     <SocialMedia/>
     </div>
    </div>
  );
}

export default App;
