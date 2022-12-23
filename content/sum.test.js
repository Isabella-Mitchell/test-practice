const { sum, createList, simple, max } = require('./sum');

// with a function
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// without a function, using an operator
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

// without a function. creating an object and checking it's values
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

describe("tests that I am writing", () => {
    describe("Inner message", () => {
        test('wrting out expect to be test', () => {
            expect(4 + 2).not.toBe(4);
        });
        test("writing out toEqual", () => {
            const data = {one: 1};
            data['two'] = 2;
            expect(data).toEqual({one: 1, two: 2});
        });
    });
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

test('false', () => {
    const f = false;
    expect(f).not.toBeTruthy();
    expect(f).toBeFalsy();
  });

  test('true', () => {
    const t = true;
    expect(t).not.toBeFalsy();
    expect(t).toBeTruthy();
  })

  // case sensitive
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  
  test('the shopping list has milk on it', () => {
    expect(createList('a', 'b', 'milk')).toEqual(['a', 'b', 'milk']);
  });

describe("Testing Arrow Functions", () => {
    test('Expect return value to be 15 or lower value if supplied', () => {
        expect(simple(16)).toBe(15);
        expect(simple(8)).toBe(8);
    });
    test('Expect return value to be the larger of two values supplied', () => {
        expect(max(5,10)).toEqual(10);
        expect(max(20,10)).toEqual(20);
    })
});