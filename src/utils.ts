export type SerializedPrimitive = string | number | boolean | null | undefined;

export type SerializedValue = SerializedPrimitive | SerializedPrimitive[] | {
  [key: string]: SerializedPrimitive;
};

export function base64Encode(input: string): string {
  const buffer = Buffer.from(input);
  return buffer.toString('base64url');;
}

export function dictionaryToJSONString(dictionary: SerializedValue): string {
  return JSON.stringify(dictionary);
}

export function SHA256SignAndEncode(payload: string, secret: string): string {
  return '';
}
