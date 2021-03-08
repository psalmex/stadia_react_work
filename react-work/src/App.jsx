
import './App.css';
import Nav from './component/Nav';
// import Button from './component/Button';
import Stadia from './component/Stadia';
import students from './data';


const App = () => {

  return (
    <>
      <Nav />
      {/* <Button text={'iClick'}/> */}
      <Stadia list={students} />
    </>
  );
}

export default App;
