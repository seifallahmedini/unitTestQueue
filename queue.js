init = (capacity) => {
  if (capacity < 0) {
    throw new Error("the capacity is less than zero");
  }
  return { list: [], capacity: capacity };
};

getCapacity = (queue) => {
  if (queue.list === undefined || queue.capacity === undefined) {
    throw new Error("the queue does have a wrong attributs");
  }
  return queue.capacity;
};

getSize = (queue) => {
  if (queue.list === undefined || queue.capacity === undefined) {
    throw new Error("the queue does have a wrong attributs");
  }
  return queue.list.length;
};

isEmpty = (queue) => {
  if (queue.list === undefined || queue.capacity === undefined) {
    throw new Error("the queue does have a wrong attributs");
  }
  return queue.list.length === 0;
};

isFull = (queue) => {
  if (queue.list === undefined || queue.capacity === undefined) {
    throw new Error("the queue does have a wrong attributs");
  }
  return queue.list.length === queue.capacity;
};

addQueue = (element, queue) => {
  if (typeof element !== "number") {
    throw new Error("the element should be a number");
  }
  if (queue.list === undefined || queue.capacity === undefined) {
    throw new Error("the queue does have a wrong attributs");
  }
  if (!isFull(queue)) {
    queue.list.push(element);
    return queue;
  } else {
    throw new Error("the queue is Full");
  }
};

removeFirst = (queue) => {
  if (queue.list === undefined || queue.capacity === undefined) {
    throw new Error("the queue does have a wrong attributs");
  }
  if (!isEmpty(queue)) {
    queue.list.shift();
    return queue;
  } else {
    throw new Error("the queue is empty");
  }
};

module.exports = {
  init,
  getCapacity,
  getSize,
  isEmpty,
  isFull,
  addQueue,
  removeFirst,
};
