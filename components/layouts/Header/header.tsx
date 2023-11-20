import classes from "./header.module.css";
import Link from "next/link";
export default function Header() {
    return (
        <section className={classes.section__navbar}>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="col-2">
                        <h2 className={classes.section__title}>Jari van Kaam</h2>
                    </div>
                    <div className="col-2 flex g-20 items-center">
                        <Link href="/">Home</Link>
                        <Link href="/project">Projects</Link>
                        <Link href="/">Buy me a coffee</Link>
                        <Link href="/">Linkedin</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}