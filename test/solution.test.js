const solution = require('../src/solution');

test('test case 1', () => {
    const s1 = 'HARRY';
    const s2 = 'SALLY';

    expect(solution.commonChild(s1, s2)).toBe(2);
});

test('test case 2', () => {
    const s1 = 'AA';
    const s2 = 'BB';

    expect(solution.commonChild(s1, s2)).toBe(0);
});

test('test case 3', () => {
    const s1 = 'SHINCHAN';
    const s2 = 'NOHARAAA';

    expect(solution.commonChild(s1, s2)).toBe(3);
});

