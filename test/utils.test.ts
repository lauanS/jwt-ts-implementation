import { SHA256SignAndEncode, base64Encode, dictionaryToJSONString } from '@/utils';

describe('base64Encode function', () => {
  it('Should encode a string to base64', () => {
    const input = 'Hello, World!';
    const expectedOutput = 'SGVsbG8sIFdvcmxkIQ';
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
    const expectedOutput = 'w6fDo8O6LsO4QCMxMjM';
    const encodedString = base64Encode(input);

    expect(encodedString).toEqual(expectedOutput);
  });
});

describe('dictionaryToJSONString function', () => {
  it('Should serialize a dictionary with strings and numbers correctly', () => {
    const dictionary = {
      key1: 'value1',
      key2: 42,
      key3: false
    };
    const expectedOutput = '{"key1":"value1","key2":42,"key3":false}';
    const jsonString = dictionaryToJSONString(dictionary);
    expect(jsonString).toEqual(expectedOutput);
  });

  it('Should serialize a dictionary with null and undefined values correctly', () => {
    const dictionary = {
      key1: null,
      key2: undefined,
    };
    const expectedOutput = '{"key1":null}';
    const jsonString = dictionaryToJSONString(dictionary);
    expect(jsonString).toEqual(expectedOutput);
  });
});
