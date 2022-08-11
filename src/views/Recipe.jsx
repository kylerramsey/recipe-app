import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataProvider";
import Similar from "../components/Similar";

export default function Recipe() {
    const { addFavorite } = useContext(DataContext);
    const [buttonText, setButtonText] = useState("Add to Favorites");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(details.image, details.title);
        console.log(details);
        addFavorite(details.title, details.image);
        setButtonText("Favorite added!");
    }

    const params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    useEffect(() => {
        const fetchDetails = async () => {
            const data = await fetch(
                `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
            );
            const detailData = await data.json();
            setDetails(detailData);
        };
        fetchDetails(params.name);
    }, [params.name]);

    return (
        <>
            <DetailWrapper>
                <div>
                    <h2>{details.title}</h2>
                    <img src={details.image} alt="" />
                </div>
                <Info>
                    <Button
                        className={activeTab === "ingredients" ? "active" : ""}
                        onClick={() => setActiveTab("ingredients")}
                    >
                        Ingredients
                    </Button>
                    <Button
                        className={activeTab === "instructions" ? "active" : ""}
                        onClick={() => setActiveTab("instructions")}
                    >
                        Instructions
                    </Button>
                    <Button id="favBut" onClick={handleSubmit}>
                        {buttonText}
                    </Button>
                    {activeTab === "instructions" && (
                        <div>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: details.summary,
                                }}
                            ></h3>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: details.instructions,
                                }}
                            ></h3>
                        </div>
                    )}

                    {activeTab === "ingredients" && (
                        <ul>
                            {details.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>
                                    {ingredient.original}
                                </li>
                            ))}
                        </ul>
                    )}
                </Info>
            </DetailWrapper>
            <Similar />
        </>
    );
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;
