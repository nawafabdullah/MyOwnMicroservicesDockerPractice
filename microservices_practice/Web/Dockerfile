FROM node


#ENTRYPOINT ["chmod", "+x", "/usr/src/app/docker-entrypoint.sh"]
WORKDIR /home/ 
COPY ./ContainerFiles/ ./Web/
CMD tail -f /dev/null 

#&& bash ./Website/init.sh


#ENV MYSQL_ROOT_PASSWORD NawafPass
#ENV MYSQL_DATABASE NawafDB
#ENV MYSQL_USER NawafUser
#ENV MYSQL_PASSWORD NawafPass
#EXPOSE 3306




#CMD bash init.sh



#ENTRYPOINT ["chmod" + "+777" + "InsertToDB.sh"]
#CMD ["chmod" + "+777" + "InsertToDB.sh"+ " &&" + "./InsertToDB.sh"]
#RUN ["mysql" + "-uNawafUser" + "-pNawafPass" + "<" + "setup.sql"]
#CMD ["source" + "setup.sh"]
