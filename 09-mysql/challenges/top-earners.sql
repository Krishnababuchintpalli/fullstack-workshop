SELECT
    department,
    name,
    salary,
    rank_in_dept
FROM (
    SELECT
        department,
        name,
        salary,
        ROW_NUMBER() OVER (
            PARTITION BY department
            ORDER BY salary DESC
        ) AS rank_in_dept
    FROM employees
) t
WHERE rank_in_dept <= 3;
