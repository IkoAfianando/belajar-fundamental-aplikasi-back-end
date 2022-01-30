function permutation(str) {
  if (str.length === 1) {
    return [str];
  }
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const rest = str.slice(0, i) + str.slice(i + 1);
    const perms = permutation(rest);
    for (let j = 0; j < perms.length; j++) {
      result.push(char + perms[j]);
    }
  }
  return result;
}