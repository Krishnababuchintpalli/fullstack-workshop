select  department,count(*) employee_count,round(avg(salary),2) as avg_salary ,max(salary) as max_salary FROM  employees
group by department 
having count(*)>2;