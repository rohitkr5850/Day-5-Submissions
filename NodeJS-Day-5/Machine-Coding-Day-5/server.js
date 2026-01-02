const express = require("express");
const fs = require("fs");
const readline = require("readline");
const path = require("path");

const app = express();
const PORT = 3000;

let progress = 0;

app.get("/process-file", (req, res) => {
  const inputPath = path.join(__dirname, "files", "input.csv");
  const outputPath = path.join(__dirname, "files", "output.csv");

  //get total file size for progress-calcuulation
  const totalSize = fs.statSync(inputPath).size;
  let processedSize = 0;

  const readStream = fs.createReadStream(inputPath);
  const writeStream = fs.createWriteStream(outputPath);

  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
  });

  // Error handling
  readStream.on("error", (err) => {
    console.error("Read error:", err);
    return res.status(500).json({ error: "Error reading file" });
  });

  writeStream.on("error", (err) => {
    console.error("Write error:", err);
    return res.status(500).json({ error: "Error writing file" });
  });

  rl.on("line", (line) => {
    // Process lin
    const processedLine = line.toUpperCase() + "\n";
    writeStream.write(processedLine);

    // Update progress
    processedSize += Buffer.byteLength(line);
    progress = Math.min(
      Math.round((processedSize / totalSize) * 100),
      100
    );
  });

  rl.on("close", () => {
    writeStream.end();
    progress = 100;
    console.log("File processing completed");
  });

  res.json({
    message: "File processing started",
    progress: `${progress}%`
  });
});

// Progress endpoint
app.get("/progress", (req, res) => {
  res.json({ progress: `${progress}%` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
