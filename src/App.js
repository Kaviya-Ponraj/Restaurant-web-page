import Appbar from './components/Appbar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import PickOftheWeek from './components/PickOftheWeek';

function App() {
  return (
    <div>
    {/* <Example /> */}
    <Appbar />
    <Banner />
    <Menu />
    <PickOftheWeek />
      <div className='text-center my-3 text-danger small'>Copyright @ 2022-2023</div>
    </div>
  );
}

export default App;
