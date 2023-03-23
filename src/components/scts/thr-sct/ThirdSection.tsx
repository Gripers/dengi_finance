import styles from './ThirdSection.module.scss';

import Image from 'next/image';

const ThirdSection = () => {
  return (
    <section className={styles.third__section}>
      <h1>Brand Mentions and Reviews Analytics</h1>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Image src='/img/third.svg' alt='' fill />
        </div>
        <div className={styles.right}>
          <p>
            Here you can see the graph of added reviews, the number, and
            dynamics of their publication by month. You will clearly see the
            slander about the company and can quickly react to it, or find out
            the positive qualities. As well as view statistics and choose a
            reliable partner for investment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
