// Задача №1______________________________________________________

function compareArrays(arr1, arr2) {

    if(arr1.length !== arr2.length) {
        return false;
    }

    const areEquel = arr1.every((item, i) => item === arr2[i]);

    return areEquel;
}


// Задача №2______________________________________________________

function getUsersNamesInAgeRange(users, gender) {
    const filteredUser = users.filter(user => user.gender === gender);

    if(filteredUser.length === 0) {
        return 0;
    }

    const ages = filteredUser.map(user => user.age);
    const totalAge = ages.reduce((sum, age) => sum + age, 0);
    const averageAge = totalAge / ages.length;

    return averageAge;
}