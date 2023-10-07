import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';


function App() {
  const[busca,setBusca]= useState('');
  return (
    <div className="App">
      <header className="App-header">
        <p className="Cabeça">
          Busca Cep
        </p>
      </header>
      <div className="Appbody">
      <Box>
      <TextField variant='outlined' 
        className='Searchbar' 
        label="Digite um Cep:" 
        color='secondary' 
        value={busca}onChange={(e)=>setBusca(e.value)}
        InputProps={{
          endAdornment:(
            <InputAdornment position="end">
              <SearchIcon/>
            </InputAdornment>
          )
        }}/>
      </Box>
     </div>
    </div>
  );
}

export default App;
