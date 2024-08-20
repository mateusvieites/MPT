/*
 1 - All the JSON output
 2 - All the JSON output with type = 'cafe'
 3 - Have JSON OUTPUT 'cafe'


 My results:
 -------------- Objeto -------------- 
[ 'cafe', 'j', 'k' ]
[ 'cafe' ]
true
tempo_a: 1.838ms
-------------- Map --------------   
[ 'cafe', 'j', 'k' ]
[ 'cafe' ]
true
tempo_b: 0.433ms
-------------- Array -------------- 
[ 'cafe', 'j', 'k' ]
[ 'cafe' ]
true
tempo_c: 0.396ms

 */

const a = {
  cafe: {
    type: 'cafe',
  },
  j: {
    type: 'string',
  },
  k: {
    type: 'string',
  },
};

const b = new Map([
  ['cafe', { type: 'cafe' }],
  ['j', { type: 'string' }],
  ['k', { type: 'string' }],
]);

const c = [
  { json: 'cafe', type: 'cafe' },
  { json: 'j', type: 'string' },
  { json: 'k', type: 'string' },
];

//Por objeto
console.log('-------------- Objeto -------------- ');
console.time('tempo_a');
const key_a = Object.keys(a);
const a_bytype = Object.keys(a).filter((key) => a[key].type === 'cafe');
const a_haskey = Boolean(a['cafe']);
console.log(key_a);
console.log(a_bytype);
console.log(a_haskey);
console.timeEnd('tempo_a');

console.log('-------------- Map -------------- ');
console.time('tempo_b');
const key_b = Array.from(b.keys());
let b_bytype: string[] = [];
for (const [key, value] of b.entries()) {
  if (value.type === 'cafe') {
    b_bytype.push(key);
  }
}
const b_haskey = b.has('cafe');
console.log(key_b);
console.log(b_bytype);
console.log(b_haskey);
console.timeEnd('tempo_b');

console.log('-------------- Array -------------- ');
console.time('tempo_c');
const key_c = c.map((value) => value.json);
const c_bytype = c
  .filter((value) => value.type === 'cafe')
  .map((value) => value.json);
const c_haskey = c.some((value) => value.json === 'cafe');
console.log(key_c);
console.log(c_bytype);
console.log(c_haskey);
console.timeEnd('tempo_c');
