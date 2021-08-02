/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { useEffect, useState, useContext } from "react";
import { FavoritesContext } from "../Context/favoritesContext";

export function useFavorites() {
    const [loading, setLoading] = useState(true);
    const [notFavorite, setNotFavorite] = useState(false);
    const { favorites, updateFavorites } = useContext(FavoritesContext);

    useEffect(() => {
      async function loadFavorites() {
        if (favorites.length >= 1) {
          setLoading(false);
          setNotFavorite(false);
        } else {
          setLoading(false);
          setNotFavorite(true);
        }
      }

      loadFavorites();
    }, [favorites]);

    return { updateFavorites, favorites, notFavorite, loading };
}
