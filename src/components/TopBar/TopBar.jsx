import React from 'react'
import './TopBar.css'
import bargaviIcon from './../../assets/images/bargavi-icon.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



export default function TopBar() {
    return (
        <div className="top">
            <div className="top-left">
                <FontAwesomeIcon className="top-icon" icon={faYoutube} />
                <FontAwesomeIcon className="top-icon" icon={faInstagram} />
                    

            </div>
            <div className="top-center">
                <ul className="top-list">
                    <li className="top-list-item">Home</li>
                    <li className="top-list-item">About</li>
                    <li className="top-list-item">Recipes</li>
                    <li className="top-list-item">Contact</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                className="top-img"
                src={bargaviIcon}
                alt=""
                />
                <FontAwesomeIcon className="top-search-icon" icon={faSearch} />
            </div>
        </div>
      
    )
}
