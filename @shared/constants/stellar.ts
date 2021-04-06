import StellarSdk from "stellar-sdk";

declare const PRODUCTION: boolean;

const TESTNET = "Pi Testnet";
const PUBNET = "Pi Network";

export const isTestnet = !PRODUCTION;

export const NETWORK = isTestnet ? "TESTNET" : "PUBLIC";

export const NETWORK_NAME = isTestnet ? TESTNET : PUBNET;

export const OTHER_NETWORK_NAME = !isTestnet ? TESTNET : PUBNET;

export const NETWORK_URL = isTestnet
  ? "https://api.testnet.minepi.com"
  : "https://api.testnet.minepi.com";

export const NETWORK_PASSPHRASE = isTestnet
  ? StellarSdk.Networks.TESTNET
  : StellarSdk.Networks.PUBLIC;
