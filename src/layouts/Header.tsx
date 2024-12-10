import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, useCallback } from 'react'
import { Switch } from 'antd';
import { useTheme } from '@/providers/themeProvider';
import images from '@/assets/images/logo.png';
import styles from './Header.module.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      role="banner"
      aria-label="Site header"
    >
      <div className={styles.wrapper}>
        <Link 
          href="/" 
          className={styles.brand}
          aria-label="Go to homepage"
        >
          <div className={styles.logoContainer}>
            <Image
              src={images}
              alt="PIL Logo"
              fill
              sizes="(max-width: 768px) 32px, 36px"
              priority
              className={styles.logo}
            />
          </div>
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
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        />
      </div>
    </header>
  );
};

export default Header;
