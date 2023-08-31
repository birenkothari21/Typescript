/*
    3)  Create one interface named Student contains id, name, college, age, gender properties. gender is a optional property.
        then after create one array of Student type. and write a logic that create one object that contains data about number of students in particular college. Done
        For Example:
    
        if students: Student = [
            {
                id: 1,
                name: 'Rohan',
                college: 'GEC',
                age: 20
            },
            {
                id: 2,
                name: 'Rahul',
                college: 'GEC',
                age: 20
            },
            {
                id: 3,
                name: 'Ram',
                college: 'VVP',
                age: 20
            },
            {
                id: 4,
                name: 'Rakesh',
                college: 'DARSHAN',
                age: 20
            },
        ];
        then output:  []
        [
            {
                college: 'GEC',
                noOfStudents: 2
            },
            {
                college: 'VVP',
                noOfStudents: 1
            },
            {
                college: 'DARSHAN',
                noOfStudents: 1
            }
        ]"
        */
var students = [
    {
        id: 1,
        name: "Rohan",
        college: "GEC",
        age: 20,
    },
    {
        id: 2,
        name: "Rahul",
        college: "GEC",
        age: 20,
    },
    {
        id: 3,
        name: "Ram",
        college: "VVP",
        age: 20,
    },
    {
        id: 4,
        name: "Rakesh",
        college: "DARSHAN",
        age: 20,
    },
];
var eachClgStudents = [];
var clgs = students.reduce(function (prev, curr) {
    if (prev[curr.college] == undefined) {
        prev[curr.college] = 1;
        return prev;
    }
    else {
        prev[curr.college] = prev[curr.college] + 1;
        return prev;
    }
}, {});
console.log("Colleges : ", clgs);
for (var key in clgs) {
    var cOb = {
        college: key,
        noOfStudents: clgs[key],
    };
    eachClgStudents.push(cOb);
}
console.log("College With No of Studs : ", eachClgStudents);
