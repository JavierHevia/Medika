CREATE DATABASE MedikaDB;
USE MedikaDB;
-- si ya esta creada la base de datos
DROP TABLE PACIENTE;
DROP TABLE MEDICINA;
DROP TABLE EMPLEADO;
-- fin drop

CREATE TABLE MEDICINA (
    nombre         VARCHAR(100),
    cantidad       INTEGER,
    distribuidora  VARCHAR(100),
    codigo         INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE EMPLEADO(
    nombre    VARCHAR(100),
    apellido  VARCHAR(100),
    dpi       VARCHAR(13),
    rol       VARCHAR(100),
    telefono  VARCHAR(12),
    correo    VARCHAR(50),
    fechanac  VARCHAR(100),
    cod       INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT
);

select * from EMPLEADO;
select * from MEDICINA;