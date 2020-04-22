const {
  init,
  getCapacity,
  getSize,
  isEmpty,
  isFull,
  addQueue,
  removeFirst,
} = require("./queue.js");

describe("test the queue initialization", () => {
  test("should return an object with an empty array and an initialized capacity", () => {
    for (i = 0; i < 100; i++) {
      let expected = {
        list: [],
        capacity: i,
      };
      expect(init(i)).toStrictEqual(expected);
    }
  });

  test("should return an exception if the capacity is less then 0", () => {
    const capacity = -1;
    expect(() => init(capacity)).toThrowError(/capacity/gi);
  });
});

describe("test the getCapacity function", () => {
  test("should return the right capacity", () => {
    for (i = 0; i < 100; i++) {
      let queue = {
        list: [],
        capacity: i,
      };
      let expected = i;
      expect(getCapacity(queue)).toBe(expected);
    }
  });

  test("should throw an error if the queue has a wrong attribut", () => {
    let queue = {
      listOfNumbers: [],
      capacityOfList: 10,
    };
    expect(() => getCapacity(queue)).toThrowError(/queue/gi);
  });
});

describe("test the getSize function", () => {
  test("should return the right size of the queue", () => {
    let queue = {
      list: [],
      capacity: 10,
    };
    let expected = 0;
    expect(getSize(queue)).toBe(expected);
    queue = {
      list: [10],
      capacity: 10,
    };
    expected = 1;
    expect(getSize(queue)).toBe(expected);
    queue = {
      list: [10, 5, 25],
      capacity: 10,
    };
    expected = 3;
    expect(getSize(queue)).toBe(expected);
  });

  test("should throw an error if the queue has a wrong attribut", () => {
    let queue = {
      listOfNumbers: [],
      capacityOfList: 10,
    };
    expect(() => getSize(queue)).toThrowError(/queue/gi);
  });
});

describe("test if the queue is empty", () => {
  test("should return true if the queue is empty", () => {
    let queue = {
      list: [],
      capacity: 10,
    };
    let expected = true;
    expect(isEmpty(queue)).toBe(expected);
  });

  test("should return false if the queue is not empty", () => {
    let queue = {
      list: [1],
      capacity: 10,
    };
    let expected = false;
    expect(isEmpty(queue)).toBe(expected);
  });

  test("should throw an error if the queue has a wrong attribut", () => {
    let queue = {
      listOfNumbers: [],
      capacityOfList: 10,
    };
    expect(() => isEmpty(queue)).toThrowError(/queue/gi);
  });
});

describe("test if the queue is full", () => {
  test("should return true if the queue is full", () => {
    let queue = {
      list: [1, 2],
      capacity: 2,
    };
    let expected = true;
    expect(isFull(queue)).toBe(expected);
  });

  test("should return false if the queue is not full", () => {
    let queue = {
      list: [1],
      capacity: 2,
    };
    let expected = false;
    expect(isFull(queue)).toBe(expected);
  });

  test("should throw an error if the queue has a wrong attribut", () => {
    let queue = {
      listOfNumbers: [],
      capacityOfList: 10,
    };
    expect(() => isFull(queue)).toThrowError(/queue/gi);
  });
});

describe("test add element to the queue", () => {
  test("the element should be added to an empty queue", () => {
    let queue = {
      list: [],
      capacity: 10,
    };
    let element = 1;
    let expected = {
      list: [element],
      capacity: 10,
    };
    expect(addQueue(element, queue)).toStrictEqual(expected);
  });

  test("the element should be added to a queue which is not empty", () => {
    let queue = {
      list: [1],
      capacity: 10,
    };
    let element = 1;
    let expected = {
      list: [1, element],
      capacity: 10,
    };
    expect(addQueue(element, queue)).toStrictEqual(expected);
  });

  test("should throw an error if the queue is Full ", () => {
    let queue = {
      list: [2, 2],
      capacity: 2,
    };
    let element = 1;
    expect(() => addQueue(element, queue)).toThrowError(/queue/gi);
  });

  test("should throw an error if the queue has a wrong attribut", () => {
    let queue = {
      listOfNumbers: [],
      capacityOfList: 10,
    };

    let element = 1;
    expect(() => addQueue(element, queue)).toThrowError(/queue/gi);
  });

  test("should throw an error if the element is not a number", () => {
    let queue = {
      list: [],
      capacity: 10,
    };

    let element = "something";
    expect(() => addQueue(element, queue)).toThrowError(/number/gi);
  });
});

describe("test the removeFirst form a queue", () => {
  test("should return the new queue without the first element", () => {
    let queue = {
      list: [1],
      capacity: 10,
    };
    let expected = {
      list: [],
      capacity: 10,
    };
    expect(removeFirst(queue)).toStrictEqual(expected);
  });

  test("should throw an error if the queue is empty", () => {
    let queue = {
      list: [],
      capacity: 10,
    };
    expect(() => removeFirst(queue)).toThrowError(/queue/gi);
  });

  test("should throw an error if the queue has a wrong attribut", () => {
    let queue = {
      listOfNumbers: [],
      capacityOfList: 10,
    };
    expect(() => removeFirst(queue)).toThrowError(/queue/gi);
  });
});
