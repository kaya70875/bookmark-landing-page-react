import './_Article.scss'
import HeroImg from './utils/HeroImg'
import articleImg from '../assets/illustration-features-tab-1.svg';
import intelligentImg from '../assets/illustration-features-tab-2.svg';
import sharingImg from '../assets/illustration-features-tab-3.svg';
import { useState } from 'react';

export default function Article() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: 'Simple Bookmarking',
      description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
      img: articleImg
    },
    {
      title: 'Speedy Searching',
      description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
      img: intelligentImg
    },
    {
      title: 'Easy Sharing',
      description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
      img: sharingImg
    }
  ];

  return (
    <article className="article container">
      <header className='features-header'>
        <h2>Features</h2>
        <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      </header>

      <section className="features-section">
        <ul className="options__section">
          {cards.map((card, index) => (
            <li
              key={index}
              className={`options-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <a>{card.title}</a>
            </li>
          ))}
        </ul>

        <div className="article-hero-section">
          <HeroImg currentImg={cards[activeIndex].img} isReverse={true} />
          <div className="article-hero">
            <header className="article-hero-header">
              <h2>{cards[activeIndex].title}</h2>
              <p>{cards[activeIndex].description}</p>
            </header>
            <div className="button-wrapper">
              <button className="primary">More Info</button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
