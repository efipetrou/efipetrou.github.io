const toggleArrayBool = (array: boolean[], num: number): boolean[] => {
  return array.map((el, i) => (i == num-1) ? true : false);
};

export default toggleArrayBool;