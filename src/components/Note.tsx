import { PropsWithChildren } from "react";
import styles from "./note.module.scss";

type MainProps = PropsWithChildren<{
  date: string;  
  title: string;
}>
export function Note ({date, title, children}: MainProps) {
  return (
    <li className={styles.root}>
        <span>{date} - </span>
        <span>{title}</span>
    </li>    
  )
}