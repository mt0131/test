console.log('hello');

function sayHello() {
  console.log('Hello!!');
}

let obj = {
  number: 30, //프로퍼티
  sayHello: function () {
    console.log('obj HI');
    console.log('obj Hello');
  },
};

obj.sayHello();
