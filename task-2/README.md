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
