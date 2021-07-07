import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import cities from '../cities.json';

const CitySelector = ({selectedCity, setSelectedCity, setFetchData}) => {
    const [selectorVisible, setSelectorVisible] = useState(false);
    const [cityList, setCityList] = useState([]);
    const [userInput, setUserInput] = useState('');

    function useOutsideAlerter(ref) {
        useEffect(() => {
            // if clicked on outside of element
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setSelectorVisible(false);
                }
            }
    
            // bind the event listener
            document.addEventListener("click", handleClickOutside);
            return () => {
                // unbind the event listener on clean up
                document.removeEventListener("click", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function filterCityList(userInput) {
        if (!userInput || userInput.length < 3) {
            return;
        }

        setCityList(cities.filter(city => city.name.toLowerCase().includes(userInput.toLowerCase())));
    }

    function getCityFullname(city) {
        return `${city.name}, ${city.country}${city.state ? ', ' + city.state : ''}`;
    }

    return (
        <div className="city-selector" ref={wrapperRef}>
            <div className="selected-city active button with-icon" onClick={() => setSelectorVisible(!selectorVisible)}>
                <BsChevronDown/>
                <span>{selectedCity ? getCityFullname(selectedCity) : "No city selected"}</span>
            </div>
            {selectorVisible ?
                <div className="selector">
                    <input type="text" placeholder="Find City" 
                            value={userInput}
                            onChange={(e) => {
                                let inputValue = e.currentTarget.value;

                                // prevent double space input
                                while (inputValue.includes("  "))
                                {
                                    inputValue = inputValue.replace("  ", " ");
                                }

                                filterCityList(inputValue.trim());
                                setUserInput(inputValue);
                            }}/>
                    <div className="city-list__wrapper">
                        <div className="city-list">
                            {
                                cityList.length > 0 ? cityList.map(city =>
                                    <span className={selectedCity && selectedCity.id === city.id ? "city selected" : "city"}
                                          key={city.id} 
                                          onClick={() => {
                                              setSelectedCity(city);
                                              setSelectorVisible(false);
                                              setFetchData(true)}}>
                                        {getCityFullname(city)}
                                    </span>
                                )
                                : <span className="city-list-message">
                                    {userInput.length == 0 ? "Empty input" :
                                        userInput.length < 3 ? "3 characters min" :
                                            "Not found"}
                                </span>
                            }
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default CitySelector
