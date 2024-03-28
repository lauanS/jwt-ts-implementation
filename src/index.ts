import { JWTEncode } from '@/jwt';

console.log(JWTEncode({ name: 'github', url: 'https://github.com' }, 'super-secret'));
