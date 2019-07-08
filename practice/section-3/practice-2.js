'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(element => {
    for(let i = 0; i < objectB.value.length; i++){
      if(element.key == objectB.value[i]){
          element.count -= parseInt(element.count / 3);
      }
    }
  });
  return collectionA;
}
