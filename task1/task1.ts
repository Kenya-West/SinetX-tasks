/* kenya-west@outlook.com
 * mssg.me/kenyawest
 * Well, I made this in 5 minutes, don't judge much lol
 * Try the same code in playground if you don't want to install Typescript: https://www.typescriptlang.org/play/index.html
 */

// there is reverse() method in ES6 and TS, but this is too easy
// I have to explains basics of reversing.
// Let's assume we have an array of strings, but the same code applies to different types
var arr: Array<string> = ["a1", "a2", "3", "a3", "a4", "6", "!7", "8"];

console.log("The array initially contains the following values:");
console.log(...arr);

arr.forEach((element, index) => {
    if ((arr.length - 1) / index > 2) { // if we haven't achieved half way...

        // for example, operated value of a[1] will be filled with value of a[5] if array's length assumed as 7
        arr[index] = arr[(arr.length - 1) - index];
        // previously stored value in buf<string> is saved at opposite side
        arr[(arr.length - 1) - index] = element;

    }
});

console.log("After the custom reverse method, it displays like that:");
console.log(...arr);