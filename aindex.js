
const makePromise = () => new Promise((resolve, reject) => {
  resolve(JSON.parse("bad input"));
});

async function main() {
  let r;
  try {
    r = await makePromise();
  } catch (e) {
    r = {
      error: e
    }
  }
  console.log(r);
}

main();