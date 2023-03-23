import styles from './FourthSection.module.scss';

import { comments_db } from '@/db/comments.db';

const FourthSection = () => {
  return (
    <section className={styles.fourth__section}>
      <h1>Latest Comments</h1>
      <div className={styles.wrapper}>
        {comments_db?.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.head}>
              <h3>{item.name}</h3>
              <p>{item.title}</p>
            </div>
            <div className={styles.content}>
              <b>{item.author}</b>
              <p>{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourthSection;
