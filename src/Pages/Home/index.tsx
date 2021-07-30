
import Header from "../../Components/Header";
import CardViews from '../../Components/Card'
import Search from "../../Components/Search";
import { useCards } from "../../hooks/useCards";




export function Home(){
    const {loading, notFound, search, setSearch} = useCards()
    return(
        <>
            <Header/>  
            <Search search={search} setSearch={setSearch}/>
            {loading ? 
              (<h1>Carregando...</h1>)      
            : 
          (
            notFound ? (
                <h1>Tivemos um problema ao carregar as informações...</h1>
            ): (
                <>
                    <CardViews/>
                </>
            )
          )      
        }
            
        </>
    )
}