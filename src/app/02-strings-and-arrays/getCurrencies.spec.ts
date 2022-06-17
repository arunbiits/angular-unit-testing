import { getCurrencies } from "./getCurrencies";
describe('getCurrencies', () => {
    it('should return all the currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
        expect(result).not.toContain('YEN');
        expect(result).not.toContain('INR');
    })
});