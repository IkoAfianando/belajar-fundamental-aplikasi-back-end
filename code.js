function permutation(str) {
  let result = [];
  let permute = (str, prefix = "") => {
    if (str.length === 0) {
      result.push(prefix);
    } else {
      for (let i = 0; i < str.length; i++) {
        permute(str.slice(0, i) + str.slice(i + 1), prefix + str[i]);
      }
    }
  };
  permute(str);
  return result;
}
permutation("abc");