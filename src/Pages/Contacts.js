import { Grid, Paper, 
         Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useContacts } from './useContacts'
import { ContactsTable } from '../Components/Table/ContactsTable'


const useStyles = makeStyles((theme) => ({
   root: {
     marginTop: theme.spacing(3),
   },
 }));

export const Contacts = () => {
   const classes = useStyles();
   const contacts = useContacts()

   return ( 
      <Container className={classes.root}>
         <Grid container spacing={3}>
            <Grid item xs={12}>
               <Paper> Add contact </Paper>
            </Grid>
            <Grid item xs={12}>
               <Paper> Search </Paper>
            </Grid>
            <Grid item xs={12}>
               {(() => {
                  if (contacts.isLoading) {
                     return <div> ...loading </div>
                  }
                  if (contacts.isError) {
                     return <div> ...error </div>
                  }
                  return <ContactsTable data = {contacts.data}/>
               })()}
            </Grid>
            <Grid item xs={12}>
               <Paper> Full Info </Paper>
            </Grid>
            <Grid item xs={12}>
               <Paper> Pagination </Paper>
            </Grid>
         </Grid> 
      </Container>
   )
}