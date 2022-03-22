import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a
          style={{
            color: router.pathname === "/" ? "red" : "blue",
            transition: "all .5s linear",
          }}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          style={{
            color: router.pathname === "/about" ? "red" : "blue",
            transition: "all .5s linear",
          }}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
