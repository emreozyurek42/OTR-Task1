const assert = require('chai');
const {output1,output2,output3} = require('./index');
const byGender = require('./index').byGender;
const byDob = require('./index').byDob;
const byLastname = require('./index').byLastname;


describe('Index', function() {
    it('should sort data by gender', function(){
        let result = output1.sort(byGender);
        assert.equal(result,
    [{lastname:'Miller', firstName:'Kendall',gender:'Female',color:'Yellow',dob:'3/3/1986'},
    {lastname:'Wilson', firstName:'Jane',gender:'Female',color:'Orange',dob:'3/3/1987'},
    {lastname:'Doe', firstName:'John',gender:'Male',color:'Red',dob:'3/3/1983'},
    {lastname:'Smith', firstName:'Mark',gender:'Male',color:'Green',dob:'3/3/1984'},
    {lastname:'Brown', firstName:'Adam',gender:'Male',color:'Blue',dob:'3/3/1985'}]);
    });

    it('should sort data by birth date', function(){
        let result = output2.sort(byDob);
        assert.equal(result,
    [{lastname:'Doe', firstName:'John',gender:'Male',color:'Red',dob:'3/3/1983'},
    {lastname:'Smith', firstName:'Mark',gender:'Male',color:'Green',dob:'3/3/1984'},
    {lastname:'Brown', firstName:'Adam',gender:'Male',color:'Blue',dob:'3/3/1985'},
    {lastname:'Miller', firstName:'Kendall',gender:'Female',color:'Yellow',dob:'3/3/1986'},
    {lastname:'Wilson', firstName:'Jane',gender:'Female',color:'Orange',dob:'3/3/1987'},]);
    });

    it('should sort data by lastname', function(){
        let result = output3.sort(byLastname);
        assert.equal(result,
    [{lastname:'Wilson', firstName:'Jane',gender:'Female',color:'Orange',dob:'3/3/1987'},
    {lastname:'Smith', firstName:'Mark',gender:'Male',color:'Green',dob:'3/3/1984'},
    {lastname:'Miller', firstName:'Kendall',gender:'Female',color:'Yellow',dob:'3/3/1986'},
    {lastname:'Doe', firstName:'John',gender:'Male',color:'Red',dob:'3/3/1983'},
    {lastname:'Brown', firstName:'Adam',gender:'Male',color:'Blue',dob:'3/3/1985'}]);
    });


});


