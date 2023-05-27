INSERT INTO department (name)
VALUES  ('Human Resources'),
        ('Accounting'),
        ('Engineering'),
        ('Sales');

SELECT * FROM department;



INSERT INTO roll (title, salary, department_id)
VALUES  ('HR', 45000, 1),
        ('HR Manager', 65000, 1 ),
        ('Account Manager', 85000, 2),
        ('Junior Developer', 90000, 3),
        ('Senior Developer', 150000, 3),
        ('Sale', 50000, 4),
        ('Sale Manager', 75000, 4);

SELECT * FROM roll;




INSERT INTO employee (first_name, Last_name, roll_id, manager_id)
VALUES  ('Taylor', 'Smith', 1, 2),
        ('Kevin', 'Lee', 2, null),
        ('jeremy', 'Brooks', 3, null),
        ('Martha', 'Hagos', 4, 5),
        ('Matthew', 'Yemer', 5, null),
        ('Jimmy', 'Berekete', 6, 7),
        ('Fertuna', 'Balie', 7, null);
    
SELECT * FROM employee;




