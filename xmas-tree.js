xmasTree = (foliageHeight) => (makeTreeFoliage(foliageHeight)).concat(makeTreeTrunk(foliageHeight))

// function xmasTree(foliageHeight) {
//   /**
//    * We've broken down this function into three sub-problems.
//    * You can solve the overall kata by solving the sub-problems - you shouldn't need to make changes to this function.
//    * (Although, if you wish to, you could.)
//    */

//   // 1. make the tree foliage
//   const foliage = makeTreeFoliage(foliageHeight);
//   // 2. make the tree trunk
//   const trunk = makeTreeTrunk(foliageHeight);
//   // 3. group them together
//   return foliage.concat(trunk);
// }

findLineWidth = (foliageHeight) => foliageHeight * 2 - 1;

// function findLineWidth(foliageHeight) {
//   return foliageHeight * 2 - 1;
// }

makeTreeTrunk = (foliageHeight) => [null,null].fill(`${"_".repeat(foliageHeight - 1)}#${"_".repeat(foliageHeight - 1)}`);

// function makeTreeTrunk(foliageHeight) {
  // const underscores = "_".repeat(foliageHeight - 1);
  // return [null,null].fill(`${underscores}#${underscores}`);
// }

// function makeTreeTrunk(foliageHeight) {
  // const underscores = "_".repeat(foliageHeight - 1);
  // const trunk = `${underscores}#${underscores}`;
  // return [trunk, trunk];
// }

makeFoliageSegment = (foliageHeight, segmentLevel) =>
  (foliageHeight < segmentLevel) ? `${"_".repeat(foliageHeight - 1)}#${"_".repeat(foliageHeight - 1)}`
  : `${"_".repeat(foliageHeight - segmentLevel)}${"#".repeat(segmentLevel * 2 - 1)}${"_".repeat(foliageHeight - segmentLevel)}`;

// function makeFoliageSegment(foliageHeight, segmentLevel) {
//   const underscores = (foliageHeight < segmentLevel) ? "_".repeat(foliageHeight - 1)
//   : "_".repeat(foliageHeight - segmentLevel);
//   const hashes = (foliageHeight < segmentLevel) ? "#"
//   : "#".repeat(segmentLevel * 2 - 1);
//   return `${underscores}${hashes}${underscores}`;
// }

////////////////////////////////////////////////////////////////////////////////////////////////

// This variadic helper function takes the elements from underscores & hashes together and calls them "args" - because JS functions can only take one rest parameter
// Within "args", there are foliageHeight no. of underscores elements followed by foliageHeight no. of hashes elements
// So I am simply concatenating: 1st underscores element + 1st hashes element + 1st underscores element, 2nd + 2nd + 2nd, and so on
function foliageHelper(x, foliageHeight, ...args) {
  return String(args[x]).concat('',String(args[foliageHeight+x]),String(args[x]));
}

function makeTreeFoliage(foliageHeight) {
  // Below, I create a finalArray which contains [1, 2, 3...] as its elements up to foliageHeight
  let underscores = [], hashes = [], finalArray = [...Array(foliageHeight).keys()];
  // For every line of the foliage, I push the appropriate number of underscores and hashes to respective arrays
  for (lineNumber = 1; lineNumber <= foliageHeight; lineNumber++) { 
    underscores.push("_".repeat(foliageHeight - lineNumber));
    hashes.push("#".repeat(lineNumber * 2 - 1));
  }

  // Then, I attempt to use the map function to map these underscores and hashes to the final array all at once
  // This involves taking each element of [1, 2, 3 ... foliageHeight] and entering it into a helper function as a paramater
  // I enter the underscores & hashes arrays as "rest parameters" using JS spread syntax, because their lengths differ based on foliageHeight - I don't know how many parameters I'm putting in
  // This allows the helper function to be variadic
  return finalArray.map(x => foliageHelper(x, foliageHeight, ...underscores, ...hashes));
}

////////////////////////////////////////////////////////////////////////////////////////////////

// function makeTreeFoliage(foliageHeight) {
//   let array = [];
//   for (n = 1; n <= foliageHeight; n++) { 
//     const underscores = "_".repeat(foliageHeight - n);
//     const hashes = "#".repeat(n * 2 - 1);
//     array.push(`${underscores}${hashes}${underscores}`);
//   }
//   return array;
// }

// exports the functions so that ./xmas-tree.test.js can import them
module.exports = {
  xmasTree,
  findLineWidth,
  makeFoliageSegment,
  makeTreeFoliage,
  makeTreeTrunk,
};
