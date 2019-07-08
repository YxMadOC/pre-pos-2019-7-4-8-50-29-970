'use strict';

function collectSameElements(collectionA, objectB) {
  let set1 = new Set(collectionA);
  let set2 = new Set(objectB.value);
  let set = new Set([...set1].filter(x => set2.has(x)));
  return Array.from(set);
}
