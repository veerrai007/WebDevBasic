let marks = [
    { name:"rahul", score:88},
    { name:"ram", score:65},
    { name:"veer", score:53},
    { name:"ravi", score:93},
    { name:"aajay", score:25}
]


let allscore = marks.reduce(
    function(acc,subject) {
        
        let total  = subject.score+acc;
        console.log(total);
        return total;
        
    },0
)



let highScore = marks.reduce(

    function(acc,sub){
        return sub.score>acc.score ? sub:acc;
    }
)

console.log(highScore);




let nestedarray = [[1,2,3],[4,5,6],[7,8,9]];

let flatarray = nestedarray.reduce(
    function(acc,sub){

        return acc.concat(sub);

    },[]
)

console.log(flatarray);




let arr = [4,2,7,5,9,1]

let bigNum = arr.reduce(
    function(acc,curr){
        return acc>curr?acc:curr;
    }
)

console.log(bigNum);





const number = [10,20,30,40,50];

let avg = number.reduce(
    function(acc,curr,index){
        if(index===number.length-1){
            return (acc+curr)/number.length
        }
        else{
            return acc+curr
        }
    }
)

console.log(avg);



