import {formatCurrency} from '../../scripts/utils/monery.js'

  console.log('converts cents into dolloars');
if( formatCurrency(2095) === '20.95') {
  console.log('passed')
}else {
   console.log('failed');
}

 console.log('works with 0')

if(formatCurrency(0) === '0.00') {
   console.log('passed');
}else {
   console.log('failed')
}