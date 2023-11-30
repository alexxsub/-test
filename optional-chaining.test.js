//опциональные цепочки (optional chaining)

let valid = {
  user: {
    address: {
      street: "main street",
    },
  },
};

function getAddress(data) {
  return data?.user?.address?.street;
}

function getAddressError(data) {
  return data.user.address.street;
}

test("Optional Chaining returns real values", () => {
  expect(getAddress(valid)).toBe("main street");
});

test("Optional chaining returns undefined for nullish properties.", () => {
  expect(getAddress()).toBe(undefined);
  expect(getAddress(null)).toBe(undefined);
  expect(getAddress({})).toBe(undefined);
});

test("Error executing.", () => {
  expect(getAddressError()).toBe(undefined);
});

valid = {
  user: {
    address: {
      street: "main street",
      neighbors: ["john doe", "jane doe"],
    },
  },
};

function getNeighbor(data, number) {
  return data?.user?.address?.neighbors?.[number];
}
function getNeighbor2(data, number) {
  if (data.hasOwnProperty("user"))
    if (data.user.hasOwnProperty("address"))
      if (data.user.address.hasOwnProperty("neighbors"))
        return data.user.address.neighbors[number];
      else return undefined;
}

function getNeighbor3(data, number) {
  return (
    data &&
    data.user &&
    data.user.address &&
    data.user.address.neighbors &&
    data.user.address.neighbors[number]
  );
}

test("Optional chaining works for array properties", () => {
  expect(getNeighbor(valid, 0)).toBe("john doe");
});

test("Optional chaining returns undefined for invalid array properties", () => {
  expect(getNeighbor({}, 0)).toBe(undefined);
});

test("Has property works for array properties", () => {
  expect(getNeighbor2(valid, 0)).toBe("john doe");
});

test("Has property returns undefined for invalid array properties", () => {
  expect(getNeighbor2({}, 0)).toBe(undefined);
});

test("&& returns undefined for invalid array properties", () => {
  expect(getNeighbor3({}, 0)).toBe(undefined);
});

const data = {
  user: {
    address: {
      street: "main street",
      neighbors: ["john doe", "jane doe"],
    },
    getNeighbors() {
      return data.user.address.neighbors;
    },
  },
};

function getNeighbors(data) {
  return data?.user?.getNeighbors?.();
}

test("Optional chaining also works with functions", () => {
  const neighbors = getNeighbors(data);
  expect(neighbors.length).toBe(2);
  expect(neighbors[0]).toBe("john doe");
});

test("Optional chaining returns undefined if a function does not exist", () => {
  const neighbors = getNeighbors({});
  expect(neighbors).toBe(undefined);
});
