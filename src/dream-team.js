import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(/* members */) {
  let names = Array.from(arguments).flat();
  names = names.filter(n => typeof n === 'string');
  let res = [];

  for (let i = 0; i < names.length; i++) {
    res.push(names[i].charAt(0));
  }
  return res.sort().join('');
}

// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));