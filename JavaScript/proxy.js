{
  const handler = {
    set: function(obj, prop, value) {
      if(typeof value !== 'string') {
        throw new Error('Value is no String');
      } else {
        obj[prop] = value
      }
    }
  };
  const obj = {};
  const proxies = new Proxy(obj, handler);
  proxies.name = 'Li';
  console.log(proxies); // {name: 'Li'}
  // proxies.age = 14; // Error: Value is no String
  // console.log(proxies);
}

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

{
  const handler = {
    get: function (obj, prop) {
      if(prop === 'id') {
        throw new Error('Con not access private properties')
      } else {
        return obj[prop]
      }
    }
  }
  const person = {
    name: 'Tom',
    id: 1
  };

  const proxies = new Proxy(person, handler);
  console.log(proxies.name); // Tom
  console.log(proxies.id); // Error: Con not access private properties
}

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'); 

{
  
}