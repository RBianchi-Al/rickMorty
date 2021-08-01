
import Header from "../../Components/Header";
import CardViews from '../../Components/Card'
import Search from "../../Components/Search";
import { useFavorites } from "../../hooks/useFavorites";





export function Favorites(){
    const {favorites, notFavorite, loading} = useFavorites()
   


    return(
        <>
            <Header/>           
           
            {loading ? 
              (<h1>Carregando...</h1>)      
            : 
          (
            notFavorite ? (
                <h1>Você não tem personagens favoritos</h1>
            ): (
               
                <>
                  <CardViews components={favorites} />
                </>
            )
          )      
        }
            
        </>
    )
}