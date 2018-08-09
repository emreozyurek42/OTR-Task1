#!/usr/bin/env node

var program = require('commander');
var fs = require('fs');


var output1 = fs.readFileSync('data1.txt', 'utf8')
  .trim()
  .split('\r\n')
  .map(line => line.split('|'))
  .reduce((list, [lastName, firstName, gender, color, dob]) => {
    list.push({ lastName, firstName, gender, color, dob });
    return list;
  }, []);


var output2 = fs.readFileSync('data2.txt', 'utf8')
  .trim()
  .split('\r\n')
  .map(line => line.split(','))
  .reduce((list, [lastName, firstName, gender, color, dob]) => {
    list.push({ lastName, firstName, gender, color, dob });
    return list;
  }, []);

var output3 = fs.readFileSync('data3.txt', 'utf8')
  .trim()
  .split('\r\n')
  .map(line => line.split(' '))
  .reduce((list, [lastName, firstName, gender, color, dob]) => {
    list.push({ lastName, firstName, gender, color, dob });
    return list;
  }, []);

const byGender = (a, b) => {
  if (a.gender < b.gender) {
    return -1;
  }
  if (a.gender > b.gender) {
    return 1;
  }
  if (a.lastname < b.lastname) {
    return -1;
  }
  if (a.lastname > b.lastname) {
    return 1;
  }
}

const byDob = (a, b) => new Date(a.dob) - new Date(b.dob);

const byLastname = (a, b) => {
  if (a.lastName < b.lastName) {
    return 1;
  }
  if (a.lastName > b.lastName) {
    return -1;
  }
}

program
  .version('1.0.0')
  .description('Sort the data')

program
  .command('output1')
  .description('Sort by gender')
  .action(() => console.log(output1.sort(byGender)));

program
  .command('output2')
  .description('Sort by birth date ')
  .action(() => console.log(output2.sort(byDob)));

program
  .command('output3')
  .description('Sort by lastname ')
  .action(() => console.log(output3.sort(byLastname)));


program.parse(process.argv);

module.exports = {output1,output2,output3,byGender,byDob,byLastname};