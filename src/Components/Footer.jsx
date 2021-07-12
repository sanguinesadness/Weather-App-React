import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <h3 className="credits">Rustam, {new Date().getFullYear()} &copy;</h3>
            <a className="arrow-link underline" target="_blank" rel="noopener noreferrer" href="https://github.com/sanguinesadness/Weather-App-React">GitHub</a>
        </footer>
    )
}

export default Footer
