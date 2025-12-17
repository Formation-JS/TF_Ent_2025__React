import style from './LoadingScreen.module.css';

// Source : https://cssloaders.github.io/
export default function LoadingScreen() {

    return (
        <div  className={style['loader-container']}>
            <span className={style['loader']}></span>
        </div>
    )
}