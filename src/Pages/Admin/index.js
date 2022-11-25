import React, {useEffect, useState} from 'react'
import { auth, db } from "../../utils/firebase";
import Authentification from "./Authentification";
import Prestations from './Prestations';
import { collection, getDocs } from 'firebase/firestore';
import CreatePrestation from './CreatePrestation';


const Admin = ({prestations, setPrestations}) => {

    const [isCreatePage, setIsCreatePage] = useState(false)

    const getPrestations = async () => {
        return await getDocs(collection(db, "prestations"))
    }

    useEffect(() => {

        let isMounted = true; // note mutable flag
        let user = auth.currentUser
    
        
        if (user) {    
          const newPrestations = []
          getPrestations().then(data => {
            if (isMounted) data.forEach((doc) => {
              const newData = doc.data()
              newData["id"] = doc.id
              newPrestations.push(newData)
            });
            setPrestations(newPrestations)
          })
    
        }
        
        return () => { isMounted = false }; // cleanup toggles value, if unmounted
      //eslint-disable-next-line
      }, [auth.currentUser])

  return (
    <section id="admin">
        {
            auth.currentUser ? isCreatePage ? <CreatePrestation isCreatePage={setIsCreatePage} /> : <Prestations prestations={prestations} isCreatePage={setIsCreatePage} /> : <Authentification />
        }
    </section>
  )
}

export default Admin