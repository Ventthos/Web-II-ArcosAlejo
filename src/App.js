import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { RecipesRouter } from './router/Router';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <RecipesRouter/>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
