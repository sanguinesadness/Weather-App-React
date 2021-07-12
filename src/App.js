import './Styles/style.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import CitySelector from './Components/CitySelector';
import ThemeSelector from './Components/ThemeSelector';
import WeatherCards from './Components/WeatherCards';
import DetailedInfo from './Components/DetailedInfo';
import SelectedCityDateLabel from './Components/SelectedCityDateLabel';
import MediaQuery from 'react-responsive';
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
            <div className={`main-wrapper ${appTheme}`}>
                <div className="container__wrapper">
                    <div className="container">
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
                                        <MediaQuery minWidth={1201}>
                                            <>{   
                                                selectedCard && selectedCity &&
                                                <SelectedCityDateLabel cityName={selectedCity.name} date={selectedCard.date}/>
                                            }</>
                                        </MediaQuery>
                                        <ThemeSelector appThemes={appThemes} appTheme={appTheme} setAppTheme={setAppTheme} />
                                    </div>
                                    <div className="content-body">
                                    <MediaQuery maxWidth={1200}>
                                        <>{
                                            selectedCard && selectedCity &&
                                            <SelectedCityDateLabel cityName={selectedCity.name} date={selectedCard.date} />
                                        }</>
                                    </MediaQuery>
                                        <DetailedInfo forecast={selectedCard.forecast} city={selectedCity} />
                                    </div>
                                </div>
                            )} />
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
