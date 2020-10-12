prepare:
	bash init.sh	
drop:
	docker exec -i sql-container mysql -uNawafUser -pNawafPass < drop.sql

stop:
	docker stop $$(docker ps -a -q)
	docker rm $$(docker ps -a -q)

destroy:
	docker image rm -f $$(docker images -a -q)
