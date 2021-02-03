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

// Variadic function
function foliageHelper(x, foliageHeight, ...args) {
  return String(args[x]).concat('',String(args[foliageHeight+x]),String(args[x]));
}

function makeTreeFoliage(foliageHeight) {
  let underscores = [], hashes = [], array = [...Array(foliageHeight).keys()];
  for (n = 1; n <= foliageHeight; n++) { 
    underscores.push("_".repeat(foliageHeight - n));
    hashes.push("#".repeat(n * 2 - 1));
  }

// Rest parameters allow for variadic function
  return array.map(x => foliageHelper(x, foliageHeight, ...underscores, ...hashes));
}

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
