import { PropsWithChildren } from "react";
import styles from "./main.module.scss";

type MainProps = PropsWithChildren<{
  title: string;
  nav: JSX.Element;
}>
export function Main ({title, nav, children}: MainProps) {
  return (
    <main className={styles.main}>
      {nav}
      <h2>{title}</h2>
      {children}
    </main>     
  )
}