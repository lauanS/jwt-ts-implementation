import { base64Encode, dictionaryToJSONString, SHA256SignAndEncode }  from '@/utils';
import type { SerializedValue } from '@/utils';

const JWTHeaderDictionary = {
  alg: 'HS256',
  typ: 'JWT'
};

export function JWTEncode(payload: SerializedValue, secret: string) {
  const stringifiedPayload = dictionaryToJSONString(payload);
  const stringifiedHeader = dictionaryToJSONString(JWTHeaderDictionary);

  const base64Payload = base64Encode(stringifiedPayload);
  const base64Header = base64Encode(stringifiedHeader);

  const base64Content = base64Header + '.' + base64Payload;

  const signature = SHA256SignAndEncode(base64Content, secret);

  return base64Content + '.' + signature;
}
