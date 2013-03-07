function compare_num(num1,num2){
    if (num1 == num2) {
        return '4A0B';
    } else {
        var different_counts_of_num1_and_num2=0;
        var similar_counts_of_num1_and_num2=0;
        var same_count_of_num1_and_num2=0;
        for(var i=0;i<4;i++){
            var num1_each_value=num1.charAt(i);
            var num2_each_value_to_judge_weather_are_same=num2.charAt(i);
            if(num1_each_value==num2_each_value_to_judge_weather_are_same){
                same_count_of_num1_and_num2++;
            }
            for(var j=0;j<4;j++){
                var num2_each_value=num2.charAt(j);
                if(num1_each_value!=num2_each_value){
                    different_counts_of_num1_and_num2++;
                }else{
                    similar_counts_of_num1_and_num2++;
                }
            }
        }
        if(different_counts_of_num1_and_num2==16&&similar_counts_of_num1_and_num2==0&&same_count_of_num1_and_num2==0){
            return "0A0B";
        }
        if(different_counts_of_num1_and_num2==12&&similar_counts_of_num1_and_num2==4&&same_count_of_num1_and_num2==0){
            return "0A4B";
        }
        if(different_counts_of_num1_and_num2==14&&similar_counts_of_num1_and_num2==2&&same_count_of_num1_and_num2==2){
            return '2A0B';
        }
        if(different_counts_of_num1_and_num2==12&&similar_counts_of_num1_and_num2==4&&same_count_of_num1_and_num2==2){
            return '2A2B';
        }
    }
}