import { createContext, ReactNode, useState } from "react";

export const FavoritesContext = createContext({} as FavoriteContext);

type FavoritesContextProvider = {
    children: ReactNode;
}

type FavoriteContext = {
    favorites: Components[];
    updateFavorites: (components: Components) => Promise<void>;
}

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


export function FavoritesContextProvider({ children }: FavoritesContextProvider) {

    const [favorites, setFavorites] = useState<Components[]>(() => {
        const storagedFavorites = localStorage.getItem('@rickMorty/favorites');

        if (storagedFavorites) {
            return JSON.parse(storagedFavorites);
        }
        return [];
    });

    async function updateFavorites(components: Components) {
        try {
            const componentSaved = favorites.find(componentsId => componentsId.id === components.id);

            if (!componentSaved) {
                
                setFavorites([...favorites, { ...components }])
                localStorage.setItem('@rickMorty/favorites', JSON.stringify([...favorites, { ...components }]))
                return;
            } else {

                const saveFavorite = favorites.filter(favorites => favorites.id !== components.id);
                setFavorites(saveFavorite);
                localStorage.setItem('@rickMorty/favorites', JSON.stringify(saveFavorite))
                return;
            }
        } catch {
            console.log(`Erro ao atualizar:`);
        }
    }

    return (
        <FavoritesContext.Provider value={{ favorites, updateFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
}