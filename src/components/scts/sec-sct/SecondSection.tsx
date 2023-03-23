import styles from './SecondSection.module.scss';

const SecondSection = () => {
  return (
    <section className={styles.second__section}>
      <h1>Investor Academy</h1>
      <p>
        Want to learn how to invest or stay up-to-date on all the financial
        news? Then go to Investor Academy. There are only current news, tips,
        and investment articles.
      </p>
      <button>Read more</button>
    </section>
  );
};

export default SecondSection;
