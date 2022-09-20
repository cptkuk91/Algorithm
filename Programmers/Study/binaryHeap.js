function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  heap.push(item);
  let cIdx = heap.length - 1;
  let pIdx = getParentIdx(cIdx);
  while (pIdx >= 0 && heap[cIdx] > heap[pIdx]) {
    swap(cIdx, pIdx, heap);
    cIdx = pIdx;
    pIdx = getParentIdx(cIdx);
  }
  return heap;
}

const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
