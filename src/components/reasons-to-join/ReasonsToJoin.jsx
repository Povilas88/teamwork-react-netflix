import { Reason } from "./ReasonToJoin";
import style from './ReasonsToJoin.module.css';
import one from './img/one.webp';
import two from './img/two.webp';
import three from './img/three.webp';
import four from './img/four.webp';

export function Reasons() {
    return (
        <section className={style.mainCardContainer}>
            <div className={style.h2Container}>
                <h2>More Reasons to Join</h2>
            </div>
            <div className={style.cardContainer}>
                <Reason title="Enjoy on your TV"
                    description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                    icon={one} alt='one' />
                <Reason title="Download your shows to watch offline"
                    description="Save your favorites easily and always have something to watch."
                    icon={two} alt='two' />
                <Reason title="Watch everywhere"
                    description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
                    icon={three} alt='three' />
                <Reason title="Create profiles for kids"
                    description="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
                    icon={four} alt='four' />
            </div>
        </section>
    );
}
