
import './App.css';
import Nav from './component/Nav';
// import Button from './component/Button';
import Stadia from './component/Stadia';
import Header from './component/header';
import students from './data';
import games from './component/Stadia/games'
import Featured from './component/Featured';


const App = () => {

  return (
    <>
      <Header />
      <Nav />
      <Featured feature={games} />
      {/* <Button text={'text'}/> */}
      <Stadia list={students} feature={games} text={'text'} />
    </>
  );
}

export default App;
