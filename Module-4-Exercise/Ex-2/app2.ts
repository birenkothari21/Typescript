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

const students = [
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

const fun1: (
	students: {
		id: number;
		name: string;
		collage: string;
		marks: number;
	}[]
) => {
	id: number;
	name: string;
	collage: string;
	marks: number;
}[] = (students) => {
	const studs = students.filter((student) => student.marks > 70);
	return studs;
};

const fun2: (
	students: {
		id: number;
		name: string;
		collage: string;
		marks: number;
	}[]
) => string[] = (students) => {
	const studName: string[] = [];

	students.forEach((student) => {
		studName.push(student.name);
	});

	return studName;
};

const fun3: (
	students: {
		id: number;
		name: string;
		collage: string;
		marks: number;
		result?: "PASS" | "FAIL";
	}[]
) => {
	id: number;
	name: string;
	collage: string;
	marks: number;
	result?: "PASS" | "FAIL";
}[] = (students) => {
	const studs = students.map((student) => {
		if (student.marks > 33) {
			student.result = "PASS";
			return student;
		} else {
			student.result = "FAIL";
			return student;
		}
	});
	return studs;
};

const passedStudents = fun1(students);
const studentNames = fun2(students);
const passedStudents2 = fun3(students);

console.log("Students Whose Marks Greater Than 70 : ", passedStudents);
console.log("Students Names : ", studentNames);
console.log("Students With Result : ", passedStudents2);
