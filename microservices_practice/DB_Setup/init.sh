docker build -t nawaf-sql .
docker run --name sql-container -d -p 8080:30 nawaf-sql
echo "Waiting For DB..."
docker exec sql-container mysqladmin --silent --wait=30 -uNawafUser -pNawafPass ping || exit 1 
echo "Inserting data..."
sleep 70
docker exec -i sql-container mysql -uNawafUser -pNawafPass NawafDB < setup.sql