import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom'

export default function Gluten() {
    const [gluten, setGluten] = useState([]);

    useEffect(() => {
        getGluten();
    }, []);

    const getGluten = async () => {
        const checkStorage = localStorage.getItem('gluten')

        if (checkStorage) {
            setGluten(JSON.parse(checkStorage))
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=gluten-free`
            );
            const data = await api.json();

            localStorage.setItem('gluten', JSON.stringify(data.recipes))
            setGluten(data.recipes);
        }
    };
  return (
    <>
            <div>
                <Wrapper>
                    <h3>Gluten-Free Faves</h3>

                    <Splide
                        options={{
                            perPage: 4,
                            arrows: false,
                            pagination: false,
                            drag: "free",
                            gap: "5rem",
                        }}
                    >
                        {gluten.map((recipe) => {
                            return (
                                <SplideSlide key={recipe.id}>
                                    <Card>
                                        <Link to={'/recipe/' + recipe.id}>
                                            <p>{recipe.title}</p>
                                            <img
                                                src={recipe.image}
                                                alt={recipe.title}
                                            ></img>
                                            <Gradient />
                                        </Link>
                                    </Card>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </Wrapper>
            </div>
        </>
  )
}

// STYLING START

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 18rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: cetner;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

// STYLING END