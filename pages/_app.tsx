import '../styles/googlefont.css';
import '../styles/globals.scss';
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ConfigProvider, Spin } from 'antd';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.asPath ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url: string) => setLoading(false);

    const scrollTop = () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    router.events.on('routeChangeComplete', scrollTop);
    setLoading(false);
  }, [router]);

  return (
    <ConfigProvider>
      <Component {...pageProps} />
      {loading && (
        <div className='wrap-loading'>
          <Spin size='large' />
        </div>
      )}
    </ConfigProvider>
  );
}

export default MyApp;
