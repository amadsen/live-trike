const trike = require('trike');

async function main() {
  const [e, r] = await trike(async function () {
    return new Promise((resolve, reject) => {
        resolve(JSON.parse("bad input"));
    });
  });
    
  if (e) {
    console.log({
      error: e
    });
    return;
  }

  console.log(r);
}

main();
