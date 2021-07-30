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


export function FavoritesContextProvider(props: FavoritesContextProvider) {

    const [favorites, setFavorites] = useState<Components[]>(() => {
        const storagedFavorites = localStorage.getItem('Personagem salvo com sucesso(LS)');

        if (storagedFavorites) {
            return JSON.parse(storagedFavorites);
        }
        return [];
    });

    async function updateFavorites(components: Components) {
        try {
            const componentSaved = favorites.find(componentId => componentId.id === components.id);

            if (!componentSaved) {
                setFavorites([...favorites, { ...components }])
                localStorage.setItem('Personagem salvo com sucesso(LS)', JSON.stringify([...favorites, { ...components }]))
                return;
            } else {
                const saveFavorite = favorites.filter(favoritId => favoritId.id !== components.id);
                setFavorites(saveFavorite);
                localStorage.setItem('Personagem salvo com sucesso(LS)', JSON.stringify(saveFavorite))

                return;
            }
        } catch(err) {
            console.log(`Erro ao atualizar: ${err}`);
        }
    }

    return (
        <FavoritesContext.Provider value={{ favorites, updateFavorites }}>
            {props.children}
        </FavoritesContext.Provider>
    );
}