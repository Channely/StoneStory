describe('lay out a random number',function(){
    it('it should be with four digits in it',function(){
        expect(a_random_num().length).toEqual(4);
    });
    it('it should be a random number',function(){
        var random_num1=a_random_num();
        var random_num2=a_random_num();
        expect(random_num1==random_num2).toBeFalsy();
    });
    it('it shouldn not have two same numbers within it',function(){
        var test_1000_times=0;
        for(k=0;k<1000;k++){
            var random_num3=a_random_num();
            var same_counter=0;
            for(i=0;i<4;i++){
                for(j=0;j<4;j++){
                    if(random_num3.charAt(i)==random_num3.charAt(j)){
                        same_counter++;
                    }
                }
            }
            if(same_counter==4){
                test_1000_times++;
            }
        }
        expect(test_1000_times).toEqual(1000);
    })
})