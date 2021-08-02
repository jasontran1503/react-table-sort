function useSort(value, selected) {
  const result = value.sort(function (a, b) {
    if (typeof a[selected] === 'string') {
      return a[selected].localeCompare(b[selected]);
    }
    return a[selected] - b[selected];
  });

  return result;
}

export default useSort;
