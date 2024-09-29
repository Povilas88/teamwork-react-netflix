import netflix from './Logonetflix.png';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={netflix} alt="netflix" />
            </div>
            <div className={style.signInContainer}>
                <div>
                    <select>
                        <option value="English">English</option>
                        <option value="Lithuanian">Lithuanian</option>
                    </select>
                </div>
                <button>Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
