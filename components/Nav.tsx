import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Nav.module.css";

export default function Nav() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a
          className={`${router.pathname === "/" ? styles.active : ""} ${
            styles.link
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
