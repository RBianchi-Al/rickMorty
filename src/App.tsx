/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import PrivateRoute from "./private";
import { AuthContextProvider } from "./Context/authContext";
import { FavoritesContextProvider } from "./Context/favoritesContext";
import { Favorites } from "./Pages/Favorites";
import { Home } from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <AuthContextProvider>
          <FavoritesContextProvider>
              <Route exact path="/" component={Login} />
              <PrivateRoute path="/home" exact component={Home} />
              <PrivateRoute path="/favorites" exact component={Favorites} />
          </FavoritesContextProvider>
          </AuthContextProvider>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
