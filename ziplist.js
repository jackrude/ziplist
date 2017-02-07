console.log("TEST");
const dummylist1 = [1,2,3,4,5];
const dummylist2 = ["a","b","c","d","e"];
function zipList(array1,array2){
  const dummy = [];
  for(let i = 0; i<array1.length; i++){
   dummy.push(array1[i],array2[i]);
  }
  return dummy;

}

console.log(zipList(dummylist1,dummylist2));

function zipListTheSimpleWay(list1,list2){
  return _.flatten(_.zip(list1,list2));
}

console.log(zipListTheSimpleWay(dummylist1,dummylist2));

