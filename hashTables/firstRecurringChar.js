//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {

    // Validate input
    if(!input){
        console.log
    }

    // Loop through -> Hash table to keep
    const tracker = {};

    for (let i=0; i<input.length; i++){
        const val = input[i];

        // If it does not exists get add add 1
        if (!tracker[val]) {
            tracker[val] = 1;
        } else {
            // tracker[val] += 1;
            return val;
        }

    }

    // if nothing is found then retuen undefined
    return undefined;
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
firstRecurringCharacter([2,1,1,2,3,5,1,2,4]);
console.log(firstRecurringCharacter([2,3,4,5]));

console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]));