
import fs from "fs";
import path from "path";


export const getCurrentDirectoryBase = () => {
        return path.basename(process.cwd());
    }
 export const directoryExist = (filePath) => {
        return fs.existsSync(filePath);
    }
