import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/searched/' + input)
    }

    return (
        <FormStyle onSubmit={handleSubmit}>
            <div>
                <input 
                    onChange={(e) => setInput(e.target.value)} 
                    type="text" 
                    value={input} 
                    placeholder='Search for any food here'
                    />
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    margin: 1rem 20rem;

    div {
        position: relative;
        width: 100%;
    }
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;
