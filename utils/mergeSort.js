const methods = {
  MERGE_SORT: 'merge sort'
};

module.exports = {
  method: methods.MERGE_SORT,
  mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = this.mergeSort(arr.slice(0, mid));
    const right = this.mergeSort(arr.slice(mid));
    return this._merge(left, right);
  },
  
  _merge(arr1, arr2) {
    const r = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        r.push(arr1[i]);
        i++;
      } else {
        r.push(arr2[j]);
        j++;
      }
    }

    while (i < arr1.length) {
      r.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      r.push(arr2[j]);
      j++;
    }

    return r;
  }
}
