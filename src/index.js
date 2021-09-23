const fs = require("fs");
const charMap = require("./charMap");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { camelCase } = require("camel-case");
const argv = yargs(hideBin(process.argv)).argv;

const filePath = argv.file;

if (filePath && fs.existsSync(filePath)) {
  const fileContent = fs.readFileSync(filePath, {
    encoding: "utf8",
    flag: "r",
  });
  const lines = fileContent.toString().trim().split("\n");
  const data = lines
    .map((line) => line.replace(/\W/gi, (char) => charMap[char] || " "))
    .map((line) => line.trim())
    .map((line) => camelCase(line));
  console.log(data);
} else {
  console.log("File does not exist!");
}

process.exit(0);
