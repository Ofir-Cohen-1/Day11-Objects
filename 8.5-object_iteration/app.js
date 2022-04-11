const obj = {
  a: "1",
  b: "2",
  c: "3",
  d: "4",
};

const Swap = (obj) => {
  const swappedObj = {};
  for (let key in obj) {
    swappedObj[obj[key]] = key;
  }
  return swappedObj;
};

console.log(Swap(obj));
