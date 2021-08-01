import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ComponentsContextProvider } from './Context/componentsContext';
import { FavoritesContextProvider } from './Context/favoritesContext';
import { Favorites } from './Pages/Favorites';

import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <FavoritesContextProvider>
           
              <Route path="/" exact component={Home} />
              <Route path="/favorites" exact component={Favorites} />
         
          </FavoritesContextProvider>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
