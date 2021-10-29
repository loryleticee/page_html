CREATE TABLE personne (
    `id` TINYINT(3) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `nom` VARCHAR(100) NOT NULL,
    `prenom` VARCHAR(100) NOT NULL,
    `age` TINYINT(3) NOT NULL,
    `adresse` VARCHAR(255) NOT NULL,
    `type` ENUM('professeur', 'élève')
);

CREATE TABLE matiere (
    `id` TINYINT(3)  AUTO_INCREMENT NOT NULL,
    `titre` VARCHAR(50) UNIQUE NOT NULL,
    `id_personne` TINYINT(3) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `Fk_personne` FOREIGN KEY (`id_personne`)
    REFERENCES personne(`id`)
);

INSERT INTO personne(`nom`, `prenom`, `age`, `adresse`, `type`) VALUES('DUPONT', 'Jean', 29, '100 rue des Eglantiers 75004', 'élève');
INSERT INTO personne(`nom`, `prenom`, `age`, `adresse`, `type`) VALUES('LAFONT', 'Huber', 50, '2 alle', 'professeur');
INSERT INTO personne(`nom`, `prenom`, `age`, `adresse`, `type`) VALUES('TOTO', 'Albert', 19, '5 impasse du temple 98005', 'professeur');



