import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth( arr ) {
    function inArr (arr1, count) {
      let res = count;
      for(let i = 0; i < arr1.length ; i++) {
        if (Array.isArray(arr1[i])) {
          let subInArr = inArr(arr1[i], count + 1);
          if(subInArr > res) {
            res = subInArr;
          }
        }
      }
      return res;
    }
    return inArr(arr, 1);
  }
}