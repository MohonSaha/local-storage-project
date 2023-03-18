

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
  }