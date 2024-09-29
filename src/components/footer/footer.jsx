import style from './footer.module.css';

export function Footer() {
    return (
        <div className={style.footerContainer}>
            <p>
                Ready to watch? Enter your email to create or restart your
                membership.
            </p>
            <div className={style.signIn}>
                <button className={style.emailBtn}>Email address</button>
                <div className={style.getBtn}>
                    <p>Get Started</p>
                    <svg
                        height="20px"
                        width="20px"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                    </svg>
                </div>
            </div>
            <div className={style.footerQuest}>
                <a href="#">Questions? Contact us.</a>
                <div className={style.footerList}>
                    <div>
                        <a href="#">FAQ</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Privacy</a>
                        <a href="#">Speed Test</a>
                        <a href="#">Ad Choices</a>
                    </div>
                    <div>
                        <a href="#">Help Center</a>
                        <a href="#">Jobs</a>
                        <a href="#">Cookie Preferences</a>
                        <a href="#">Legal Guarantee</a>
                    </div>
                    <div>
                        <a href="#">Account</a>
                        <a href="#">Ways to Watch</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">Legal Notices</a>
                    </div>
                    <div>
                        <a href="#">Media Center</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Only on Netflix</a>
                    </div>
                </div>
            </div>
            <div className={style.languageChange}>
                <svg
                    height="20px"
                    width="20px"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7.75 2.75a.75.75 0 0 0-1.5 0v1.258a32.987 32.987 0 0 0-3.599.278.75.75 0 1 0 .198 1.487A31.545 31.545 0 0 1 8.7 5.545 19.381 19.381 0 0 1 7 9.56a19.418 19.418 0 0 1-1.002-2.05.75.75 0 0 0-1.384.577 20.935 20.935 0 0 0 1.492 2.91 19.613 19.613 0 0 1-3.828 4.154.75.75 0 1 0 .945 1.164A21.116 21.116 0 0 0 7 12.331c.095.132.192.262.29.391a.75.75 0 0 0 1.194-.91c-.204-.266-.4-.538-.59-.815a20.888 20.888 0 0 0 2.333-5.332c.31.031.618.068.924.108a.75.75 0 0 0 .198-1.487 32.832 32.832 0 0 0-3.599-.278V2.75Z"></path>
                    <path
                        fillRule="evenodd"
                        d="M13 8a.75.75 0 0 1 .671.415l4.25 8.5a.75.75 0 1 1-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 1 1-1.342-.67l4.25-8.5A.75.75 0 0 1 13 8Zm2.037 6.5L13 10.427 10.964 14.5h4.073Z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                <p>English</p>
                <svg
                    height="15px"
                    width="15px"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.2"
                    baseProfile="tiny"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z"></path>
                </svg>
            </div>
            <div className={style.lastLastLast}>
                <p>Netflix Lithuania</p>
            </div>
        </div>
    );
}
