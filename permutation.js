// function permutation(str) {
//   if (str.length === 1) {
//     return [str];
//   }
//   const result = [];
//   debugger;
//   for (let i = 0; i < str.length; i++) {
//     debugger;
//     const char = str[i];
//     debugger;
//     const rest = str.slice(0, i) + str.slice(i + 1);
//     debugger;
//     const perms = permutation(rest);
//     debugger;
//     for (let j = 0; j < perms.length; j++) {
//       debugger;
//       result.push(char + perms[j]);
//       debugger;
//     }
//   }
//   return result;
// }
//
// console.log(permutation("abc"));
//

function permutation(value) {
  if(value.length === 1) {
    return [value];
  }

  let total = [];
  for(let i = 0; i < value.length; i++) {
    const str = value[i];
    const rest = value.slice(0, i) + value.slice(i + 1);
    const perms = permutation(rest);
    for(let j = 0; j < perms.length; j++) {
      total.push(str + perms[j]);
    }
  }
  return total;
}

console.log(permutation("213"));

