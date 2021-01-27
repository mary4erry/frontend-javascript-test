import { useState, useEffect } from 'react'

export const useContacts = (url) => {
   const [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [isError, setIsError] = useState(false)
   const [selectedUrl, setSelectedUrl] = useState('')

   useEffect(() => {
      const getContacts = async() => {
         try {
            setIsLoading(true)
            const response = await fetch(url)
            const results = await response.json()
            setData(results)
            setIsError(false)
         } catch (e) {
            setIsError(true)
         } finally {
            setIsLoading(false)
         }
      }
      getContacts()
   }, [])

   return {
      data,
      isLoading,
      isError,
      setData,
   }
}