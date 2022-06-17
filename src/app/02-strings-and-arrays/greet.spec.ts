import {greet} from './greet';

describe('greet', () => {
    it('should contain name in the output', () => {
        const result = greet('Arun');
        expect(result).toBe('Welcome Arun');
        expect(result).toContain('Arun');
        expect(result).toBeInstanceOf(String);
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
    });
});
