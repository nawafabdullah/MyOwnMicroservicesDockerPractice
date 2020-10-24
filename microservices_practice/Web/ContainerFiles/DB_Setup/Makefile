prepare:
	docker build -t nawaf-sql .
#	docker run --name sql-container -d -p 8085:3009 nawaf-sql
#	docker run --name sql-container -d nawaf-sql
	
	docker run --name sql-container -d -p 8081:8081 nawaf-sql

#	docker run --name sql-container -d -p 8000:8000 nawaf-sql
	echo "Waiting For DB..."
	docker exec sql-container mysqladmin --silent --wait=85 -uNawafUser -pNawafPass ping || exit 1 
	echo "Inserting data..."
	sleep 70
	docker exec -i sql-container mysql -uNawafUser -pNawafPass NawafDB < setup.sql

#	bash init.sh

connect:
	echo "Connecting to Server..."
	docker exec -it sql-container /bin/bash
drop:
	docker exec -i sql-container mysql -uNawafUser -pNawafPass < drop.sql

stop:
	docker stop $$(docker ps -a -q)
	docker rm $$(docker ps -a -q)

destroy:
	docker image rm -f $$(docker images -a -q)
