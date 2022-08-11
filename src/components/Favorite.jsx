import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Recipe from "../views/Recipe";

export default function Favorite(props) {
    function buildHeader() {
        let resHeader;

        if (!props.hideLink) {
            resHeader = (
                <>{props.favorite.name}</>
            );
        } else {
            resHeader = <>{props.favorite.name}</>;
        }

        return resHeader;
    }

    return (
            <Card>
                <Link to={"/recipe/" + props.favorite.id}>
                    <h4>{buildHeader()}</h4>
                    <img src={props.favorite.image}></img>
                </Link>
            </Card>
    );
}

//     return (
//         <Grid
//             animate={{ opacity: 1 }}
//             initial={{ opacity: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
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


const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;
