import Pages from "./views/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from 'react-icons/gi'
import firebase from "./firebase";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthProvider";

function App() {
    const { login, logout, user } = useContext(AuthContext);


  return (
    <div className="App">
        <Router>
                <Nav>
                    <GiKnifeFork />
                    <Logo to={'/'}>Delectable</Logo>
                    <LogButton>
                        {user.loggedIn ? (
                                <button
                                    onClick={logout}
                                    id="login-btn"
                                    className="btn btn-dark rounded-pill d-inline-flex mt-3 mb-4"
                                    type="submit"
                                >
                                    Logout
                                </button>
                            ) : (
                                <button
                                    onClick={login}
                                    id="login-btn"
                                    className="btn btn-dark rounded-pill d-inline-flex mt-3 mb-4"
                                    type="submit"
                                >
                                    Login
                                </button>
                            )}
                    </LogButton>
                </Nav>
            <Search />
            <Category />
            <Pages />
        </Router>
    </div>
  );
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Raleway', cursive;
    :hover{
        text-decoration: none;
        color: #ba6ba2;
    }
`

const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg{
        font-size: 2rem;
    }
`

const LogButton = styled.div`
    display: flex;
    justify-content: end;
    margin-left: 1.5rem;
    padding-top: 8px;
`

export default App;
