// swapping of variables

let x=5;
let y=10;

x=x+y;
y=x-y;
x=x-y;
console.log(x);
console.log(y)

//Type checker function

function getType(value){
    if(value===null) return null;
    if(Array.isArray(value)) return "array"
    return typeof value;
}
console.log(getType(null));    
console.log(getType([1, 2, 3]));
console.log(getType({ a: 1 }));  
console.log(getType(() => {}));    
console.log(getType(42));        
console.log(getType("hello"));   

// deep clone 

let original = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['reading', 'gaming']
};

function deepClone(obj) {
    return structuredClone(obj)
}

let cloned = deepClone(original);
cloned.address.city = 'Boston';
cloned.hobbies.push('swimming');

console.log(original.address.city);  
console.log(original.hobbies);     