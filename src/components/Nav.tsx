import { PropsWithChildren } from "react";
import styles from "./nav.module.scss";

type NavProps = PropsWithChildren<{
    username: string;
  }>
export function Nav ({username, children}: NavProps) {
    return(
        <nav className={styles.nav}>
            <button className={styles.button}>LogOut</button>
            <p className={styles.p}>Hello, {username}</p>
        </nav>
        
    )
}