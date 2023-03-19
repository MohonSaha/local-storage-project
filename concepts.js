

// We can create a new object to set data in local storage:

const handelBookmark = (name, id, price) =>{

    // Create new object: Rule-1
    const product = {
      name, price, id
    }

    // Create new object: Rule-2
    const product1 = {
        name: name,
        price: price,
        id: id
      }

    console.log(product);
    console.log(product1);



    // Console.log: Sometimes it becomes tough to find that white value we have loged that's why we can use the rule: 
    console.log({product });
  }




/*

SET DATA IN LOCAL STORAGE:

1) add event handler and pass the value have to set in local storage.
2) Make an arrow function and received all the data.
      a) Make a new object with those data.
      b) Get the data from local storage and check it through keyName if the  
         data is previously available in the storage.
      c) If the data(keyName) is not available: 
            i) Make an empty array and push the new created object in it.
            ii) Set the value in local storage with the keyName and stringified array.
      d) If the data(keyName) is available:
            i) Apply find method to check if this particular data is    
              previously available in the storage.
                  $$) If the data is available: 
                        1) Show the error message: This product is already added.
                  $$) If the data is not available:
                        1) Push the previous bookmark object and new object in the array.
                        2) And set that array in local storage.
          


REMOVE DATA FROM LOCAL STORAGE:

1) add event handler and pass the id value.
2) Create a function and received the id.
3) get the value from local storage and set it in a variable.
4) use filter method on the variable and create a new array without the 
  clicked item. And set it in a new variable.
5) Set the filtered array in local storage again.


*/

