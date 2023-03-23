import styles from './Navbar.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { useWindowSize, Size } from '@/hooks/useWindowSize';
import DrawerComponent from '@/components/drawer/DrawerComponent';

const Navbar = () => {
  const { width }: Size = useWindowSize();

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image src='/img/logo.svg' alt='' fill />
          </Link>
        </div>
        {width! > 900 ? (
          <nav className={styles.navigation}>
            <Link href='/forex-brokers'>Forex Brokers</Link>
            <Link href='/binary-options'>Binary Options</Link>
            <Link href='/crypto-projects'>Crypto Projects</Link>
            <Link href='/hyip'>HYIP&apos;S</Link>
          </nav>
        ) : null}
        <div className={styles.end}>
          {width! > 900 ? (
            <button>Investor Academy</button>
          ) : (
            <>
              <DrawerComponent />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
