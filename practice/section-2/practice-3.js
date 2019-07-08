'use strict';

function countSameElements(collection) {
  let result = [];
  let map = new Map();
  for(let i = 0; i < collection.length; i++){
    if(collection[i].length !== 1){
      continue;
    }
    if(map.has(collection[i])){
      map.set(collection[i], map.get(collection[i]) + 1);
    }else{
      map.set(collection[i], 1);
    }
  }
  collection.forEach((item) => {
    if(item.indexOf('-') >= 0){
      if(map.get(item.split('-')[0])){
        map.set(item.split('-')[0], map.get(item.split('-')[0]) + parseInt(item.split('-')[1]));
      }else{
        map.set(item.split('-')[0], parseInt(item.split('-')[1]));
      }
    }else if(item.indexOf(':') >= 0){
      if(map.get(item.split(':')[0])){
        map.set(item.split(':')[0], map.get(item.split(':')[0]) + parseInt(item.split(':')[1]));
      }else{
        map.set(item.split(':')[0], parseInt(item.split(':')[1]));
      }
    }else if(item.indexOf('[') >= 0){
      if(!map.get(item.split('-')[0])){
        map.set(item.split('[')[0], map.get(item.split('[')[0]) + parseInt(item.substring(item.indexOf('[') + 1, item.indexOf(']'))));
      }else{
        map.set(item.split('[')[0], parseInt(item.substring(item.indexOf('[') + 1, item.indexOf(']'))));
      }
    }
  })
  map.forEach((value, key, map) => {
    result.push({name: key, summary: value});
  });
  return result;
}
