describe("can they tobe added",function(){
    it("整除",function(){
        expect(8,2).toEqual(4);
    })
    it("有余数",function(){
        expect(9,2).toEqual(4);
    })
    it("除数为零",function(){
        expect(9,0).toEqual(false)
    })
});