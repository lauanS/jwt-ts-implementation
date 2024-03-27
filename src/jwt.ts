import { base64Enconde, dictionaryToJSONString }  from '@/utils';

const JWTHeaderDictionary = {};

function SHA256SignAndEncode() {

}

export function JWTEncode(payload: any, secret: string) {
  const stringifiedPayload = dictionaryToJSONString(payload);
  const stringifiedHeader = dictionaryToJSONString(JWTHeaderDictionary);

  const base64Content = base64Enconde(stringifiedPayload + '.' + stringifiedHeader);

  const signature = SHA256SignAndEncode(base64Content, secret);

  return base64Content + '.' + signature;
}
