
const fs = require("fs");
const path = require("path");

module.export({
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd);
    },
    directoryExist: (filePath) => {
        return fs.existsSync(filePath);
    }
})