function merge(array1, array2) {
  let mergedArray = [];
  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      mergedArray.push(array1.shift());
    } else {
      mergedArray.push(array2.shift());
    }
  }

  if (array1.length) mergedArray = mergedArray.concat(array1);
  if (array2.length) mergedArray = mergedArray.concat(array2);

  return mergedArray;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  return merge(
    mergeSort(array.slice(0, array.length / 2)),
    mergeSort(array.slice(array.length / 2))
  );
}

let array = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(`Unsorted array: ${array}`);
console.log(`Sorted array: ${mergeSort(array)}`);

array = [105, 79, 100, 110];
console.log(`Unsorted array: ${array}`);
console.log(`Sorted array: ${mergeSort(array)}`);
