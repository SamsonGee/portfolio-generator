const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

//this is the same as 
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// it is pushing the array objects from profileDataArgs (which captures what is received from terminal when node is processed) 
// and then assigned it to the corresponding array variable titles respectively 


// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // This...
//     // for (let i = 0; i < profileDataArr.length; i += 1) {
//     //   console.log(profileDataArr[i]);
//     // }
  
//     // console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));

//   };

// printProfileData(profileDataArgs);

//cut the generatePage function and added it to ./src/page-template

// `Name: ${userName}, Github: ${githubName}`;

// console.log(generatePage('Jane','janehub'));
// console.log(name, github);
// console.log(generatePage(name, github));

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});