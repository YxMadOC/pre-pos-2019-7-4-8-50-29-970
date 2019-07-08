'use strict';

function collectSameElements(collectionA, collectionB) {
  let set1 = new Set(collectionA);
  let set2 = new Set(collectionB[0]);
  let set = new Set([...set1].filter(x => set2.has(x)));
  return Array.from(set);
}
