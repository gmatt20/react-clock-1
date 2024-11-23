import Time from './Time';
import mountainImage from '../public/john-towner-JgOeRuGD_Y4-unsplash.jpg';

function App() {
  return (
    <div className="relative">
      <div>
        <img className="h-screen w-screen" src={mountainImage} alt="Mountains" />
        <Time />
      </div>
    </div>
  );
}

export default App;