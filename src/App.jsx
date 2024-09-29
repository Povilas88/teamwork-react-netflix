import './App.css';
import FirstSection from './components/firstSection/FirstSection';
import SecondSection from './components/secondSection/SecondSection';
import { Reasons } from './components/reasons-to-join/ReasonsToJoin';
import { Footer } from './components/footer/footer';
import FAQAccordion from './components/FAQ/Accordion';

function App() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <Reasons />
      <FAQAccordion />
      <Footer />
    </>
  );
}

export default App;
