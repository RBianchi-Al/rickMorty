import { useCards } from '../../hooks/useCards'
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useStyles } from './styles'



type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}


export default function Search({ search, setSearch }: SearchProps) {
  const classes = useStyles();
  const { components } = useCards()

  return (
    <>
      
      <Autocomplete
        className={classes.box}
        id="country-select-demo"

        options={components as Components[]}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <React.Fragment>
            <span>{(option.name)}</span>
            {option.id} |
            ({option.species} ) |
            {option.type}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            value={search}
            onChange={event => setSearch(event.target.value)}
            {...params}
            label="Personagens"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
    </>
  );
}



type Components = {
  id: number;
  image: string;
  name: string;
  species: string;
  type: string;
}
