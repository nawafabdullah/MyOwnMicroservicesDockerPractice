prepare:
	docker build -t nawaf-node .
	echo "Initiating Server..."
	docker run --name node-container -d -p 8080:80 nawaf-node
	
	docker exec -i node-container bash ./Web/init.sh
	
	
	
	
	
	#docker exec sql-container mysqladmin --silent --wait=30 -uNawafUser -pNawafPass ping || exit 1 
	#echo "Inserting data..."
	#sleep 70
	#docker exec -i sql-container mysql -uNawafUser -pNawafPass NawafDB < setup.sql

#	bash init.sh
connect: 
	echo "Connecting to Server..."
	docker exec -it node-container /bin/bash

drop:
	docker exec -i sql-container mysql -uNawafUser -pNawafPass < drop.sql

stop:
	docker stop $$(docker ps -a -q)
	docker rm $$(docker ps -a -q)

destroy:
	docker image rm -f $$(docker images -a -q)
