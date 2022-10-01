const concat = (str1:number, str2:number):number =>{
    return str1 + str2;
};

const capitalize = (str:string):string => {
    const newStr:string = str.split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
    return newStr;
};

const upperCase = (str:string):string => {
    return str.toUpperCase();
};

const lowerCase = (str:string):string => {
    return str.toLowerCase();
};

export {
    concat,
    capitalize,
    upperCase,
    lowerCase
}
// module.exports = {
//     concat,
//     capitalize,
//     upperCase,
//     lowerCase
// };