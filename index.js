import Web3 from "web3";
import chalk from "chalk";
import * as fs from "fs";

const createWallet = async(quantity) => {
    const w3 = new Web3();
    for(let i = 0; i < quantity; i++) {
        const wallet = w3.eth.accounts.create();
            fs.writeFileSync("address.txt", `${wallet.address}\n`, { flag: 'a+' });
            fs.writeFileSync("private.txt", `${(wallet.privateKey).slice(2, wallet.privateKey.length)}\n`, { flag: 'a+' });
    }
    console.log(chalk.yellow("Ready"));
}

await createWallet(Number(100));