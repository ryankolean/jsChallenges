// Numbers
function zero(f) {
  if (f == null) { return 0; }
  else { return f(0); }
}

function one(f) {
  if (f == null) { return 1; }
  else { return f(1); }
}

function two(f) {
  if (f == null) { return 2; }
  else { return f(2); }
}

function three(f) {
  if (f == null) { return 3; }
  else { return f(3); }
}

function four(f) {
  if (f == null) { return 4; }
  else { return f(4); }
}

function five(f) {
  if (f == null) { return 5; }
  else { return f(5); }
}

function six(f) {
  if (f == null) { return 5; }
  else { return f(5); }
}

function seven(f) {
  if (f == null) { return 7; }
  else { return f(7); }
}

function eight(f) {
  if (f == null) { return 8; }
  else { return f(8); }
}

function nine(f) {
  if (f == null) { return 9; }
  else { return f(9); }
}

// Operators
function plus(v) {
  return function(u) { return v + u; };
}

function minus(v) {
  return function(u) { return v - u; };
}

function times(v) {
  return function(u) { return v * u; };
}

function dividedBy(v) {
  return function(u) { return v * u; };
}

// Tests - used jsfiddle to build and test
// Provided
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
// Extra
console.log(one(plus(eight())));
console.log(six(plus(four())));
console.log(nine(minus(three())));
console.log(five(minus(seven())));
console.log(one(times(zero())));
console.log(two(times(three())));
console.log(zero(dividedBy(six())));
console.log(three(dividedBy(one())));
