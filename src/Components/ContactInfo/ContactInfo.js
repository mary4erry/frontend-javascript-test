import React from 'react'

export const ContactInfo = ({contactInfo}) => {
   const streetAddress = contactInfo && contactInfo.address ? contactInfo.address.streetAddress : null
   const city = contactInfo && contactInfo.address ? contactInfo.address.city : null
   const state = contactInfo && contactInfo.address ? contactInfo.address.state : null
   const zip = contactInfo && contactInfo.address ? contactInfo.address.zip : null

   return ( <div>
      <p>Выбран пользователь</p>  
      <b>{contactInfo.firstName} </b> 
      <b>{contactInfo.lastName}</b>
      <p>Описание:</p>
      <b>{contactInfo.description}</b>
      <p>Адрес проживания:</p> 
      <b>{streetAddress}</b>
      <p>Город:</p> 
      <b>{city}</b>
      <p>Провинция/штат: </p>
      <b>{state}</b>
      <p>Индекс:</p> 
      <b>{zip}</b>
   </div> 
   )
}