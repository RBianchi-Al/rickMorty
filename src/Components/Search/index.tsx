import { useCards } from '../../hooks/useCards'
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useStyles } from './styles'


export default function Search() {
  const classes = useStyles();
  const { components } = useCards()

  return (
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
          {...params}
          label="Personagens"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}



type Components = {
  id: number;
  image: string;
  name: string;
  species: string;
  type: string;
}
