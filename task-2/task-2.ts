import fs from "fs";
import path from "path";
import crypto from "crypto";

const DIR_PATH = path.resolve("task-2/files");

// This function computes the SHA3-256 hash of a given buffer.
// It uses the 'crypto' module to create a hash object, update it with the buffer data, and then return the hash in hexadecimal format.
function sha3Hash(buffer: Buffer): string {
  return crypto.createHash("sha3-256").update(buffer).digest("hex");
}

function generateFinalHash(): string {
  try {
    // Check if the directory exists and read its contents.
    if (!fs.existsSync(DIR_PATH)) {
      throw new Error(`Directory not found: ${DIR_PATH}`);
    }

    // Read the contents of the directory.
    // The 'readdirSync' method reads the directory synchronously and returns an array of file names.
    const fileNames = fs.readdirSync(DIR_PATH);

    const hashes = fileNames
      .map((file) => {
        try {
          const filePath = path.join(DIR_PATH, file);
          const stats = fs.statSync(filePath);

          //   Check if the path is a file and not a directory or other type.
          if (!stats.isFile()) return null;

          //   Read the file synchronously and compute its SHA3-256 hash.
          return sha3Hash(fs.readFileSync(filePath));
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
          console.error(`Error processing ${file}: ${errorMessage}`);
          return null;
        }
      })
      //   Filter out any null values from the hashes array.
      .filter((hash): hash is string => hash !== null);

    if (hashes.length === 0) {
      throw new Error("No valid files found");
    }

    // Sort the hashes in descending order and concatenate them into a single string.
    const sortedHashes = [...hashes].sort((a, b) => b.localeCompare(a));
    const concatenated = sortedHashes.join("");

    return sha3Hash(Buffer.from(concatenated));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Critical Error:", errorMessage);
    process.exit(1);
  }
}

console.log("Final SHA3-256 Hash:", generateFinalHash());
