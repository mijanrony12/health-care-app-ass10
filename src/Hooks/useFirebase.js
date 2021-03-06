import react, {useEffect, useState} from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut,createUserWithEmailAndPassword ,signInWithEmailAndPassword   } from "firebase/auth";
import initialFirebase from '../firebase/firebase.init';

initialFirebase()
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [ user, setUser ] = useState({})
    const [ error, setError ] = useState('')
    const [ isLoading, setIsLoading ] = useState(true)
    
    const signInUsingGoogle = () => {
       setIsLoading(true)
       return signInWithPopup(auth, googleProvider)
            .catch(error => {
               setError(error.message)
        }).finally(()=> setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
            }
            setIsLoading(false)
});
    },[])


    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        })
        .finally(() => setIsLoading(false))
}

    
    const handlePasswordEmailLogin = (email, password) => {
        if (password.length < 6)
        {
            setError('plz give me at least 6 digit')
            return
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password))
        {
            setError('need  two UpperCase')
            return
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password))
        {
            setError('giv me two Number');
            return
        }
          createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
               setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    const handleLogin = (email, password) => {
         signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        
        console.log(user);
        setError('')
      })
      .catch(error => {
        setError(error.message)
    })
    }
    
    return{signInUsingGoogle,handlePasswordEmailLogin,handleLogin, error, user,logOut, isLoading}
}

export default useFirebase;