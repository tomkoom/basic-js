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
  let names = Array.from(arguments)
    .flat()
    .filter(n => typeof n === 'string')
    .map(n => n.toUpperCase());
  let res = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i].includes(' ')) {
      res.push(names[i].split(' ').join('').charAt(0));

    } else res.push(names[i].charAt(0));
  }

  return res.sort().join('');
}

// console.log(createDreamTeam([
//   ['David Abram'],
//   ['Robin Attfield'],
//   'Thomas Berry',
//   ['Paul R.Ehrlich'],
//   'donna Haraway',
//   ' BrIaN_gOodWiN  ',
//   {
//     0: 'Serenella Iovino'
//   },
//   'Erazim Kohak',
//   '  val_plumwood',
// ]));

//BDETV