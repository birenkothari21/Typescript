/*
    2) Create arrow functions which takes parameter as student's(Object) array
        1. function returns those students array whose marks is greater than 70.
        2. function returns array which contains only name of all students
        3. function returns students array with one additional field in student object. Field name is result if marks is grater than 33, student's result is ""PASS"" otherwise ""FAIL"".
            Note: don't use ""any"" as variable type(students: any)
            students = [
                {
                    id: 1,
                    name: ""Mohan"",
                    collage: ""VVP"",
                    marks: 60
                },
                {
                    id: 2,
                    name: ""Rakesh"",
                    collage: ""VVP"",
                    marks: 71
                },
                {
                    id: 3,
                    name: ""Manohar"",
                    collage: ""GECR"",
                    marks: 80
                },
                {
                    id: 4,
                    name: ""Rohan"",
                    collage: ""GECR"",
                    marks: 70
                },
                {
                    id: 5,
                    name: ""Mohit"",
                    collage: ""DARSHAN"",
                    marks: 31
                }
            ];

            output:
            1> [
                {
                    id: 2,
                    name: ""Rakesh"",
                    collage: ""VVP"",
                    marks: 71
                },
                {
                    id: 3,
                    name: ""Manohar"",
                    collage: ""GECR"",
                    marks: 80
                }
            ]

            2> ['Mohan', 'Rakesh', 'Manohar', 'Rohan', 'Mohit']
            3> [
                {
                    id: 1,
                    name: ""Mohan"",
                    collage: ""VVP"",
                    marks: 60,
                    result: 'PASS'
                },
                {
                    id: 2,
                    name: ""Rakesh"",
                    collage: ""VVP"",
                    marks: 71,
                    result: 'PASS'
                },
                {
                    id: 3,
                    name: ""Manohar"",
                    collage: ""GECR"",
                    marks: 80,
                    result: 'PASS'
                },
                {
                    id: 4,
                    name: ""Rohan"",
                    collage: ""GECR"",
                    marks: 70,
                    result: 'PASS'
                },
                {
                    id: 5,
                    name: ""Mohit"",
                    collage: ""DARSHAN"",
                    marks: 31
                    result: 'FAIL'
                }
            ];
*/
var students = [
    {
        id: 1,
        name: "Mohan",
        collage: "VVP",
        marks: 60,
    },
    {
        id: 2,
        name: "Rakesh",
        collage: "VVP",
        marks: 71,
    },
    {
        id: 3,
        name: "Manohar",
        collage: "GECR",
        marks: 80,
    },
    {
        id: 4,
        name: "Rohan",
        collage: "GECR",
        marks: 70,
    },
    {
        id: 5,
        name: "Mohit",
        collage: "DARSHAN",
        marks: 31,
    },
];
var fun1 = function (students) {
    var studs = students.filter(function (student) { return student.marks > 70; });
    return studs;
};
var fun2 = function (students) {
    var studName = [];
    students.forEach(function (student) {
        studName.push(student.name);
    });
    return studName;
};
var fun3 = function (students) {
    var studs = students.map(function (student) {
        if (student.marks > 33) {
            student.result = "PASS";
            return student;
        }
        else {
            student.result = "FAIL";
            return student;
        }
    });
    return studs;
};
var passedStudents = fun1(students);
var studentNames = fun2(students);
var passedStudents2 = fun3(students);
console.log("Students Whose Marks Greater Than 70 : ", passedStudents);
console.log("Students Names : ", studentNames);
console.log("Students With Result : ", passedStudents2);
