import { useState } from 'react';
import styles from './Drawer.module.scss';

import Drawer from 'react-modern-drawer';
import Image from 'next/image';
import Link from 'next/link';

const DrawerComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setOpen(false);
    document.body.removeAttribute('style');
  };

  return (
    <>
      <button onClick={handleOpen}>
        <Image src='/img/burger.svg' alt='' fill />
      </button>
      <Drawer open={open} direction='right' className={styles.drawer}>
        <div className={styles.box}>
          <div className={styles.head}>
            <h2>Меню</h2>
            <Image
              src='/img/close.svg'
              alt=''
              width={20}
              height={20}
              onClick={handleClose}
            />
          </div>
          <div className={styles.body}>
            <ul>
              <li>
                <Link href='/forex-brokers'>Forex Brokers</Link>
              </li>
              <li>
                <Link href='/binary-options'>Binary Options</Link>
              </li>
              <li>
                <Link href='/crypto-projects'>Crypto Projects</Link>
              </li>
              <li>
                <Link href='/hyip'>HYIP&apos;S</Link>
              </li>
            </ul>
            <button>Investor Academy</button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
