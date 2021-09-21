require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stone crawl remember coast hundred light army giggle'; 
let testAccounts = [
"0x679606936467797a3bf213a22f38e15bef1207a8fb80e5f9876ed63d74b6da33",
"0x54b496749b86ca3ebba907ee398c87c6378683507fbb49c29f88a780e9a78891",
"0x55425f762f7be4e1af9b0706ce884cf7cc6f02036e9a7cb024d423091c9c850c",
"0xc0c367d3a98d1b25c552c8fa83e86d4f19103949e2e3bcb08940c817b4778602",
"0x0816b1aa06306d9462fe0c4f40835b40e2c37f3587ac320b8e4751ef6cb6f502",
"0xff8dfd648f603d09ee8730d280ecc2777f5df9f8e984a61316c63153d6f43759",
"0xd7680f9c8324f72a3807d66264f63d9b6361b68db226c30441fe174d42b13d5c",
"0xd2c8a3caeee6fad5afcc1cb3edad5898f01ae9ed82c57c07fb99ec4a76316c73",
"0xaea04837f28aa902960fa672edf39bc4239964c095fd8e4ccd1ee309d12bd735",
"0x4872e856e1ee4b1a56f8029ec57987563990464d368b0921316e12f2478fc53c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


