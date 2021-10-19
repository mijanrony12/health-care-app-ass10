import react, {useEffect, useState} from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut  } from "firebase/auth";
import initialFirebase from '../firebase/firebase.init';

initialFirebase()
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [ user, setUser ] = useState({})
    const [error, setError]=useState('')
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
            setUser(result.user)
            })
            .catch(error => {
               setError(error.message)
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } 
});
    },[])


    const logOut = () => {
    signOut(auth).then(() => {
  setUser({})
})
}

    return{signInUsingGoogle,error, user,logOut}
}

export default useFirebase;