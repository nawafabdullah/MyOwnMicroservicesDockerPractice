prepare:
	docker build -t nawaf-web .
	docker run --name web-container -d nawaf-web
	
#	docker run --name sql-container -d -p 8085:3009 nawaf-sql
#	echo "Waiting For DB..."
#	docker exec sql-container mysqladmin --silent --wait=85 -uNawafUser -pNawafPass ping || exit 1 
#	echo "Inserting data..."
#	sleep 70
#	docker exec -i sql-container mysql -uNawafUser -pNawafPass NawafDB < setup.sql

#	bash init.sh

connect:
	echo "Connecting to Server..."
	docker exec -it web-container /bin/bash

stop:
	docker stop $$(docker ps -a -q)
	docker rm $$(docker ps -a -q)

destroy:
	docker image rm -f $$(docker images -a -q)
