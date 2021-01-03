import { Grid, Paper, 
         Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useContacts } from './useContacts'
import { ContactsTable } from '../Components/Table/ContactsTable'
import { ContactInfo } from '../Components/ContactInfo/ContactInfo'

const useStyles = makeStyles((theme) => ({
   root: {
     marginTop: theme.spacing(3),
   },
 }))

export const Contacts = () => {
   const classes = useStyles()
   const contacts = useContacts()

   const onSort = (field) => {
      const copyData = contacts.data.concat()
      contacts.setSortDirection(!contacts.sortDirection)

      let sort 
      if (contacts.sortDirection) {
         sort = copyData.sort(
            (a, b) => { return a[field] > b[field] ? 1 : -1 }
         )
      } sort = copyData.reverse(
         (a, b) => { return a[field] > b[field] ? 1 : -1 }
      )
      contacts.setData(sort)
   }
   const showInfo = (field) => {
      contacts.setContactInfo(field)
   }

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
                  return <ContactsTable 
                     data = {contacts.data}
                     onSort = {onSort}
                     sortDirection = {contacts.sortDirection}
                     showInfo = {showInfo}
                     />
               })()}
            </Grid>
            <Grid item xs={12}>
               <Paper> Pagination </Paper>
            </Grid>
            <Grid item xs={12}>
               <Paper> 
                  <ContactInfo contactInfo={contacts.contactInfo}/> 
               </Paper>
            </Grid>
         </Grid> 
      </Container>
   )
}