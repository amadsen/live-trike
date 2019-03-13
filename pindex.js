
new Promise((resolve, reject) => {
  resolve(JSON.parse("bad input"));
})
.then((r) => {
  return r;
})
.catch((e) => {
  return {
    error: e
  };
})
.then((r) => {
  console.log(r);
})

