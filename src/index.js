const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const charMap = require("./charMap");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { camelCase } = require("camel-case");
const argv = yargs(hideBin(process.argv)).argv;

const file = argv.file;
const encoding = "utf8";
const filePath = path.join(__dirname, "..", "storage");

if (!fs.existsSync(filePath)) {
  fs.mkdirSync(filePath, { mode: "0755" });
}

if (file) {
  if (file && fs.existsSync(file)) {
    const fileContent = fs.readFileSync(file, {
      encoding,
      flag: "r",
    });
    const data = fileContent
      .toString()
      .trim()
      .split("\n")
      .map((value) => [
        value,
        camelCase(value.replace(/\W/gi, (char) => charMap[char] || " ")),
      ])
      .map((item) => `${item[0]},${item[1]}`)
      .join("\n");

    const fileName = `${uuidv4()}ca_intents.csv`;
    fs.writeFileSync(
      path.join(__dirname, "..", "storage", fileName),
      data.toString(),
      {
        encoding: "utf8",
        flag: "w",
      }
    );
    console.log("File generated successfully!");
  } else {
    console.log("File does not exist!");
  }
} else {
  console.log("File argument was not entered!");
}

process.exit(0);
