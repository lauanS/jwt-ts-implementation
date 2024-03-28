import { base64Encode, dictionaryToJSONString, SHA256SignAndEncode }  from '@/utils';
import type { SerializedValue } from '@/utils';

const JWTHeaderDictionary = {};

export function JWTEncode(payload: SerializedValue, secret: string) {
  const stringifiedPayload = dictionaryToJSONString(payload);
  const stringifiedHeader = dictionaryToJSONString(JWTHeaderDictionary);

  const base64Content = base64Encode(stringifiedPayload + '.' + stringifiedHeader);

  const signature = SHA256SignAndEncode(base64Content, secret);

  return base64Content + '.' + signature;
}
