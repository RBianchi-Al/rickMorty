/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import Header from "../../Components/Header";
import CardViews from "../../Components/Card";
import Search from "../../Components/Search";
import { useCards } from "../../hooks/useCards";
import Loading from "../../Components/Loading";

export function Home() {
  const { loading, notFound, search, setSearch, components } = useCards();
  console.log(setSearch);

  return (
    <>
      <Header />
      <Search search={search} setSearch={setSearch} />
      {loading
        ? <>
          <Loading />
        </>
        : (
          notFound
            ? (

              <h1>Tivemos um problema seu personagem...</h1>

            )
            : (

              <>
                <CardViews components={components} />
              </>
            )
        )
      }

    </>
  );
}
