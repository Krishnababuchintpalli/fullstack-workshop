select name,department,salary, row_number() over (order by salary desc) as row_num
from employees;