describe("can they tobe added",function(){


    it("int add int", function () {
        expect(ADD(2,9)).toEqual(11);
    });
    it("0 add int", function () {
        expect(ADD(2,0)).toEqual(2);
    });
    it("0 add 0",function(){
        expect(ADD(0,0)).toEqual(0)
    });
    it("-int add int",function(){
        expect(ADD(-9,7)).toEqual(-2)
    });
    it("-int add 0",function(){
        expect(ADD(-5,0)).toEqual(-5)
    });
    it("-int add -int",function(){
        expect(ADD(-1,-3)).toEqual(-4)
    });
});