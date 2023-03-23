import styles from './FirstSection.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { first_db } from '@/db/fst.db';

const FirstSection = () => {
  return (
    <section className={styles.first__section}>
      <h1>You will be interested</h1>
      <div className={styles.wrapper}>
        {first_db?.map((item) => (
          <Link key={item.id} href={item.route}>
            <div className={styles.image}>
              <Image src={item.pic} alt='' fill />
            </div>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FirstSection;
