import React from 'react'
import { IconButton, TextField, Button } from '@material-ui/core'
import AddBoxIcon from '@material-ui/icons/AddBox'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'


const useStyles = makeStyles((theme) => ({
   root: {
      margin: theme.spacing(1),
      width: '98%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-betwen'
   },
   input: {
      marginRight: theme.spacing(1),
   },
   button: {
      marginBottom: theme.spacing(1),
   }
}))
export const AddForm = ({getInputData}) => {
   const classes = useStyles()
   const [isFormOpen, setIsFormOpen] = useState(false)
   const [id, setId] = useState('')
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      getInputData({id, firstName, lastName, email, phone})
   }

   return (
      <> { !isFormOpen ? 
         <Button className={classes.button}
            variant="contained"
            onClick={() => setIsFormOpen(true)}>
            Add contact
         </Button> 
         : 
         <form className={classes.root} 
            onSubmit={handleSubmit}
            noValidate autoComplete="off">
            <TextField className={classes.input} 
               id='id'
               label="id" 
               value={id} 
               onChange={(event) => setId(event.target.value)}/>
            <TextField className={classes.input} 
               id='firstName'
               label="firstName" 
               value={firstName} 
               onChange={(event) => setFirstName(event.target.value)}/>
            <TextField className={classes.input}
               id='lastName' 
               label="lastName" 
               value={lastName} 
               onChange={(event) => setLastName(event.target.value)}/>
            <TextField className={classes.input} 
               id='email'
               label="email" 
               value={email} 
               onChange={(event) => setEmail(event.target.value)}/>
            <TextField className={classes.input} 
               id='phone'
               label="phone" 
               value={phone} 
               onChange={(event) => setPhone(event.target.value)}/>
            <IconButton 
               type="submit" 
               className={classes.iconButton} 
               >
               <AddBoxIcon />
            </IconButton>
         </form>
      } </>
   )
}