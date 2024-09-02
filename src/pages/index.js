import clsx from "clsx";
import Admonition from "@theme/Admonition";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <p>
            <Admonition type="info">
              Le site du club UKT fait peau neuve et n'est pas encore terminé.
              <br />
              En attendant veuillez trouver ci-dessous toutes les informations
              nécessaires pour cette rentrée 2024-2025. Si vous souhaitez des
              informations concernant les tarifs des différentes activités, nous
              vous demandons de bien vouloir nous adresser un mail à
              uktjmp@free.fr ou d'appeler le 09 50 09 95 19.
              <br />
              <br />
              <strong>IMPORTANT : </strong> Laissez votre message avec votre
              numéro de téléphone. Nous filtrons les appels et ne répondons
              qu'aux personnes qui souhaitent avoir des renseignements.
            </Admonition>
            <img src="./img/ukt/noon.jpg"></img>
            <br />
            <br />
            <br />
            <Link
              className="button button--secondary button--lg"
              to="/horaires-des-cours"
            >
              Horaires et lieux des cours
            </Link>
            <br />
            <br />
            <Link
              className="button button--secondary button--lg"
              to="/inscriptions"
            >
              Fiche d'Inscriptions
            </Link>
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
