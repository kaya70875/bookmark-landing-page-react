import './_Hero.scss'
import heroImg from '../assets/illustration-hero.svg'

export default function Hero() {
  return (
    <main className="hero container">
        <div className="hero__main">
            <header className="hero__header">
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            </header>
            <div className="hero__buttons">
                <button className="primary">Get it on Chrome</button>
                <button className="secondary">Get it on Firefox</button>
            </div>
        </div>
        <div className="hero__img">
            <img src={heroImg} alt="hero-img" />

            <div className="bg"></div>
        </div>
    </main>
  )
}
