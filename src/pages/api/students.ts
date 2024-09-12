import type { NextApiRequest, NextApiResponse } from 'next';

// Define the type for student
interface Student {
  id: number;
  name: string;
  age: number;
  subject: string;
}

// Mock data for students
let students = [
    { id: 1, name: 'Prakhar mishra', age: 20,subject:'Math' },
    { id: 2, name: 'Alok Singh', age: 21,subject: 'Java'},
    { id: 3, name: 'Suryansh Pandey', age: 21 ,subject:'Java'},
    { id: 4, name: 'Nikil Singh', age: 23,subject:'Web Tech ' },
    { id: 5, name: 'Anuj Yadav', age: 28,subject:'SQL' },
    { id: 6, name: 'Anupam Singh', age: 27,subject:'OS' },
    { id: 7, name: 'Akhil Singh', age: 19 ,subject:'DBMS'},
    { id: 8, name: 'Hemant Singh', age: 18,subject:'Computer Networks'},
    { id: 9, name: 'Priyanka Tiwari', age: 20,subject:'RTS' },
    { id: 10, name: 'Pragya Dubey', age: 21 ,subject:'BEE'},
  ];
  
  

// Define request body types
interface PostRequestBody {
  name: string;
  age: number;
  subject: string;
}

interface PutRequestBody extends PostRequestBody {
  id: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(students);

    case 'POST': {
      const { name, age, subject } = req.body as PostRequestBody;
      if (!name || !age || !subject) {
        return res.status(400).json({ error: 'Name, age, and subject are required.' });
      }
      const newStudent: Student = { id: Date.now(), name, age, subject };
      students.push(newStudent);
      return res.status(201).json(newStudent);
    }

    case 'PUT': {
      const { id, name, age, subject } = req.body as PutRequestBody;
      if (!id || !name || !age || !subject) {
        return res.status(400).json({ error: 'ID, name, age, and subject are required for update.' });
      }
      const index = students.findIndex((student) => student.id === id);
      if (index === -1) {
        return res.status(404).json({ error: 'Student not found.' });
      }
      students[index] = { id, name, age, subject };
      return res.status(200).json(students[index]);
    }

    case 'DELETE': {
      const id = parseInt(req.query.id as string, 10);
      if (isNaN(id)) {
        return res.status(400).json({ error: 'ID is required and must be a number.' });
      }
      students = students.filter((student) => student.id !== id);
      return res.status(200).json({ message: 'Student deleted successfully.' });
    }

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
