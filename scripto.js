/***  Level 1 ***/

// 1) Pull Function

// function pull(arr, ...values) {
//     return arr.filter(element => !values.includes(element));
// }

// var array = ['a', 'b', 'c', 'a', 'b', 'c'];
//  
// console.log(pull(array, 'a', 'c'));


//  2) Chunk Function */

// function chunk(arr, num) {
//     const restArr = [];
//     for(let i = num; i < arr.length; i = i + num) {
//         restArr.push(arr.splice(i));
//     }
//   return [[...arr], [...restArr]];
// }
// console.log(chunk(['a', 'b', 'c', 'd'], 2));


//  3) Join Function
// function join(arr, sep) {
//     return arr.reduce((prev, last) => prev + sep + last);
// }
// console.log(join(['a', 'b', 'c'], '~'));


//  4) Every Function
// function every(collection, predicate) {
//     let result = true;
//     if(typeof predicate == 'function') {
//         return collection.reduce((prev, last) => predicate(prev) && predicate(last) );
//     } else if(JSON.stringify(predicate)[0] == "{") {
//         for (let i in predicate) {
//             if(predicate.hasOwnProperty(i)) {
//                 collection.forEach(element => {
//                     if(element[i] == predicate[i]) {
//                         result = result && true;
//                     } else {
//                         result = result && false;
//                     }
//                 });
//             }
//         }
//         return result
//     } else if (JSON.stringify(predicate)[0] == "["){
//         collection.forEach(element => {
//           if(element[predicate[0]] == predicate[1]) {
//               result = result && true;
//           } else {
//               result = result && false;
//           }
//         });
//         return result;
//     } else if(typeof predicate == 'string') {
//         collection.forEach(element => {
//             if(element[predicate]) {
//                 result = result && element[predicate];
//             } else {
//                 result = result && element[predicate];
//             }
//           });
//           return result; 
//     } else {
//         return true;
//     }
// }

/*** 5) Include Function */
// function includes(collection, value, index) {
//     let result = false;
//     if(Array.isArray(collection)) {
        
//             for(let j = 0; j < collection.length; j++) {
//                 if(collection[index ? index:j] == value) {
//                     result = result || true;
//                 }
            
//         }
//         return result;
//     } else if(typeof collection == 'object') {
        
//             for(let key in collection) {
//                 if(collection[index ? index:key] == value) {
//                     result = result || true
//                 } 
//             }
         
//         return result;
//     } else if(typeof collection == 'string') {
//         for(let i = 0; i < value.split('').length; i++) {
//             for(let j = 0; j < collection.split('').length; j++) {
//                 if(collection[index ? index:j] == value[i]) {
//                     result = result || true;
//                 }
//             }
//         }
//         return result;
//     }
// }

/*** 6) Length Function */
// function size(collection) {
//     let counter =0;
//     if(Array.isArray(collection)) {
//         for(let i = 0; i< collection.length; i++) {
//             counter++;
//         } 
//         return counter;
//     } else if(typeof collection == 'object') {
//         for(let i in collection) {
//             if(collection.hasOwnProperty(i)) {
//                 counter++;
//             }
//         }   
//         return counter   
//     } else if(typeof collection == 'string') {
//         for(let i = 0; i< collection.split('').length; i++) {
//             counter++;
//         } 
//         return counter;
//     }
// }

/*** 7) Flatten Function */
// function flatten(arr) {
//     let flattenArr = [];
//     for(let i = 0; i< arr.length; i++) {
//         if(Array.isArray(arr[i])) {
//             flattenArr = flattenArr.concat(arr[i]);
//         } else {
//             flattenArr.push(arr[i]);
//         }
//     } 
//     return flattenArr;
// }
// console.log(flatten([1, [2, [3, [4]], 5]]));

/*** 8) Zip Function */
// function zip(...arrays) {
//     let first = [];
//     let second = [];
//    for(let i = 0; i < arrays.length; i++) {
//        for(let j=0; j <arrays[i].length; j++) {
//            if(j == 0) {
//                first.push(arrays[i][j]);
//            } else {
//                second.push(arrays[i][j]);
//            }
//        }
//    } 
//    return [first, second];
// }
// console.log(zip(['a', 'b'], [1, 2], [true, false]));

/*** 9) Find Function */
// function find(collection, predicate) {
//     let arr = [];
//     if(typeof predicate == 'function') {
//         arr = collection.filter(element => predicate(element));
//         return `object for '${arr[0].user}'`;
//     } else if(Array.isArray(predicate)) {
//         arr = collection.filter(element => element[predicate[0]] == predicate[1]);
//         return `object for '${arr[0].user}'`;
//     } else if (typeof predicate == 'object') {
//         const predicateKeys = Object.keys(predicate);
//         for(let i = 0; i < predicateKeys.length - 1; i++) {
//             for(let j = 0; j < collection.length; j++) {
//                 if((collection[j][predicateKeys[i]] == predicate[predicateKeys[i]]) && (collection[j][predicateKeys[i + 1]] == predicate[predicateKeys[i + 1]])) {
//                     arr.push(collection[j]);
//                 }
                
