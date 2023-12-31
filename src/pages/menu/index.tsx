import style from './menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Menu() {
    return (
        <main>
            <nav className={style.menu}>
                <Logo />
            </nav>
        </main>
    )
}