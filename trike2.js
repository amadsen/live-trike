const trike = require('trike');

const p = trike(() => new Promise((resolve, reject) => {
  resolve(JSON.parse("bad input"));
}));

p.then(([e, r]) => {
  if (e) {
    console.log({
      error: e
    });
  }
  
  console.log(r);
});
