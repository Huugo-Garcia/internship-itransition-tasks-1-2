# 🏆 Task 1 - Longest Common Substring

This task involves finding the **longest common substring** that appears in **all given input strings**.

The solution must be **highly optimized** to **minimize file size**, **remove unnecessary spaces and indentations**, and **reduce execution time**, as it is evaluated by a Discord bot.

---

## 📜 Problem Description

Given a set of strings provided via **command-line arguments**, the goal is to determine the **longest substring** that is present in **each of the input strings**.

- If **only one string** is provided, the output should be the same string.
- If **multiple strings** are given, the algorithm should identify the longest substring that appears in all of them.
- If there is **no common substring**, the output should be an **empty string** (`""`).

---

## 🚀 Usage Examples

### ✅ Example 1

**Input:**

```bash
node script.js abcdef abcxyz abc123
```

**Output:**

```
abc
```

**Explanation:**

- The longest common substring present in all inputs is `"abc"`.

---

### ✅ Example 2

**Input:**

```bash
node script.js programming gaming ram
```

**Output:**

```
am
```

**Explanation:**

- `"am"` is the longest substring that appears in all three words.

---

### ✅ Example 3

**Input:**

```bash
node script.js hello world
```

**Output:**

```
""
```

**Explanation:**

- `"hello"` and `"world"` do not share any common substring, so the output is an empty string.

---

## 🛠 Execution

Run the script using Node.js with multiple input strings as arguments:

```bash
node script.js <string1> <string2> <string3> ...
```

Replace `<string1>`, `<string2>`, etc., with actual words or phrases.
