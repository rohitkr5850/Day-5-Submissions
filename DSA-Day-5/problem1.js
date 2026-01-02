/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     if (s.length < 2) return s;

  let start = 0, end = 0;

  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    let len1 = expand(i, i);
    let len2 = expand(i, i + 1);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
};