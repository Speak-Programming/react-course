import { render, screen } from '@testing-library/react';
import { isPolindrom } from './function/functions.ts';
import App from './App';


test('Check word is polindorm',()=>{

   const result1 = isPolindrom('cata');
   const result2 = isPolindrom('ata');

   expect(result1).toEqual(false)
   expect(result2).toEqual(true)

})
