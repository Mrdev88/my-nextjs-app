import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>My next.js test</h1>
        <code className={styles.code}>
          Hello
        </code>
        <div>
          <a
            href="https://mahdiruizonweb.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' Mahdi Ruiz'}
            <Image
              src="/wimpod.jpg"
              alt="Wimpod"
              className={styles.vercelLogo}
              width={360}
              height={241}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://github.com/Mrdev88"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Github <span>-&gt;</span>
          </h2>
          <p>Follow me on github</p>
        </a>

        <a
          href="https://snap.berkeley.edu/user?username=mrdev88"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Snap! <span>-&gt;</span>
          </h2>
          <p>My snap! profile</p>
        </a>

        <a
          href="https://www.youtube.com/@mahdiruiz886"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Youtube <span>-&gt;</span>
          </h2>
          <p>Subscribe to my youtube channel</p>
        </a>

        <a
          href="https://replit.com/@Mrdev88"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Replit <span>-&gt;</span>
          </h2>
          <p>
            Follow me on replit
          </p>
        </a>
      </div>
    </main>
  )
}
