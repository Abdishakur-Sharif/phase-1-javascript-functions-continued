function saturdayFun(hobby = "roller-skate") {
    return `This Saturday, I want to ${hobby}!`;
}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));

const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(wrap = "*"){
    return function(adjective){
        return `You are ${wrap}${adjective}${wrap}!`;
    };
}
wrapAdjective()("a hard worker");
wrapAdjective("!!!")("a dedicated programmer");