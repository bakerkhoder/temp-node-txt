const _=require('lodash')
items=[1,[2,[3,4]]]
newitems=_.flattenDeep(items)
console.log(newitems)