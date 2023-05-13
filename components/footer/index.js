import styles from "./styles.module.css";
import Link from "next/link"
function Footer() {
  return (
    <div className={styles.footer}>
        Made with ❤️ by&nbsp;
      <Link href="https://twitter.com/_mehmetpekcan" target="_blank">
      </Link>
    </div>
  )
}

export default Footer;