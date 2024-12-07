import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button, Switch } from 'antd';
import { useTheme } from '@/providers/theme-provider';
import images from '@/assets/images/logo.png';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src={images}
              alt="PIL-GROUP Logo"
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <span className="text-xl font-semibold text-gray-900 dark:text-white">SSO PIL</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button 
              type="primary"
              size="large"
              className="font-medium px-6"
            >
              Sign In
            </Button>
            <Switch
              checkedChildren="🌙"
              unCheckedChildren="☀️"
              checked={theme === 'dark'}
              onChange={toggleTheme}
              className="bg-primary dark:bg-secondary"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
