
import { useEffect, useState } from 'react'

import api from "../services/api";

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



export function useCards(){
    const [components, setComponents] = useState<Components[]>([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [search, setSearch] = useState('');
    const [list, setList] = useState(components);
  
  
    
    useEffect(() => {
        async function loading() {
          if (search === "") {
            await api.get('/character')
              .then((response) => {
                const data = response.data.results;

                setComponents(data);
                setLoading(false);
                setNotFound(false);
              },
              (error) => {
                console.error(error);
                setNotFound(true);
              });
          } else {
            await api.get(`/character/?name=${search}`)
            
              .then((response) => {
                const data = response.data.results;
    
                setComponents(data);
                setLoading(false);
                setNotFound(false);
                components.filter(
                  (item) =>
                    item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
                )
              },(error) => {
                console.error(error);
                setNotFound(true);
              })
          }
        }
    
        loading();
      }, [search])
    

      const handleOrderClick = () => {
        let newList = [...components];
    
        newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    
        setList(newList);
      };
    
      console.log(list)

    return {components, setComponents, search, setSearch, loading, setLoading, notFound, setNotFound, list }
}