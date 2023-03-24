import { signOut, useSession } from "next-auth/react";
import styles from "./header.module.css";

const Header: React.FC = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    session && (
      <header className={styles.header}>
        <div className={styles.signedInStatus}>
          <div
            className={`nojs-show ${
              !session && loading ? styles.loading : styles.loaded
            }`}
          >
            {session?.user && (
              <>
                {session.user.image && (
                  <span
                    style={{ backgroundImage: `url('${session.user.image}')` }}
                    className={styles.avatar}
                  />
                )}
                <span className={styles.signedInText}>
                  <small>Signed in as</small>
                  <br />
                  <strong>{session.user.name ?? session.user.email}</strong>
                </span>
                <a
                  href={`/api/auth/signout`}
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign out
                </a>
              </>
            )}
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
