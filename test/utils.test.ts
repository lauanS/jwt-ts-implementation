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

describe('SHA256SignAndEncode function', () => {
  it('Should sign and encode the payload using SHA256 and secret key equal implementation in Classic ASP', () => {
    /*
      { name: 'lauan' }
    */
    const payload = 'ew0KICAgICJ0eXAiOiAiSldUIiwNCiAgICAiYWxnIjogIkhTMjU2Ig0KfQ.ew0KICAgICJuYW1lIjogImxhdWFuIg0KfQ'
    
    const secret = 'SharedSecret';

    const expectedOutput = 'UhHNOciuNbDfAkNXe1VOXwlXlF4DzXZLgNvv_5WEI3A';
    const encodedString = SHA256SignAndEncode(payload, secret);

    expect(encodedString).toEqual(expectedOutput);    
  });

  it('Should sign and encode the payload equal implementation in jwt.io', () => {
    /*
      { name: 'lauan' }
    */
    const payload = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoibGF1YW4ifQ'
    
    const secret = 'SharedSecret';

    const expectedOutput = 'ycvBDqJDFVisJ7CIpAP3SLWL7gfCENBIePlcChfcqnw';
    const encodedString = SHA256SignAndEncode(payload, secret);

    expect(encodedString).toEqual(expectedOutput);    
  });

  it('Should works equal the default example on jwt.io', () => {
    /*
      {
        "sub": "1234567890",
        "name": "John Doe",
        "iat": 1516239022
      }
    */
    const payload = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'
    
    const secret = 'your-256-bit-secret';

    const expectedOutput = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const encodedString = SHA256SignAndEncode(payload, secret);

    expect(encodedString).toEqual(expectedOutput);    
  });
});
