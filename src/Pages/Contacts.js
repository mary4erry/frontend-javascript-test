import { useState, useEffect } from 'react'
import { Grid, Paper, 
         Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useContacts } from './useContacts'
import { ContactsTable } from '../Components/Table/ContactsTable'
import { ContactInfo } from '../Components/ContactInfo/ContactInfo'
import Switch from '../Components/Switch/Switch';

const useStyles = makeStyles((theme) => ({
   root: {
     marginTop: theme.spacing(3),
   },
 }))

export const Contacts = () => {
   const classes = useStyles()
   const url = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
   const urlBig = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
   const [ selectedUrl, setSelectedUrl ] = useState(false)
   const [sortDirection, setSortDirection] = useState(true)
   const [fieldData, setfieldData] = useState('')
   const [contactInfo, setContactInfo] = useState('')
   const contacts = useContacts(url)

   const onSort = (field) => {
      const copyData = contacts.data.concat()
      setSortDirection(!sortDirection)

      let sort 
      if (sortDirection) {
         sort = copyData.sort(
            (a, b) => { return a[field] > b[field] ? 1 : -1 }
         )
      } sort = copyData.reverse(
         (a, b) => { return a[field] > b[field] ? 1 : -1 }
      )
      contacts.setData(sort)
   }
   const showInfo = (field) => {
      setContactInfo(field)
   }
   const handleSwitch = (url) => {
      contacts.setUrl(contacts.url)
      console.log(url);
   }

   return ( 
      <Container className={classes.root}>
         <Grid container spacing={3}>
            <Switch handleSwitch={handleSwitch}/>
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
                     sortDirection = {sortDirection}
                     showInfo = {showInfo}
                     setfieldData ={setfieldData}
                     fieldData ={fieldData}
                     />
               })()}
            </Grid>
            <Grid item xs={12}>
               <Paper> Pagination </Paper>
            </Grid>
            { contactInfo ? <Grid item xs={12}>
               <Paper> 
                  <ContactInfo contactInfo={contactInfo}/> 
               </Paper>
            </Grid> : null }
         </Grid> 
      </Container>
   )
}