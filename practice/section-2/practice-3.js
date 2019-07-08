'use strict';
function countSameElements(collection) {
  let set = new Set();
  for(let i = 0; i < collection.length; i++){
    if(collection[i].length > 1){
      set.add(collection[i].split(/-|:|\[/)[0]);
    }else{
      set.add(collection[i]);
    }
  }
  collection.forEach((value,index,arr) => {
    if(value.indexOf('-') >= 0 || value.indexOf(':') >= 0 || value.indexOf('[') >= 0){
      let char = value.split(/-|:|\[/)[0];
      let number = parseInt(value.split(/-|:|\[/)[1]);
      for(let i = 0; i < number; i++){
        collection.push(char);
      }
      collection.splice(index, 1)
    }
  });
  let result = {};
  let ans = [];
  for(let i = 0;i < collection.length;i++){
      if(!result[collection[i]]){
          result[collection[i]] = 1;
      }else{
          result[collection[i]]++;
      }
  }
  set.forEach(s => {
    for(let item in result){
      if(s == item){
        ans.push({name: item, summary: result[item]})
      }
    }
  })
  return ans;
}
