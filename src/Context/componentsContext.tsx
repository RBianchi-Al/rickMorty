/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [notFound, setNotFound] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [search, setSearch] = useState("");

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
