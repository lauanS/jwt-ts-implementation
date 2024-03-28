export type SerializedPrimitive = string | number | boolean | null | undefined;

export type SerializedValue = SerializedPrimitive | SerializedPrimitive[] | {
  [key: string]: SerializedPrimitive;
};

export function base64Enconde(input: string): string {
  return '';
}

export function dictionaryToJSONString(dictionary: SerializedValue): string {
  return '';
}

