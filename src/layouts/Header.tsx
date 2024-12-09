import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Switch } from 'antd';
import { useTheme } from '@/providers/themeProvider';
import images from '@/assets/images/logo.png';
import styles from './Header.module.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href="/" className={styles.brand}>
            <Image
              src={images}
              alt="PIL-GROUP Logo"
              width={32}
              height={32}
              className={styles.logo}
            />
            <span className={styles.brandText}>
              SSO PIL
            </span>
          </Link>
          
          <Switch
            checkedChildren="🌙"
            unCheckedChildren="☀️"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            className={styles.themeSwitch}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
