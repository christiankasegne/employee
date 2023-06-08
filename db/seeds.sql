INSERT INTO department (name)
VALUES  
        ('Human Resources'),
        ('Accounting'),
        ('Engineering'),
        ('Sales');

INSERT INTO roll (title, salary, department_id)
VALUES  
        ('HR', 45000, 1),
        ('HR Manager', 65000, 1 ),
        ('Account Manager', 85000, 2),
        ('Junior Developer', 90000, 3),
        ('Senior Developer', 150000, 3),
        ('Sale', 50000, 4),
        ('Sale Manager', 75000, 4);

INSERT INTO employee (first_name, last_name, roll_id, manager_id)
VALUES 
        ('Kevin', 'Lee', 2, null),
        ('jeremy', 'Brooks', 3, null),
        ('Matthew', 'Yemer', 5, null),
        ('Fertuna', 'Balie', 7, null),
        ('Taylor', 'Smith', 1, 1),
        ('Martha', 'Hagos', 4, 3),
        ('Jimmy', 'Berekete', 6, 4);   





