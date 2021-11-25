require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone stove cruise pulse coast hundred light army gather'; 
let testAccounts = [
"0x54145bf831efb5332cc9333c3ac3b6ee432a123d4c3aba3314d61bc822d18a86",
"0x14106d8b679efa639d4aa20a07cedaf6a3801a85bd013ddbde55277baf612fea",
"0xc6909c3b032071ff6352ae17a88243f346dae4e2e7d52adc2c0603289325fbfc",
"0xa2522dabfb6ac21dc06080a0da6b51b6b536b09a60134e1c08e49146dbd25496",
"0x002f5e7216ee1deb41b2912137849cba84f2ea86dce60c8b6797a98f58ae16a5",
"0xe9bbad2d344792693a76963d3102f5c6434daee2752adf6d24f9b766312870d5",
"0xee033f275dd6f09b85beb4dd14d9e3c1a886dc55ad3713c0ffef70ecb7b21a4f",
"0x84450f28733a74ec70c5be32a0374048136bb3d353acdb93f4ac6ec37e55e5a3",
"0x20a2d883ff2ded02d20f2ddff62d87e193debaeca0fbca4c0e3b0f46283bfa1a",
"0x537f9c87ae3e7d96c79f68083a681353d259458bb15b62a1ce016ac993929c3c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

