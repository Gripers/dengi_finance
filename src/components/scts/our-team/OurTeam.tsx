import styles from './OurTeam.module.scss';

import Image from 'next/image';

import { team_db } from '@/db/team.db';

const OurTeam = () => {
  return (
    <section className={styles.our__team}>
      <h1>Our Team</h1>
      <p className={styles.dd}>
        The team working on the website includes professionals in the field of
        trading and investing. In the articles, they analyze in detail the
        activities of companies that offer their services for making money over
        the Internet. A financial expert carefully checks all analytics
        materials so that they are transparent and neutral. From our reviews,
        you can find out which companies in the trading and investment markets
        you can trust. You can also get acquainted with trends in these areas.
      </p>
      <div className={styles.wrapper}>
        {team_db?.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.top}>
              <Image src={item.pic} alt='' fill />
              <h2>{item.name}</h2>
              <p>{item.title}</p>
            </div>
            <div className={styles.bottom}>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
