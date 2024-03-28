import { base64Encode, dictionaryToJSONString }  from '@/utils';
import type { SerializedValue } from '@/utils';

const JWTHeaderDictionary = {};

function SHA256SignAndEncode(payload: string, secret: string): string {
  return '';
}

export function JWTEncode(payload: SerializedValue, secret: string) {
  const stringifiedPayload = dictionaryToJSONString(payload);
  const stringifiedHeader = dictionaryToJSONString(JWTHeaderDictionary);

  const base64Content = base64Encode(stringifiedPayload + '.' + stringifiedHeader);

  const signature = SHA256SignAndEncode(base64Content, secret);

  return base64Content + '.' + signature;
}
