import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ComponentsContextProvider } from './Context/componentsContext';

import { Home } from "./Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        < ComponentsContextProvider >
          <Route path="/" exact component={Home} />
        </ComponentsContextProvider>     
      </Switch>
 
    </BrowserRouter>
     </div>
  );
}

export default App;
