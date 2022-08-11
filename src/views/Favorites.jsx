import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import Recipe from "./Recipe";
import Favorite from "../components/Favorite";

export default function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const { favorites } = useContext(DataContext)

    // const getCuisine = async (name) => {
    //     const data = await fetch(
    //         `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    //     );
    //     const recipes = await data.json();
    //     setCuisine(recipes.results);
    // };

    // useEffect(() => {
    //     getCuisine(params.type);
    // }, [params.type]);

//     return (
//         <Grid
//             animate={{ opacity: 1 }}
//             initial={{ opacity: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//         >
//             {cuisine.map((favorites) => {
//                 // console.log(favorites.title, favorites.image);
//                 console.log(favorites.title)
//                 console.log(favorites.id)
//                 // console.log(params.name)
//                 return (
//                     <Card key={favorites.title}>
//                         <Link to={"/recipe/" + favorites.id}>
//                             <img src={favorites.image} alt=""></img>
//                             <h4>{favorites.title}</h4>
//                         </Link>
//                     </Card>
//                 );
//             })}
//         </Grid>
//     );
// }

return (
    <>
    <Grid>
        { 
            favorites.map(favorite => <Favorite favorite={favorite} key={ favorite.id } />)
        }
    </Grid>
    </>
)
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    margin-bottom: 2rem;
`;
