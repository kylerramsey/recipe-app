import { createContext, useState, useEffect, useContext } from "react"
import { getFirestore, getDoc, getDocs, collection, doc, addDoc, Timestamp, orderBy, query, collectionGroup } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [favorites, setFavorites] = useState([])
    const { user } = useContext(AuthContext)

    const db = getFirestore()

    useEffect(() => {
        const getFavorites = async() => {
            if (!user.id) {
                return
            }
            const collectionRef = collection(db, "users", user.id, "favorites")
            const collectionSnap = await getDocs(collectionRef)
            // const q = query(collectionRef, orderBy('dateCreated', 'desc'))
            // const collectionSnap = await getDocs(q)

            let favoritesArr = []

            collectionSnap.forEach((docSnap) => {
                favoritesArr.push({
                    ...docSnap.data(),
                    id: docSnap.id
                })
            })

            console.log(favoritesArr)

            setFavorites(favoritesArr)
        }
        getFavorites()
    }, [user.loggedIn])

    const getSingleFavorite = async (id) => {
        const collectionRef = collection(db, "favorites")
        const collectionSnap = await getDocs(collectionRef)
 
        let favoritesArr = []

        let resultDoc = {}

        collectionSnap.forEach((docSnap) => {
            if (docSnap.id === id) {
                resultDoc = {
                    id: id,
                    ...docSnap.data()
                }
            }
        })

        return resultDoc

    }

    const addFavorite = async(name) => {
        if (!user.loggedIn) {
            throw new Error("You can't add a Favorite if you're not logged in.")
        }

        const newFavorite = {
            name: name
        }

        const docRef = await addDoc(collection(db, "users", user.id, "favorites"), newFavorite)

        newFavorite.id = docRef.id

        setFavorites([newFavorite, ...favorites])

        console.log(docRef)
        console.log("New Favorite added", docRef.id)
    }

    const values = {
        favorites,
        getSingleFavorite,
        addFavorite
    }

    return (
        <DataContext.Provider value={values}>
            { props.children }
        </DataContext.Provider>
    )
}