//             }
//         }
//             return `object for '${arr[0].user}'`;
//     } else {
//         for(let obj of collection) {
//             if(Object.keys(obj).includes(predicate)) {
//                 arr.push(obj);
//             }
//         }
//         return `object for '${arr[0].user}'`;
//     }
// }
// var users = [
//     { 'user': 'barney',  'age': 36, 'active': true },
//     { 'user': 'fred',    'age': 40, 'active': false },
//     { 'user': 'pebbles', 'age': 1,  'active': true }
//   ];
// console.log(find(users, function(o) { return o.age < 40; }));
// console.log(find(users, { 'age': 1, 'active': true }));
// console.log(find(users, ['active', false]));
// console.log(find(users, 'active'));

/*** Assign Function */
// function assign(...collection) {
//     let resultObj = {};
//     for(let obj of collection) {
//         for(let key in obj) {
//             if(obj.hasOwnProperty(key)) {
//                 resultObj[key] = obj[key];
//             }
//         }
//     }
//     return resultObj;
// }


/*** Filter Function */
// function filter(collection, predicate) {
//     let arr = [];
//     result = ``;
//     if(typeof predicate == 'function') {
//         arr = collection.filter(obj => predicate(obj))
//     } else if (Array.isArray(predicate)) {
//         arr = collection.filter(obj => obj[predicate[0]] == predicate[1]);
//     } else if(typeof predicate == 'object') {
//         let preKeys = Object.keys(predicate);
//         for(let i = 0; i < preKeys.length - 1; i++) {
//             collection.forEach(obj => {
//                 if(obj[preKeys[i]] == predicate[preKeys[i]] && obj[preKeys[i+1]] == predicate[preKeys[i+1]]) {
//                     arr.push(obj)
//                 }
//             })
//         }
//     } else {
//         arr = collection.filter(obj =>obj[predicate] == true);
//     }
//     for(let obj of arr) {
//         result = result + 'object for [' + obj.user + ']';
//     }
//     return result;
// }


/*** keyBy Function */
// function keyBy(collection, predicate) {
//     let result = {};
//     if(typeof predicate == 'function') {
//         const keys = collection.map(obj => predicate(obj));
//         for(let i = 0; i < collection.length; i++) {
//           result[keys[i]] = collection[i];
//          }
//     } else {
//         const keys = collection.map(obj => obj[predicate]);
//         for(let i = 0; i < collection.length; i++) {
//           result[keys[i]] = collection[i];
//          }
//     }
//     return result;
// }


/*** dropWhile Function */
// function dropWhile(collection, predicate) {
//     if(typeof predicate == 'function') {
//         arr = collection.filter(element => !predicate(element)).map(obj => obj.user);
//         return `object for [${arr}]`;
//     } else if(Array.isArray(predicate)) {
//          let arr = collection.filter(element => element[predicate[0]] != predicate[1]).map(obj => obj.user);
//         return `object for [${arr}]`;
//     } else if (typeof predicate == 'object') {
//         let arr = [];
//         const predicateKeys = Object.keys(predicate);
//         for(let i = 0; i < predicateKeys.length - 1; i++) {
//             for(let j = 0; j < collection.length; j++) {
//                 if((collection[j][predicateKeys[i]] != predicate[predicateKeys[i]]) || (collection[j][predicateKeys[i + 1]] != predicate[predicateKeys[i + 1]])) {
//                     arr.push(collection[j]);
//                 }
                
//             }
//         }
//         arr = arr.map(obj => obj.user);
//         return `object for [${arr}]`;
//     } else {
//         let arr = [];
//         for(let obj of collection) {
//             if(Object.keys(obj).includes(predicate)) {
//                 arr.push(obj);
//             }
//         }
//         arr = arr.map(obj => obj.user);
//         return `object for [${arr}]`;
//     }
// }

/*** remove Function */
// function remove(collection, predicate) {
//     let removedArr = collection.filter(predicate);
//     for(let num of removedArr) {
//         collection.splice(collection.indexOf(num), 1);
//     }
//     return  removedArr;
// }


/*** flattenDeep Function */
// let arrays = [];
// function flattenDeep(arr) {
//     for(let i =0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])){
//             flattenDeep(arr[i]);
//         } else {
//             arrays.push(arr[i]);
//         }
//     }
//     return arrays
// }
// console.log(flattenDeep([1, [2, [3, [4]], 5]]));

/*** union Function */
// function union(...arrays) {
//     let result = [];
//     for(let i = 0; i < arrays.length; i++) {
//         for(let j = 0; j <arrays[i].length; j++) {
//             if(!result.includes(arrays[i][j])) {
//                 result.push(arrays[i][j]);
//             }
//         }
//     }
//     return result.sort((a,b) => a-b);
// }

// console.log(union([4,7],[1,15, 2,4]));

/* difference function */
// function difference(arr, secArr) {
//    return arr.filter(element => !secArr.includes(element)); 
// }
// console.log(difference([2, 1], [2, 3]));