import React from "react";
import { Link } from "react-scroll";
import './NavBar.css';
import { buttonTexts, navBarList } from "../../assets/strings/strings";
import Toggle from "../Toggle/Toggle";

const NavBar = () => {
    return (
        <div className='n-wrapper' id='NavBar'>
            <div className='n-left'>
                <div className='n-name'>Prashant</div>
                <Toggle/>
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul>
                        {
                            navBarList.map((item, i) => <Link spy={true} to={item.redirectTo} smooth={true} activeClass='activeClass'><li key={i}>{item.listItem}</li></Link>)
                        }
                    </ul>
                </div>
                    <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'><button className='button n-button'>{buttonTexts.contact}</button></Link>
            </div>
        </div>
    )
}

export default NavBar;
