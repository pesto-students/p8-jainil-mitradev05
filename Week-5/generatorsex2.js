function* range(upperBound) {
    for (let i = 0; i < upperBound; i++) {
      yield i;
    }
  }
  
  const el = range(10);
  let n = el.next();
  

  while (!n.done) {
    console.log(n.value);
    n = el.next();
  }
  
  