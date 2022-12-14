import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiBowlOfRice } from "react-icons/gi";
import { AiFillHeart } from 'react-icons/ai'
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Category() {
    return (
        <List>
            <StyledLink to={'/Cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </StyledLink>
            <StyledLink to={'/Cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </StyledLink>
            <StyledLink to={'/Cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </StyledLink>
            <StyledLink to={'/Cuisine/Korean'}>
                <GiBowlOfRice />
                <h4>Korean</h4>
            </StyledLink>
            <StyledLink to={'/Favorites'}>
                <AiFillHeart />
                <h4>Favorites</h4>
            </StyledLink>
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const StyledLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
       color: white;
       font-size: 1.5rem; 
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        
        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`
