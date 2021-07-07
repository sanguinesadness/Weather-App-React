import './Styles/style.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import CitySelector from './Components/CitySelector';
import ThemeSelector from './Components/ThemeSelector';
import WeatherCards from './Components/WeatherCards';
import DetailedInfo from './Components/DetailedInfo';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { VscArrowLeft } from 'react-icons/vsc'

function App() {
    // OpenWeather API key
    const apiKey = "ee8f5e36161b13d12b0e5044d2bbc117";

    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

    const appThemes = Object.freeze({
        light: "light-theme",
        dark: "dark-theme"
    });

    const [selectedCity, setSelectedCity] = useState();
    const [appTheme, setAppTheme] = useState(appThemes.light);
    const [selectedCard, setSelectedCard] = useState([]);

    // indicates whether resubmission API request is needed or not
    const [fetchData, setFetchData] = useState(true);

    return (
        <Router>
            <div className={`container ${appTheme}`}>
                <Header monthNames={monthNames}/>
                <div className="content">
                    <Route path="/" exact render={() => (
                        <div>
                            <div className="content-header">
                                <CitySelector selectedCity={selectedCity} 
                                              setSelectedCity={setSelectedCity} 
                                              setFetchData={setFetchData}/>
                                <ThemeSelector appThemes={appThemes} appTheme={appTheme} setAppTheme={setAppTheme} />
                            </div>
                            <div className="content-body">
                                <WeatherCards key={selectedCity ? selectedCity.id : 0} apiKey={apiKey} amount={10} 
                                              cityId={selectedCity ? selectedCity.id : 0} monthNames={monthNames}
                                              setSelectedCard={setSelectedCard} 
                                              fetchData={fetchData} currentForecast={selectedCard.allInfo}/>
                            </div>
                        </div>
                    )} />
                    <Route path="/detailed" render={() => (
                        <div>
                            <div className="content-header">
                                <Link className="button with-icon" to="/" onClick={() => setFetchData(false)}>
                                    <VscArrowLeft/>
                                    <span>Home</span>
                                </Link>
                                {
                                    selectedCard && selectedCity &&
                                    <h4 className="selected-city-date">
                                        <span className="city-name">
                                            {selectedCity ? selectedCity.name : "No city selected"}
                                        </span>
                                        <span className="separator"> — </span>
                                        <span className="date">
                                            {selectedCard.date ? `${selectedCard.date.month} ${selectedCard.date.day}, ${selectedCard.date.year}` : "No card selected"}
                                        </span>
                                    </h4>
                                }
                                <ThemeSelector appThemes={appThemes} appTheme={appTheme} setAppTheme={setAppTheme} />
                            </div>
                            <div className="content-body">
                                <DetailedInfo setFetchData={setFetchData} city={selectedCity} forecast={selectedCard.forecast}/>
                            </div>
                        </div>
                    )} />
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
