import { base64Encode } from '@/utils';

describe('base64Encode function', () => {
  it('Should encode a string to base64', () => {
    const input = 'Hello, World!';
    const expectedOutput = 'SGVsbG8sIFdvcmxkIQ==';
    const encodedString = base64Encode(input);

    expect(encodedString).toEqual(expectedOutput);
  });

  it('Should handle empty string input', () => {
    const input = '';
    const expectedOutput = '';
    const encodedString = base64Encode(input);

    expect(encodedString).toEqual(expectedOutput);
  });

  it('Should handle special characters', () => {
    const input = 'çãú.ø@#123';
    const expectedOutput = 'w6PDqcOuQEojMTIz';
    const encodedString = base64Encode(input);

    expect(encodedString).toEqual(expectedOutput);
  });
});
