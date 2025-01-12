
const arr = [4, 5, 6, 3, 2, 1];

function bubbleSort(arr, n) {
  if (n <= 1) return; // 就是有序的
  for (let i = 0; i < n; i++) {
    let flag = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }

    if (!flag) break; // 不用遍历n次就有序，提前退出
  }
}

bubbleSort(arr, arr.length);
console.log('arr', arr);
