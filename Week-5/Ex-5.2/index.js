function vowelCount(string) {
    let vowels = "aeiou";

    const vowelMap = new Map(); // Creates a new Map object
    for (let str of string) {
        if (vowels.includes(str)) { // check if vowels string includes input string letters
            if (vowelMap.has(str)) { //check if value is present in map

                let temp = vowelMap.get(str) + 1; // gets the value corresponding to key & add 1
                vowelMap.set(str, temp); // sets key and value
            } else {

                vowelMap.set(str, 1);
            }
        }

    }
    return vowelMap;
}

console.log(vowelCount("Kaustubh Kale"));
console.log(vowelCount("Vishal Chowdhry"));
console.log(vowelCount("Dhananjay Asewad"));