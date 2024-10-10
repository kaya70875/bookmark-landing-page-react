import './_DownloadSection.scss';
import chromeImg from '../assets/logo-chrome.svg';
import firefoxImg from '../assets/logo-firefox.svg';
import operaImg from '../assets/logo-opera.svg';

export default function DownloadSection() {

    const browsersCard = [
        {
            title: 'Add to Chrome',
            description: 'Minimum version 62',
            img: chromeImg,
            margin: '0'
        },
        {
            title: 'Add to Firefox',
            description: 'Minimum version 55',
            img: firefoxImg,
            margin: '3rem'
        },
        {
            title: 'Add to Opera',
            description: 'Minimum version 46',
            img: operaImg,
            margin: '6rem'
        }
    ];

    return (
        <section className="download-section container">
            <header className="features-header">
                <h2>Download the extension</h2>
                <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            </header>

            <div className="browsers-section">
                {browsersCard.map(browser => (
                    <div className="browser-card" style={{ marginTop: browser.margin }}>
                        <div className="browser-img">
                            <img src={browser.img} alt={browser.title} />
                        </div>
                        <div className="browser-details">
                            <h3>{browser.title}</h3>
                            <p>{browser.description}</p>
                        </div>
                        <button className="primary">Add & Install Extension</button>
                    </div>
                ))}

            </div>
        </section>
    )
}
