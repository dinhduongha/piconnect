import StellarSdk from "stellar-sdk";

const TESTNET = "Pi Testnet";
const PUBNET = "PI TESTNET";

export interface NetworkDetails {
  isTestnet: boolean;
  network: string;
  networkName: string;
  otherNetworkName: string;
  networkUrl: string;
  networkPassphrase:
    | typeof StellarSdk.Networks.TESTNET
    | typeof StellarSdk.Networks.PUBLIC;
}

export const MAINNET_NETWORK_DETAILS = {
  network: "PUBLIC",
  networkName: PUBNET,
  otherNetworkName: TESTNET,
  networkUrl: "https://api.testnet.minepi.com",
  networkPassphrase: StellarSdk.Networks.PUBLIC,
} as NetworkDetails;

export const TESTNET_NETWORK_DETAILS = {
  network: "TESTNET",
  networkName: TESTNET,
  otherNetworkName: PUBNET,
  networkUrl: "https://api.testnet.minepi.com",
  networkPassphrase: StellarSdk.Networks.TESTNET,
} as NetworkDetails;

export const getNetworkDetails = (isTestnet: boolean) => {
  const detailsObj = isTestnet
    ? { ...TESTNET_NETWORK_DETAILS }
    : { ...MAINNET_NETWORK_DETAILS };

  const {
    network,
    networkName,
    otherNetworkName,
    networkUrl,
    networkPassphrase,
  } = detailsObj;

  return {
    isTestnet,
    network,
    networkName,
    otherNetworkName,
    networkUrl,
    networkPassphrase,
  };
};
