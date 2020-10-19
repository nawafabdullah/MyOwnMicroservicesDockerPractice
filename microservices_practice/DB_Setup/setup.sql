/* USE NawafDB; */
CREATE TABLE Clients (
    id int, 
    name varchar(200), 
    email varchar (255)
    );
/*declare names varchar(200) array = (Nawaf, Mohanned, Omar);
declare emails varchar(255) array = (dummy@dummy.com, test@test.com, email@email.com);
CREATE PROCEDURE InsertFunction()
BEGIN
    DECLARE i int DEFAULT 0;
    WHILE i < 3 DO
        INSERT INTO Clients VALUES (i, names[i], emails[i]);
        SET i = i + 1;
    END WHILE;
END

CALL InsertFunction ();
*/ 

INSERT INTO Clients VALUES (1, "Nawaf", "dummy@dummy.com");
INSERT INTO Clients VALUES (2, "Mohanned", "test@test.com");
INSERT INTO Clients VALUES (3, "Omar", "email@email.com");

/*int a [6] = {1,2,3,4,5,6};