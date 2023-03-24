import { authOptions } from "@/server/auth";
import styles from "@/styles/Signin.module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth/next";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

interface Props {
  providers: unknown;
  csrfToken: string | undefined;
}

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div className={styles.wrapper} />
      <div className={styles.content}>
        <div className={styles.cardWrapper}>
          <Image
            src="/kk-selters-logo-app.png"
            width={196}
            height={196}
            alt="KK Selters Logo"
            style={{ marginBottom: "20px" }}
          />
          <section className={styles.cardContent}>
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <div key={provider.name} style={{ marginBottom: 0 }}>
                    <button onClick={() => signIn(provider.id)}>
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
            </>
          </section>
        </div>
      </div>
      <img
        src="/login_pattern.svg"
        alt="Pattern Background"
        className={styles.styledPattern}
      />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
