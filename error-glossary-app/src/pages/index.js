import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Developer Reference</span>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            {siteConfig.tagline}
          </p>
          <p className={styles.heroDescription}>
            Stop copy-pasting error messages into search engines. Get clear, human-readable
            explanations with real code examples that help you understand <em>why</em> errors
            happen and how to prevent them.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.heroButton)}
              to="/docs/intro">
              Browse Errors
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.heroButtonSecondary)}
              to="/docs/python/type-error-nonetype-not-iterable">
              See an Example
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Errors Explained</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Languages</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>Free</span>
              <span className={styles.statLabel}>Forever</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function SearchSection() {
  return (
    <section className={styles.searchSection}>
      <div className="container">
        <div className={styles.searchContent}>
          <Heading as="h2" className={styles.searchTitle}>
            Find Your Error
          </Heading>
          <p className={styles.searchDescription}>
            Use the search bar in the navigation to quickly find explanations for any error message.
            Just paste your error and we'll help you understand it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Friendly Error Explanations"
      description="Error Glossary provides friendly, human-readable explanations for cryptic programming error messages. Understand why errors happen and how to fix them.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <SearchSection />
      </main>
    </Layout>
  );
}
