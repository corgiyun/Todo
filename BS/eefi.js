var name = 'Tom';

(function() {
  if(name == undefined) {
    name = 'Jack';
    console.log(`Good bye ${name}`);
  }else {
    console.log(`Hello ${name}`);
  }
})()