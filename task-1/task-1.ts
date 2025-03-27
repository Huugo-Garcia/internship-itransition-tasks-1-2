const args = process.argv.slice(2);

function longestCommonSubstring(strings: string[]): string {
  // If there are no strings, return an empty string
  if (!strings || strings.length === 0) return "";

  //   Find the shortest string
  const shortestString = strings.reduce((a, b) =>
    a.length <= b.length ? a : b
  );

  let longestSubstr = " ";

  //  Iterate over the shortest string and find all possible substrings
  for (let i = 0; i < shortestString.length; i++) {
    for (let j = i + 1; j <= shortestString.length; j++) {
      const substring = shortestString.slice(i, j);

      //  Check if the substring is a common substring in all strings
      const isCommonSubstr = strings.every((str) => str.includes(substring));

      //   If the substring is common and longer than the current longest substring, update the longest substring
      if (isCommonSubstr && substring.length > longestSubstr.length) {
        longestSubstr = substring;
      }
    }
  }

  return longestSubstr;
}

console.log(longestCommonSubstring(args));
