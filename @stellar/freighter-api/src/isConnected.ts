declare global {
  interface Window {
    piconnect: boolean;
  }
}

export const isConnected = () => !!window.piconnect;
