/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import style from './Accordion.module.css';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Netflix?",
      answer: (
        <>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
          <br /><br />
          You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
        </>
      )
    },
    {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. No extra costs, no contracts."
    },
    {
      question: "Can I watch Netflix offline?",
      answer: (
        <>
          Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.
          <br /><br />
          You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
        </>
      )
    },
    {
      question: 'How do I cancel?',
      answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
    },
    {
      question: 'What can I watch on Netflix?',
      answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
    },
    {
      question: 'Is Netflix good for kids?',
      answer: (
        <>
          The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
          <br /><br />
          Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
        </>
      )
    },
    {
      question: 'Why am I seeing this language?',
      answer: 'Your browser preferences determine the language shown here.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ background: 'black' }}>
      <div className={style.FAQContainer}>
        <div className={style.h2Container}>
          <h2>Frequently Asked Questions</h2>
        </div>
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className={style.FAQH3} onClick={() => toggleAccordion(index)} style={{ cursor: 'pointer' }}>
              {faq.question}<span style={{ float: 'right', fontSize: 50, fontWeight: 400, marginTop: -15 }}>+</span>
            </h3>
            {openIndex === index && (
              <p className={style.FAQP}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
