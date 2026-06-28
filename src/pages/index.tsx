import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to AI-DevOps learning Hub - Powered By Bands
        </Heading>
        <p className="hero__subtitle">We are going to learn how to start AI learning for Infra Engineers and Implement the use case into Daily Life Cycle</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Learn AI for DevOps">
      <HomepageHeader />
      <main>
        {/* We will add content here later */}
      </main>
    </Layout>
  );
}
