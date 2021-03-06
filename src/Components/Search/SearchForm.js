import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   root: {
      marginBottom: theme.spacing(1), 
      display: 'flex',
      justifyContent: 'spaceBetween',
   },
   input: {
     marginLeft: theme.spacing(1),
     flex: 1,
   },
   iconButton: {
     padding: 10,
   },
   
 }));

export const SearchForm = ({onSearchSend}) => {
   const classes = useStyles()
   const [searchValue, setSearchValue] = useState('')

   const handleClick=(e) =>  {
      e.preventDefault()
      onSearchSend(searchValue)
   }
   return (
      <Paper component="form" className={classes.root}>
         <InputBase
            className={classes.input}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
         />
         <IconButton type="submit" 
            className={classes.iconButton} 
            aria-label="search"
            onClick={handleClick}>
            <SearchIcon />
         </IconButton>
      </Paper>
   )
}