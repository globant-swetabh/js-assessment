const app = require('./app.js');

test('should be defined', () => {
    expect(app.convertToTitleCase).toBeDefined();
    expect(app.returnCommonElements).toBeDefined();
    expect(app.getPositiveNumbers).toBeDefined();
})

test('should return the positive numbers from the given array', () => {
    const arr = [1,4,6,2,-9,6,-9];
    const expectedArr = [1, 4, 6, 2, 6];
    const result = app.getPositiveNumbers(arr);
    expect(result).toStrictEqual(expectedArr)
})

test('should return the common elements from the array', () => {
    const arr1 = [1,2,3,4,5];
    const arr2 = [5,6,7,8,9,10];
    const expectedArr = [1,2,3,4,6,7,8,9,10];
    const result = app.returnCommonElements(arr1,arr2);
    expect(result).toStrictEqual(expectedArr);
})

test('should convert to title case', () =>{
    const word = 'lorem ipsum dolor sit';
    const expectedWord = 'Lorem Ipsum Dolor Sit';
    const result = app.convertToTitleCase(word);
    expect(result).toStrictEqual(expectedWord);
})