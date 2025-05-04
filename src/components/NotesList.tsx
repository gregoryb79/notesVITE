import { PropsWithChildren } from "react";
import styles from "./NotesList.module.scss";

export function NotesList({children}:PropsWithChildren) {
  return (
    <ul className={styles.root}>
        {children}
    </ul>
  )
}