var name = "eshanvi"

var marks = [100,99,100,98];
//marks.push(99)
//marks.pop()
//for(initialization;condition;increment/decrement)
/*for(var i = 0;i<marks.length;i++){ //i = i + 1, i += 1
    console.log(marks[i])
}*/

//position and trajectory
/*var pos = [100,200];
console.log(pos)
var trajectory = [];
trajectory.push(pos)
pos = [200,300];
trajectory.push(pos)*/

trajectory = [[100,200],[300,400],[500,600]]

for(var i = 0;i<trajectory.length;i++){
    console.log(trajectory[i][0], trajectory[i][1])
}
