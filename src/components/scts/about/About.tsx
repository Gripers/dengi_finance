import styles from './About.module.scss'

const About = () => {
  return (
    <section className={styles.about}>
      <h1>About Us</h1>
      <p>
        Dengi-finance is a reviewer where we publish information about companies
        that offer earnings over the Internet. We provide the opportunity to
        leave comments for customers of these companies. All comments are
        moderated to prevent spam and company reputation wrapping. Also on our
        site, you can find detailed reviews for all similar companies, from
        investment funds to binary brokers. All of our written articles are
        based on interactions with specific companies and checked by financial
        experts. So, our materials are the best way to get info about companies
        you plan on working with.
      </p>
    </section>
  );
};

export default About;
