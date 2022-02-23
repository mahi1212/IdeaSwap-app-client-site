import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initiallizeFirebase from './../Pages/SignUp/Firebase/Firebase.init';
// import { createBrowserHistory } from 'history';


// initialize firebase
initiallizeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();

    // const history = createBrowserHistory();

    const registerUser = (name, email, password, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser)
                // Save user
                saveUser(email, name, 'POST') 
                // Send name to the firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {}).catch((error) => {
                    setAuthError(error.message);
                });
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Redirecting to previous page after login using useNavigate()
                const from = location?.state?.from || '/courses'
                navigate(from , {replace: true});
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observer 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setAuthError('')
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
    
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {})
        .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        isLoading,
        authError,
        admin,
        registerUser,
        loginUser,
        logout,
    }
}

export default useFirebase;