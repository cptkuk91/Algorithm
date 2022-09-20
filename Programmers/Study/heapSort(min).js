function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  heap.push(item);

  if (heap.length > 1) {
    let cIdx = heap.length - 1;
    let pIdx = getParentIdx(cIdx);
    // 최대와 달리 최소값이기 때문에 heap[pIdx] < heap[cIdx];
    while (pIdx >= 0 && heap[pIdx] > heap[cIdx]) {
      swap(pIdx, cIdx, heap);
      cIdx = pIdx;
      pIdx = getParentIdx(cIdx);
    }
  }
  return heap;
}

function removeRoot(heap) {
  swap(0, heap.length - 1, heap);
  heap.pop();

  if (heap.length === 0) return [];

  let cIdx;
  let minIdx = 0;
  while (cIdx !== minIdx) {
    cIdx = minIdx;
    let left = cIdx * 2 + 1;
    let right = cIdx * 2 + 2;

    if (left < heap.length && heap[left] < heap[minIdx]) {
      minIdx = left;
    }

    if (right < heap.length && heap[right] < heap[minIdx]) {
      minIdx = right;
    }
    swap(cIdx, minIdx, heap);
  }
  return heap;
}

const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  let result = [];

  while (minHeap.length > 0) {
    result.push(minHeap[0]);
    minHeap = removeRoot(minHeap);
  }
  return result;
};
