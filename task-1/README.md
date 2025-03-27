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
ts-node task-1/task-1.ts abcdef abcxyz abc123
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
ts-node task-1/task-1.ts programming gaming ram
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
ts-node task-1/task-1.ts hello world
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
ts-node task-1/task-1.ts <string1> <string2> <string3> ...
```

Replace `<string1>`, `<string2>`, etc., with actual words or phrases.

## 🧠 Solution

```typescript
const args = process.argv.slice(2);

function longestCommonSubstring(strings: string[]): string {
  if (!strings || strings.length === 0) return "";

  const shortestString = strings.reduce((a, b) =>
    a.length <= b.length ? a : b
  );

  let longestSubstr = " ";

  for (let i = 0; i < shortestString.length; i++) {
    for (let j = i + 1; j <= shortestString.length; j++) {
      const substring = shortestString.slice(i, j);

      const isCommonSubstr = strings.every((str) => str.includes(substring));

      if (isCommonSubstr && substring.length > longestSubstr.length) {
        longestSubstr = substring;
      }
    }
  }

  return longestSubstr;
}

console.log(longestCommonSubstring(args));

**🔍 Explanation**

1. Extract Arguments: The script retrieves input strings from the command line.

2. Find Shortest String: To optimize the search, it selects the shortest string since the longest common substring cannot be longer than this.

3. Iterate Over Substrings: It generates all possible substrings from the shortest string.

4. Check Commonality: Each substring is checked against all input strings to verify if it exists in each of them.

5. Update Longest Substring: If a substring is found in all inputs and is longer than the current longest, it gets updated.

6. Return Result: The longest common substring found is printed.

7. This approach ensures that we efficiently determine the longest shared substring across multiple inputs. 🚀
```
