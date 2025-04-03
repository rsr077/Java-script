import {formatCurrency} from '../scripts/utils/monery.js';

describe('test suite: formatCurrency', () => {
   if('cosnverts cents into dollars', () => {
     expect(formatCurrency(2095)).toEqual('20.95');
   });
})