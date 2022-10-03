// import StellarSdk from "stellar-sdk";

export enum NETWORK_NAMES {
  TESTNET = "Test Net",
  PUBNET = "Main Net",
}

export enum NETWORKS {
  PUBLIC = "PUBLIC",
  TESTNET = "TESTNET",
}

export enum NETWORK_URLS {
  PUBLIC = "https://api.mainnet.minepi.com",
  TESTNET = "https://api.testnet.minepi.com",
}

export interface NetworkDetails {
  network: string;
  networkName: string;
  networkUrl: string;
  networkPassphrase: string;
}

export const MAINNET_NETWORK_DETAILS: NetworkDetails = {
  network: NETWORKS.PUBLIC,
  networkName: NETWORK_NAMES.PUBNET,
  networkUrl: NETWORK_URLS.PUBLIC,
  networkPassphrase: "Pi Mainnet",
};

export const TESTNET_NETWORK_DETAILS: NetworkDetails = {
  network: NETWORKS.TESTNET,
  networkName: NETWORK_NAMES.TESTNET,
  networkUrl: NETWORK_URLS.TESTNET,
  networkPassphrase: "Pi Testnet",
};

export const DEFAULT_NETWORKS: Array<NetworkDetails> = [
  MAINNET_NETWORK_DETAILS,
  TESTNET_NETWORK_DETAILS,
];
