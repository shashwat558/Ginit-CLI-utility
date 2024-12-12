
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { githubCredentials } from "./lib/inquirer.js";


import { getCurrentDirectoryBase, directoryExist } from "./lib/file.js";

    
// if(directoryExist(".git")){
//     console.log(chalk.red("Already a git repository"));
//     process.exit();
// }

const run = async () => {
    const credentials = await githubCredentials();
    console.log(credentials);
}

clear();

console.log(
    chalk.yellow(
        figlet.textSync("Ginit", {horizontalLayout: "full"})
    )
)

run()