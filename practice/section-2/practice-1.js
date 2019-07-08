'use strict';

function countSameElements(collection) {
  let result = [];
  let map = new Map();
  for(let i = 0; i < collection.length; i++){
    if(map.has(collection[i])){
      map.set(collection[i], map.get(collection[i]) + 1);
    }else{
      map.set(collection[i], 1);
    }
  }
  map.forEach((value, key, map) => {
    result.push({key: key, count: value});
  });
  return result;
}
