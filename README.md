<h1 align="center">
  <br>
  <a><img src="https://www.mdpi.com/logistics/logistics-03-00005/article_deploy/html/images/logistics-03-00005-g001.png" width="200"></a>
  <br>  
  Supply-Chain-Dapp
  <br>
</h1>

<p align="center">
  
  <a href="https://docs.godechain.com/welcome/">
    <img src="https://s3.coinmarketcap.com/static-gravity/thumbnail/medium/12b1f4d9727b4aab83cd5398bf6e080d.jpg" width="35" height='35'>
  </a>
  <a href="https://soliditylang.org/">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/Solidity.svg" width="80">       
  </a>
  <a href="https://reactjs.org/"><img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/react.png" width="80"></a>
  
  <a href="https://www.trufflesuite.com/">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/trufflenew.png" width="50">
  </a>
   &nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/web3">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/web3.jpg" width="60">
  </a>
</p>

<h4 align="center">A simple Supply Chain setup with <a href="https://docs.soliditylang.org/en/v0.8.4/" target="_blank">Solidity</a>.</h4>

<p align="center">
  <a >
    <img src="https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg">
       
  </a>
  
</p>



## Description
Supply chain is always hard to manage and requires a lot of admistrative machinery. However, when managed with smart contracts using blockchain, a lot of the paperwork is reduced.
Also it leads to an increase in the transparency and helps to build an efficient Root of Trust. Supply-chain-dapp is such an implementation of a supply chain management system which uses blockchain to ensure a transparent and secure transfer of product from the manufacturer to the customer via the online e-commerce websites. 
## Architecture
The smart contract is being written with Solidity which is then compiled, migrated and deployed using Truffle.js on the Gode Testnet blockchain network.The frontend uses Web3.js to communicate with the smart contract and Gode Testnet blockchain network and Meta Musk Wallet is connect to Gode Test Network to do Transaction between each component in Supply .
****
![https://raw.githubusercontent.com/faizack619/Supply-Chain-Gode-Blockchain/master/client/public/Supply%20Chain%20Design%20(1).png](https://raw.githubusercontent.com/faizack619/Supply-Chain-Gode-Blockchain/master/client/public/Supply%20Chain%20Design%20(1).png)

## Supply Chain Flow


![[https://cdn.vectorstock.com/i/1000x1000/35/51/diagram-of-supply-chain-management-vector-41743551.webp](https://cdn.vectorstock.com/i/1000x1000/35/51/diagram-of-supply-chain-management-vector-41743551.webp)](https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/8d54ad89-e86f-4d7c-8208-74455976a4a9-2-768x489.png)



## Smart Contract Working Flow

![https://raw.githubusercontent.com/faizack619/Supply-Chain-Gode-Blockchain/master/client/public/Supply%20Chain%20Design%20(1).png?token=GHSAT0AAAAAAB52SPAT5YHI3AALNPFXL27AY7OU3IQ](https://raw.githubusercontent.com/faizack619/Supply-Chain-Gode-Blockchain/master/client/public/Supply%20Chain%20Design%20(1).png?token=GHSAT0AAAAAAB52SPAT5YHI3AALNPFXL27AY7OU3IQ)

This is a SupplyChain smart contract written in Solidity. The contract models the various roles and stages involved in the supply chain of a pharmaceutical product.

The contract owner is the person who deploys the contract and is the only one who can authorize various roles like retailer, manufacturer, etc.

There are several roles involved in the supply chain of the pharmaceutical product. These include the raw material supplier, manufacturer, distributor, and retailer.

The smart contract stores information about the medicine, such as its name, description, and current stage in the supply chain. There is also a function to show the current stage of a medicine, which can be used by client applications.

The smart contract also stores information about the various players in the supply chain, such as their name, address, and place of operation.

The addRMS(), addManufacturer(), addDistributor(), and addRetailer() functions can be used by the contract owner to add new players to the supply chain.

Overall, this smart contract provides a way to track the various stages of a pharmaceutical product in the supply chain, ensuring transparency and accountability.


##  🔧 Setting up Local Development

### Step1.
## Installation and Setup

* **VSCODE** : VSCode can be downloaded from https://code.visualstudio.com/
* **Node.js** : Download the latest version of LTS Node.js from https://nodejs.org/ and after installation check     Version using terimal: node -v .
* **Git** : Download the latest version of Git from the official website at https://git-scm.com/downloads and   check Version using terimal: git --version.


* **MetaMask** : can be installed as a browser extension from the Chrome Web Store or Firefox Add-ons store.

### Step 2.
## Connect Meta Musk with Gode Testnet. 


1. Connect MetaMask: Open MetaMask in your browser and click on the network dropdown in the top-right corner.
![https://metamask.zendesk.com/hc/article_attachments/10080831633947](https://metamask.zendesk.com/hc/article_attachments/10080831633947)

1. After Clicking on add network u will get interface
   to add network name,rcp url,chain id put same as shown in the image below and click on Add or Save.

   ![https://raw.githubusercontent.com/faizack619/Supply-Chain-Gode-Blockchain/master/client/public/network.PNG](https://raw.githubusercontent.com/faizack619/Supply-Chain-Gode-Blockchain/master/client/public/network.PNG)


 2. In MetaMask, click on the account icon in the top-right corner, select create account, and name as Raw Material Supplier and  Click "Create".

   ![https://miro.medium.com/max/1400/1*27K5fr7h56To9Z2JVObrHA.png](https://miro.medium.com/max/1400/1*27K5fr7h56To9Z2JVObrHA.png)
   
 3. Add All participate(Raw Material,Supplier,Manufacture,Retail). by following above Step.
  
### Step 3.
## Compile & Deploy Smart Contract. 

* Open VScode and open VScode Terimal by Ctrl + ' .
* **Clone Project** Type the following command and press Enter : git clone : ` https://github.com/faizack619/Supply-Chain-Blockchain.git  
* **Install truffle** : Type the following command and press Enter: `npm install -g truffle`
* **Install dependencies** : Type the following command and press Enter: `npm i`
* **File structure for  DApp** : 
  
    **contracts**: This folder contains the Solidity smart contracts for the DApp. The Migrations.sol contract is automatically created by Truffle and is used for managing migrations.

    **migrations**: This folder contains the JavaScript migration files used to deploy the smart contracts to the blockchain network.

    **test**: This folder contains the JavaScript test files used to test the smart contracts.

    **truffle-config.js**: This file contains the configuration for the Truffle project, including the blockchain network to be used and any necessary settings.

    **package.jso**n: This file contains information about the dependencies and scripts used in the project.

    **package-lock.json**: This file is generated automatically and contains the exact version of each dependency used in the project.

    **Client**s: This Folder contains the client-side code, typically HTML, CSS, and JavaScript, can be organized into a client folder.
* **Compile the smart contract** :  In the terminal, use the following command to compile the smart contract: `truffle compile` 
* **Configuring Truffle for GODE** :
   
    * After Compile We Need To Deploy our Smart Contract on Blockchain.In Our Case We are Deploying on Gode testnet  Which is testnet blockchain for development, used to test and develop Smart Contracts.
   
   ![https://raw.githubusercontent.com/faizack619/Supply-Chain-Gode-Blockchain/master/client/public/Capture.PNG](https://raw.githubusercontent.com/faizack619/Supply-Chain-Gode-Blockchain/master/client/public/Capture.PNG)


    * We need to install HDWallet run this command in `npm install @truffle/hdwallet-provider`
    * It requires mnemonic to be passed in for Provider, this is the seed phrase for the account you'd like to deploy from. Create a new .secret file in root directory and enter your 12 word mnemonic seed phrase to get started. To get the seedwords from metamask wallet you can go to Metamask Settings, then from the menu choose Security and Privacy where you will see a button that says reveal seed words, refer [here](https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase) for more details.
    * As you can see we have testnet which has network id : 5566 which identity gode testnet id.
  
    * `truffle migrate --network testnet` Command Will deploye Smart Contract to Gode Blockchain.
     ![https://raw.githubusercontent.com/faizack619/Supply-Chain-Gode-Blockchain/master/client/public/deploying%20detail.PNG](https://raw.githubusercontent.com/faizack619/Supply-Chain-Gode-Blockchain/master/client/public/deploying%20detail.PNG)
    * It will take some time For deployment and u will able find transaction hash,contract address and many more.

### Step 4.
## Run DAPP. 
* Open terminal and enter the client folder
  * `cd client`
 
* Install all packages in the package.json file
  * `npm i`
  
* Install Web3 in the package.json file
  * `npm install -save web3`


* Run this Command :
  * `npm`
 
* Run the app 
  * `npm start`

* The app gets hosted by default at port 3000.



### License
This project uses an [MIT](https://opensource.org/licenses/MIT) license.
## Documentation to help with Solidity
https://docs.soliditylang.org/en/v0.8.4/
## Documentation to help with React
https://reactjs.org/docs/getting-started.html
## Documentation to help with Truffle
https://www.trufflesuite.com/docs/truffle/reference/configuration
## Documentation to help with Deployment on Gode Blockchain

https://docs.godechain.com/welcome/gode-chain/deploy-smart-contract/using-truffle-for-deploying-smart-contracts-on-gode
