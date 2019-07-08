'use strict';

function collectSameElements(collectionA, objectB) {
  let keys = collectionA.map(item => item.key);
  let set1 = new Set(keys);
  let set2 = new Set(objectB.value);
  let set = new Set([...set1].filter(x => set2.has(x)));
  return Array.from(set);
}
