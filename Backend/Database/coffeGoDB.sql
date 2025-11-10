INSERT INTO category (nameCategory)
VALUES
('Café Caliente'),
('Café Frío'),
('Té Caliente'),
('Té Frío'), 
('Frappé'), 
('Bebidas Embotelladas'),
('Snacks'),
('Postres');

INSERT INTO product (nameProduct, detailsProduct, priceProduct, idCategory)
VALUES

('Café Americano', 'Café espresso alargado con agua caliente.', 2.50, 1),
('Cappuccino', 'Espresso con leche vaporizada y espuma cremosa.', 3.20, 1),
('Latte Vainilla', 'Café espresso con leche vaporizada y un toque de vainilla.', 3.60, 1),
('Iced Latte', 'Café espresso con leche fría y hielo.', 3.40, 2),
('Cold Brew', 'Café infusionado en frío durante 20 horas, sabor suave y natural.', 3.80,2),
('Iced Caramel Macchiato', 'Leche fría, espresso y caramelo sobre hielo.', 4.10, 2),
('Té Verde Matcha', 'Matcha japonés batido con agua caliente.', 2.90, 3),
('Té Chai Latte', 'Té negro con mezcla de especias, leche caliente y espuma.', 3.50, 3),
('Infusión Relax', 'Infusión de hierbas naturales sin cafeína.', 2.70, 3),
('Té Helado de Limón', 'Té negro con jugo natural de limón y hielo.', 3.00, 4),
('Té Verde Frío con Menta', 'Té verde natural con hojas de menta fresca.', 3.20, 4),
('Té de Frutas Tropicales', 'Infusión fría con sabores exóticos y trozos de fruta.', 3.50, 4),
('Frappé de Café', 'Mezcla de café, hielo y crema batida.', 4.20, 5),
('Frappé de Caramelo', 'Bebida helada de café con salsa de caramelo y nata.', 4.50, 5),
('Frappé de Chocolate', 'Batido de chocolate con hielo y crema.', 5.60, 5);

INSERT INTO client (nameClient, usernameClient, emailClient, passwordClient,rolUserClient) 
VALUES
('Eliu','Viera Lorenzo', 'admin@admin.com', '$2a$12$.spuq0gwvtGtNVQ7BLrK8ehWlKgr1XqJH59yduMFylA.G2P5cj1Xe','true'); 

