import React, { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const NetworkWrapper: React.FC<Props> = ({ children }) => {
  const [isOnline, setIsOnline] = useState(true);

  const checkConnection = async () => {
    try {
      const response = await fetch('https://www.google.com/favicon.ico', {
        method: 'HEAD',
        mode: 'no-cors',
      });
      setIsOnline(true); // Even if we get no-cors response, assume we're online
    } catch (error) {
      setIsOnline(false);
    }
  };

  useEffect(() => {
    checkConnection();

    const interval = setInterval(checkConnection, 5000); // check every 5 seconds

    window.addEventListener('online', checkConnection);
    window.addEventListener('offline', checkConnection);

    return () => {
      clearInterval(interval);
      window.removeEventListener('online', checkConnection);
      window.removeEventListener('offline', checkConnection);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100 text-red-800 text-xl font-semibold">
        ⚠️ You are currently offline. Please check your internet connection.
      </div>
    );
  }

  return <>{children}</>;
};

export default NetworkWrapper;
