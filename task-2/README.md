# 🏆 Task 2 - SHA3 File Hash Aggregation

This task involves reading multiple `.data` files, computing their individual **SHA3-256 hashes**, sorting them, and generating a final hash including your email.

---

## 📄 Problem Description

You are given a directory containing multiple `.data` files. The objective is to:

1. Compute the **SHA3-256 hash** of each file's content.
2. Sort the resulting hashes in **descending lexicographical order**.
3. Concatenate all sorted hashes into a single string.
4. Append your **email address** (in lowercase) to the end of this string.
5. Compute the final **SHA3-256 hash** of the result and print it.

This task tests your ability to handle files, perform hashing operations, sort data, and work with buffers.

---

## 📃 About `.data` Files

`.data` files in this context are plain or binary files provided for testing. They can contain any kind of content (text, binary, etc.).

You read these files as binary buffers, then use the SHA3-256 algorithm to compute a hash. This ensures any change in file content changes the hash.

---

## 🔐 What is SHA3-256?

SHA3-256 is a **cryptographic hash function** that produces a 256-bit (64-character hexadecimal) hash.

It is:

- Collision-resistant (very unlikely two different files produce the same hash)
- Deterministic (same input always gives the same output)
- Irreversible (you can't get the original file from the hash)

---

## 🚀 Execution

To run the task:

```bash
npx ts-node task-2/task-2.ts
```

Make sure to:

- Replace the folder path in `dirPath` with the directory where your `.data` files are.
- Update the `email` constant with your email.

---

## ✅ Example Output

```bash
Final SHA3-256 Hash: 7c4c7a9a2465b8c4d0ee96f7b14763e3953f5048b1f7fc7380f4a8cfd8d14c47
```

This is the final SHA3-256 hash generated after sorting, concatenating, appending the email, and hashing again.

## 🧠 Solution

```typescript
import fs from "fs";
import path from "path";
import crypto from "crypto";

const DIR_PATH = path.resolve("task-2/files");

function sha3Hash(buffer: Buffer): string {
  return crypto.createHash("sha3-256").update(buffer).digest("hex");
}

function generateFinalHash(): string {
  try {
    if (!fs.existsSync(DIR_PATH)) {
      throw new Error(`Directory not found: ${DIR_PATH}`);
    }

    const fileNames = fs.readdirSync(DIR_PATH);

    const hashes = fileNames
      .map((file) => {
        try {
          const filePath = path.join(DIR_PATH, file);
          const stats = fs.statSync(filePath);

          if (!stats.isFile()) return null;

          return sha3Hash(fs.readFileSync(filePath));
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
          console.error(`Error processing ${file}: ${errorMessage}`);
          return null;
        }
      })
      .filter((hash): hash is string => hash !== null);

    if (hashes.length === 0) {
      throw new Error("No valid files found");
    }

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
```

**🔍 Explanation**

1. **Directory Setup:**

   - The script targets the `task-2/files` directory where the `.dat` files are located.
   - It checks if the directory exists before proceeding to avoid runtime errors.

2. **File Reading & Hashing:**

   - It reads all the files in the directory and filters out any non-file entries.
   - For each valid file, it reads its binary content (`Buffer`) and computes its **SHA3-256 hash**.
   - If any file fails to be read, it's skipped with an appropriate error message.

3. **Sorting Hashes:**

   - Once all individual hashes are computed, they are sorted in **descending lexicographic order** using `.sort((a, b) => b.localeCompare(a))`.

4. **Concatenation & Final Hashing:**

   - The sorted hashes are concatenated into one long string (no separators).
   - This combined string is then hashed again using **SHA3-256** to generate the **final hash**.

5. **Output:**
   - The final hash is printed to the console as the output of the program.

This process ensures a deterministic and secure hash is generated based on the contents of the `.dat` files. It follows good practices in error handling, type safety, and code modularity while using only Node.js built-in modules.
