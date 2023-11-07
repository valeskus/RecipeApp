import { Dimensions } from 'react-native';

import { normalize } from './normalize';

describe('normalize', () => {
    beforeAll(() => {
        jest.spyOn(Dimensions, 'get');
    });

    it('should return the same size as we send to normalize the function when the width is 320', () => {
        const width320 = 320;

        jest.mocked(Dimensions.get).mockReturnValueOnce({
            width: width320,
            height: 0,
            scale: 0,
            fontScale: 0,
        });

        expect(normalize(17)).toBe(17);
    });

    it('should return a size greater than we send to normalize the function when the width is more than 320', () => {
        const width430 = 430;

        jest.mocked(Dimensions.get).mockReturnValueOnce({
            width: width430,
            height: 0,
            scale: 0,
            fontScale: 0,
        });

        expect(normalize(17)).toBeGreaterThan(17);
    });
});
