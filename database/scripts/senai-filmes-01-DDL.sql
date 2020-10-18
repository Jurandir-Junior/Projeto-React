-- Cria o banco de dados Filmes
create DATABASE Filmes;
GO

-- Define o banco de dados que ser� utilizado
USE Filmes;
GO

-- Cria a tabela Generos
CREATE TABLE Generos(
	IdGenero	INT PRIMARY KEY IDENTITY
	,Nome		VARCHAR (255) NOT NULL UNIQUE
);
GO

-- Cria a tabela Filmes
CREATE TABLE Filmes(
	IdFilme		INT PRIMARY KEY IDENTITY
	,Titulo		VARCHAR (255) NOT NULL UNIQUE
	,IdGenero	INT FOREIGN KEY REFERENCES Generos (IdGenero)
);
GO

-- Cria a tabela Usuarios
CREATE TABLE Usuarios(
	IdUsuario	INT PRIMARY KEY IDENTITY
	,Nome		VARCHAR (255) NOT NULL
	,Email		VARCHAR (255) NOT NULL UNIQUE
	,Senha		VARCHAR (255) NOT NULL
	,Permissao	VARCHAR (255) NOT NULL
);
GO


-- Insere dois g�neros na tabela Generos
INSERT INTO Generos	(Nome)
VALUES				('Ação')
					,('Drama');
GO

-- Insere dois filmes na tabela Filmes
INSERT INTO Filmes	(Titulo, IdGenero)
VALUES				('A vida é bela', 2)
					,('Rambo', 1);
GO

-- Insere dois novos usu�rios
INSERT INTO Usuarios (Nome,Email, Senha, Permissao)
VALUES				 ('Saulo','saulo@email.com', '123', 'Comum')
					,('Helena','adm@adm.com', '123', 'Administrador');
GO

-- Lista todos os g�neros
SELECT * FROM Generos;

-- Lista todos os filmes
SELECT * FROM Filmes;

-- Lista todos os g�neros definindo as colunas exibidas
SELECT IdGenero, Nome from Generos;

-- Lista todos os usu�rios
SELECT * FROM Usuarios

-- Busca um usu�rio atrav�s do email e da senha
SELECT IdUsuario, Email, Senha, Permissao FROM Usuarios WHERE Email = 'saulo@email.com' AND Senha = '123';