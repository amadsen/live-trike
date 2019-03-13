let r;

try {
  r = JSON.parse("bad input");
} catch (e) {
  r = {
    error: e
  };
}

console.log(r);
