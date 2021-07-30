
import { useEffect, useState } from 'react'

import api from "../services/api";

type Components = {
    id: number;
    image: string;
    name: string;
    species: string;
    type: string;
}

type ComponentsContextType = {
    components: Array<Components> | undefined;
    filterComponents: (searchText: string) => Promise<void>;
}

export function useCards(){
    const [components, setComponents] = useState<Components[]>([]);
    
    useEffect(() => {

        function loading() {
            api.get('/character')
                .then((response) => {
                    const data = response.data.results;
                    setComponents(data);
                });
        }
        loading()

    }, [])

   
    

    return {components}
}