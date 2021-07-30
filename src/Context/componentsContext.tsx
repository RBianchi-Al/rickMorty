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
  component: ComponentsProps | undefined;
  filterComponents: (searchText: string) => Promise<void>;
}




export function ComponentsContextProvider(props: AuthContextProps) {
    const [component, setComponent] = useState<ComponentsProps>();

    async function filterComponents(searchText: string) {
        
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchText}`);
        const data = await res.json();
        
        setComponent(data.results);
    }


  return (
    <ComponentsContext.Provider value={{ component, filterComponents }}>
      {props.children}
    </ComponentsContext.Provider>
  );
}