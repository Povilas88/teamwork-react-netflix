import Navbar from './navbar/Navbar';
import style from './FirstSection.module.css';

const FirstSection = () => {
    return (
        <div className={style.firstContainer}>
            <div className="navBarContainer">
                <Navbar />
            </div>
            <div className={style.mainContainer}>
                <h1>Unlimited movies, TV shows, and more</h1>
                <p>Starts at EUR 7.99. Cancel anytime.</p>
                <p>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </p>
                <div className={style.emailContainer}>
                    <input type="text" placeholder="Email address" />
                    <button className="getStartedBtn">Get Started &gt; </button>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
