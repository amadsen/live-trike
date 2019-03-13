const trike = require('trike');

const [e, r] = trike(() => {
  return JSON.parse("bad input");
});

if (e) {
  console.log({
    error: e
  });
}

console.log(r);
