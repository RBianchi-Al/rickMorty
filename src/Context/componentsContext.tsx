import { createContext, ReactNode, useState } from "react";
export const ComponentsContext = createContext({} as ComponentsContextType);

type AuthContextProps = {
    children: ReactNode;
  }

type ComponentsProps = {
  components: Array<Components>;
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
}

type ComponentsContextType = {
  component: ComponentsProps[] | undefined;
  filterComponents: (search: string) => Promise<void>;
}




export function ComponentsContextProvider(props: AuthContextProps) {
    const [component, setComponent] = useState<ComponentsProps[]>([]);
  
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [search, setSearch] = useState('');
  


    async function filterComponents(search: string) {
      
        
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`);
        const data = await res.json();
        
        setComponent(data.results);
    }


  return (
    <ComponentsContext.Provider value={{ component, filterComponents }}>
      {props.children}
    </ComponentsContext.Provider>
  );
}