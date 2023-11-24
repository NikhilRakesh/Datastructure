function Stringfn(s, k) {
    const chars = s.split('');

    for (let i = 0; i < chars.length; i += 2 * k) {
      let start = i;
      let end = Math.min(i + k - 1, chars.length - 1);
      console.log(end);
  
      while (start < end) {
        const temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;
        start++;
        end--;
      }
    }
  
    return chars.join('');

}

const string = 'abcdefg'
const num = 2
const output = Stringfn(string, num)

console.log(output);