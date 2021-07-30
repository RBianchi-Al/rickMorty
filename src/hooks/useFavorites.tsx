
import { useEffect, useState, useContext } from 'react'
import {FavoritesContext} from '../Context/favoritesContext'


type Components = {
    id: number;
    image: string;
    name: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string; 
    },
    created: Date;
}

type ComponentsContextType = {
    components: Array<Components> | undefined;
    filterComponents: (searchText: string) => Promise<void>;
}


export function useFavorites(){
    const [loading, setLoading] = useState(true);
    const [notFavorite, setNotFavorite] = useState(false);
    const {favorites,  updateFavorites} = useContext(FavoritesContext)
  
    function handleUpdateFavorites(components: Components) {
        updateFavorites(components);
    }
  
    useEffect(() => {
    //   async function loadFavorites() {
    //     if (favorites.length >= 1) {
    //       setLoading(false);
    //       setNotFavorite(false);
    //     } else {
    //       setLoading(false);
    //       setNotFavorite(true);
    //     }
    //   }
  
    //   loadFavorites();
    }, [favorites])
  
    

    return {updateFavorites, favorites, handleUpdateFavorites}
}