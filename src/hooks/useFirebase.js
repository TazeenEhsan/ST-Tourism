
import { useEffect, useState } from "react"
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    //email
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [isLogin, setIsLogin] = useState(false);



    // const toggleLogin = e => {
    //     setIsLogin(e)
    // }

    // const handleNameChange = e => {
    //     setName(e.target.value);
    // }
    // const handleEmailChange = e => {
    //     setEmail(e.target.value);
    // }

    // const handlePasswordChange = e => {
    //     setPassword(e.target.value)
    // }

    // const handleRegistration = () => {

    //     // e.preventDefault();

    //     if (password.length < 6) {
    //         setError('Password Must be at least 6 characters long.')
    //         return;
    //     }
    //     if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //         setError('Password Must contain 2 upper case');
    //         return;
    //     }


    //     else {
    //         registerNewUser(email, password);

    //     }


    // }


    // const processLogin = (email, password) => {

    //     return signInWithEmailAndPassword(auth, email, password)
    //         .catch(error => {
    //             setError(error.message);
    //         })
    // }

    // const registerNewUser = (email, password) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             // const user = result.user;
    //             setError('');
    //             setUserName();
    //         })
    //         .catch(error => {
    //             setError(error.message);
    //         })



    // }

    // const setUserName = () => {
    //     updateProfile(auth.currentUser, { displayName: name })
    //         .then(result => { })
    // }


    //

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {

        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false)); //
    }


    const logOut = () => {

        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        })
    }, []);

    return {
        user,
        setUser,
        error,
        setError,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;