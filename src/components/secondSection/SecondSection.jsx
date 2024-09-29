import card1 from './card1.png';
import card2 from './card2.png';
import card3 from './card3.png';
import card4 from './card4.png';
import card5 from './card5.png';
import style from './SecondSection.module.css';

const SecondSection = () => {
    return (
        <div className={style.secondContainer}>
            <div className={style.firstDiv}>
                <h2>Trending Now</h2>
                <div className={style.selectContainer}>
                    <select>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Global">Global</option>
                    </select>
                    <select>
                        <option value="Movies">Movies</option>
                        <option value="TV shows">TV shows</option>
                    </select>
                </div>
            </div>
            <div className={style.cardsContainer}>
                <img src={card1} alt="card1Logo" />
                <img src={card2} alt="card2Logo" />
                <img src={card3} alt="card3Logo" />
                <img src={card4} alt="card4Logo" />
                <img src={card5} alt="card5Logo" />
            </div>
        </div>
    );
};

export default SecondSection;
