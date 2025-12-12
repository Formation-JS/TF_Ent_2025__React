import clsx from 'clsx';
import style from './Welcome.module.scss';

/**
 * Composant React "Welcome"
 */
export default function Welcome({ name, age = 18 }) {

    return (
        <>
            <p className={style['welcome'] + ' ' + style['welcome-title']}>
                Bienvenue {name} sur l'application React
            </p>
            <p className={clsx(style['welcome'], style['welcome-desc'])}>
                Vous avez {age} ans
            </p>
        </>
    );
}