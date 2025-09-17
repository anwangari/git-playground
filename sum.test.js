const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

it('adds negative numbers', () => {
    expect(sum(-2, -1)).toBe(-3);
});

it('sums zeros', () => {
    expect(sum(0, 3)).toBe(3);
})