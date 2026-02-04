CREATE TABLE nutriente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_principal VARCHAR(50) NOT NULL,
    nome_tecnico VARCHAR(100),
    tipo ENUM('vitamina', 'mineral') NOT NULL
);

CREATE TABLE categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE nutriente_conteudo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nutriente_id INT NOT NULL,
    categoria_id INT NOT NULL,
    descricao TEXT NOT NULL,
    FOREIGN KEY (nutriente_id) REFERENCES nutriente(id),
    FOREIGN KEY (categoria_id) REFERENCES categoria(id)
) ENGINE=InnoDB;
