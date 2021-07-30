
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

type ComponentsContextType = {
    components: Array<Components> | undefined;
    filterComponents: (searchText: string) => Promise<void>;
}

export function useCards(){
    const [components, setComponents] = useState<Components[]>([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [search, setSearch] = useState('');
  
    
    
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
              },(error) => {
                console.error(error);
                setNotFound(true);
              })
          }
        }
    
        loading();
      }, [search])
    

   
    

    return {components, setComponents, search, setSearch, loading, setLoading, notFound, setNotFound}
}