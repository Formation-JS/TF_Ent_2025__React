import catImage from './../../assets/images/cat.png';
import style from './Header.module.css'

export default function Header() {

    return (
        <header className={style['header']}>
            <img src={catImage} alt='Chat rose tout mignon'/>
            <h1>Exercice</h1>
        </header>
    )
}