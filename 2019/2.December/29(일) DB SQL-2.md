# SQL-2

# 1. Joins

두 개 이상의 테이블에서 칼럼을 중심으로 테이블의 행을 결합함.



* (INNER) JOIN: 겹치는 값만 return함
* LEFT (OUTER) JOIN: 모든 왼쪽 table의 값, 겹치는 값을 return
* RIGHT (OUTER) JOIN: 모든 오른쪽 table의 값, 겹치는 값을 return
* FULL (OUTER) JOIN: 모든 값 return

![29-1. join](img/29-1. join.png)



> 다음의 사이트에서 SQL명령어를 입력하면 직접 해 볼 수 있다: https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all

```sql
SELECT * FROM orders;
```

![29-2. orders](img/29-2. orders.png)



```sql
SELECT * FROM customers;
```

![29-3. customers](img/29-3. customers.png)



```sql
SELECT orders.orderID, customers.customerName, orders.orderDate FROM orders INNER JOIN customers ON orders.customerID=customers.customerID;
```

![29-4. join example](img/29-4. join example.png)



# 2. MySQL Workbench

## 2-1. EER diagram 그리기

1. Database > Reverse Engineer...

![29-6](img/29-6.png)

2. 연결할 DB 설정.

   ![29-7](img/29-7.png)

3. 연결 상황 보여줌. 완료되면 Next

   ![29-8](img/29-8.png)

4. Reverse Engineer 할 Schema 선택

   ![29-9](img/29-9.png)

5. 진행 상황 보여 줌.

   ![29-10](img/29-10.png)

6. Next

   ![29-11](img/29-11.png)

7. Next

   ![29-12](img/29-12.png)

8. Next![29-13](img/29-13.png)

9. MySQL Model에 EER Diagram이 생김! 그 Diagram을 더블클릭하면

![29-14](img/29-14.png)

10. 아래와 같이 다이어그램이 생긴 것을 알 수 있다.

![29-15](img/29-15.png)





## 2-2. EER diagram을 토대로 테이블 생성하기

Database > Forword Engineer...

![29-16](img/29-16.png)



EER diagram을 만들때와 같이 next, next를 눌러주면 된다.

만약 Error가 뜬다면 Error메세지를 잘 읽어보고 해결하면 됨.