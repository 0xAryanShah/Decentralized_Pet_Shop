# Decentralized Pet Shop

The Adopt Pet dApp is a demonstration of an end-to-end decentralized application i.e. Web 3.0. This allows you to adopt a pet by paying its fee using MetaMask on Rinkeby network.


dApp URL: https://ipfs.io/ipfs/QmSGjVhzDhtyzyyPBRmsPRtaq7B4AKTFMkncSLx2dGhGKE/ 
(Use Rinkeby with MetaMask to interact with the dApp and adopt a cute dog of your choice)


## Pre-requisites

1. NodeJS (version 8.9.x)

2. Truffle
```
    npm install -g truffle
```
3. Ganache from [Truffle Website](!https://truffleframework.com/ganache)
```
    npm install -g ganache-cli
```

## How to run

1. Open a terminal, *run `ganache-cli` and keep it running*
2. Open another (2nd) terminal and run the following:
```
    $ git clone https://github.com/0xAryanShah/Decentralized_Pet_Shop.git
    $ cd pet-shop
```

3. To interact with smart contract from CLI:
```
    $ truffle compile --reset
    $ truffle migrate --reset
    $ truffle test
```

OR

```
    truffle develop
    develop> compile --reset
    develop> migrate --reset
    develop> test
```

You should see the following:

```
$ truffle test
Using network 'development'.

Compiling ./test/TestAdoption.sol...


  TestAdoption
    ✓ testUserCanAdoptPet (92ms)
    ✓ testGetAdopterAddressByPetId (169ms)
    ✓ testGetAdopterAddressByPetIdInArray (136ms)


  3 passing (16s)
```

4. To access the dApp UI, run the following:
```
    npm install
    npm run dev
```

5. To deploy the smart contract on a testnet (e.g. Rinkeby), do the following:

* Create an infura account (free account allows you to have 3 projects)
* Modify `truffle-config.js` to supply necessary infura project information.
* Add a file at root `.secret` and enter the mnemonic that generates your accounts.
* run the following command: `$ truffle migrate network --rinkeby`

You should see something similar to the following:

```
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 7006834


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x26794bc380619f0568749b42f0342631143f967b1d4f144f24336c8e8a15088f
   > Blocks: 1            Seconds: 17
   > contract address:    0xd010ae7c9e7adbD855cE76f1259BE1483E4377d1
   > account:             0x6330BfA7D213916a95FDbf0f1c7b51986da07D3A
   > balance:             0.977574987
   > gas used:            284908
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00569816 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00569816 ETH


2_deploy_contracts.js
=====================

   Deploying 'Adoption'
   --------------------
   > transaction hash:    0xd39163b8cfd697291f6aa7fa0fe73a5802985d96a677af6e3b9c1260e150d408
   > Blocks: 0            Seconds: 9
   > contract address:    0x83686F6357757Eb0feb09358c931577D3D96705B
   > account:             0x6330BfA7D213916a95FDbf0f1c7b51986da07D3A
   > balance:             0.969663887
   > gas used:            353521
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00707042 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00707042 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.01276858 ETH
```

## Deploying to IPFS (putting pet-shop on permanent web)

To have a complete decentralized application, it is not only required to keep the computation (backend) in the public blockchain but also the files (frontend) to peer-to-peer network that are served to the client. Here comes the IPFS.

```
$ mkdir dist/
$ rsync -r src/ dist/
$ rsync -r build/contracts/ dist/
$ ls -l dist/
```

1. Manual way
```
$ ipfs add -r dist/

$ ipfs name publish QmT6SgXKChuzz9nCTu8ZNtc8y7wLR3DjvH3rsEkcreiSDG
Published to QmPXvSsJLEEdCX2P7v8ztkuoDgjCzxujXsmkocLmrJ9EfD: /ipfs/QmT6SgXKChuzz9nCTu8ZNtc8y7wLR3DjvH3rsEkcreiSDG
```

2. Using a package
Another way to deploy painlessly is to use a package `ipfs-deploy`:

```
$ mv dist/ site/
$ npm install -g ipfs-deploy
$ ipd -p infura
```

## Access the dApp in the Browser

While it is fine to access the dApp using Chrome, however, why not have a cool breeze of fully decentralized web; Web 3.0? Give Brave browser a try :)

https://ipfs.io/ipfs/QmSGjVhzDhtyzyyPBRmsPRtaq7B4AKTFMkncSLx2dGhGKE/
