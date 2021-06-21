import React,{useRef} from 'react'
import ImdbLogo from './ImdbLogo.png'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import  './Header.css';
import { useHistory } from 'react-router-dom';

function Header() {

    const movieInputRef = useRef();
    const history = useHistory()


    const searchHandler = ()=>{
        const searchVal = movieInputRef.current.value;
        //Pushing The movie name to the URL
        {searchVal !=="" && history.push(`/search?movie=${searchVal}`)}
        movieInputRef.current.value = '';
    }

    return (
        <div className='header'>
            <Link to ='/'>
                <img src={ImdbLogo} alt="Logo" />
            </Link>
            <div className="header__menu">
                <MenuIcon />
                <p>Menu</p>
            </div>
            <div className="header__search">
                <input placeholder="Search Movies..." 
                ref = {movieInputRef} />
                <SearchIcon onClick = {searchHandler}/>
            </div>
            <div className="header__pro">
                <h2>IMDbPro</h2>
            </div>
            <div className="header__separator"></div>
            <div className="header__watchlist">
                <svg width="24" height="24" className='header__watchlist__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"role="presentation"><path d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z" fill="currentColor"></path></svg>
                <h2>Watchlist</h2>
            </div>
            <div className="header__signIn">
                <h2>Sign In</h2>
            </div>
        </div>
    )
}

export default Header
