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
  console.log(Array.from(map));
  map.forEach((value, key, map) => {
    console.log(key);
    if(key.length == 1){
      result.push({key: key, count: value});
    }else{
      result.push({key: key.split('-')[0], count: parseInt(key.split('-')[1])})
    }
  });
  return result;
}
