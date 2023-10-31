import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';

function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);



    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();


    useEffect(() => {

        // make an api call after every key press
        // but if the difference between 2 API calls is <200ms
        // declined the api call

        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestion(searchCache[searchQuery]);
            }
            else {
                getSearchSuggestions();
            }

        }, 200);
        return () => {
            clearTimeout(timer);
        };


    }, [searchQuery]);

    /**
     * 
     * key -icon
     * - render the component
     * -useEffect();
     * -start timer=>make api call after 200ms
     * 
     * key -ip
     * - destroy the component (usreffect return method)
     * -renderr the component
     * -useeffect
     * -start timer=>make api call after 200ms new timer
     * 
     * settimeout(200)=make an api call
     * 
     * settimout(200)-clear this 
     * 
     */

    const getSearchSuggestions = async () => {
        console.log("API CALL -" + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestion(json[1]);
        //   console.log(json[1]);

        dispatch(cacheResults({
            [searchQuery]: json[1],
        }))
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());

    };
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1 '>

                <img
                    onClick={() => toggleMenuHandler()}
                    className='h-8  cursor-pointer'
                    src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
                    alt="menu" />


                <a href="/">
                    <img
                        className='h-8  mx-2'
                        src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
                        alt="logo" />
                </a>

            </div>

            <div className='col-span-10 px-10'>
                <div>
                    <input className=' px-5 w-1/2 border border-gray-400  p-2 rounded-l-full' type="text"
                        value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)} />
                    <button className='border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full'>🔍search</button>
                </div>

                {showSuggestion && (
                    <div className='fixed bg-white py-2 px-2 w-[30rem] shadow-lg rounded-lg border border-gray-100'>
                        <ul>
                            {suggestion.map(s => <li key={s} className=' py-2 px-3 shadow-sm hover:bg-gray-100'>🔍{s}</li>)}

                        </ul>
                    </div>

                )}

            </div>

            <div className='col-span-1'>
                <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MmBOmXsxgjBhhfDh4FSeM9wsFRgC_2uPrE362dA&s" alt="user" />
            </div>
        </div>
    )
}

export default Header