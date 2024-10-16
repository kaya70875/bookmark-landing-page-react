import { useState } from 'react';
import './_Faq.scss'
import chevronIcon from '../assets/icon-arrow.svg'
import chevronClose from '../assets/icon-close.svg'

export default function Faq() {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is Bookmark?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        },
        {
            question: "How can I request a new browser?",
            answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
        },
        {
            question: "Is there a mobile app?",
            answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
        },
        {
            question: "What about other Chromium browsers?",
            answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at"
        }
    ]

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq container">
            <header className="features-header">
                <h2>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            </header>
            <ul className="faq-list">
                {faqs.map((faq, index) => (
                    <li key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                        <div className="line"></div>
                        <div className="faq-card" onClick={(e) => {
                            toggleFAQ(index);
                            e.currentTarget.classList.toggle('active');
                        }}>
                            <h3 className="faq-question">{faq.question}</h3>
                            <button className="faq-question" onClick={() => {
                                toggleFAQ(index);
                            }}>
                                <img src={activeIndex === index ? chevronClose : chevronIcon} alt="chevron icon" />
                            </button>
                        </div>
                        <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="faq-button-wrapper">
                <button className="primary">More Info</button>
            </div>
        </section>
    );
};
