USE bankmanual;


SELECT * FROM productsinfo;
INSERT INTO productsinfo VALUES(idProd, 'Esmerilhadeira Angular', '4556159-000', 1);

SELECT * FROM product;
INSERT INTO product VALUES('4556159-000', 'img_360', 1, 1);

SELECT * FROM montage;
INSERT INTO montage VALUES(idMontage, 'img_principal01', 1);
INSERT INTO montage VALUES(idMontage, 'img_principal01', 2);

SELECT * FROM subtitleimage;
INSERT INTO subtitleimage VALUES(idSubtitleImage, 1, 2);
INSERT INTO subtitleimage VALUES(idSubtitleImage, 1, 1);
INSERT INTO subtitleimage VALUES(idSubtitleImage, 3, 2);

SELECT * FROM imgmontage;
INSERT INTO imgmontage values(idImgMontage, 'img_montage01.png');
INSERT INTO imgmontage values(idImgMontage, 'img_montage02.png');
INSERT INTO imgmontage values(idImgMontage, 'img_montage03.png');

SELECT * FROM subtitlemontage;
INSERT INTO subtitlemontage values(idSubtitle, 'imagem de abacaxi', 1);
INSERT INTO subtitlemontage values(idSubtitle, 'imagen de piña', 2);

SELECT * FROM categories;
INSERT INTO categories VALUES(idCategories, 1, 1);


SELECT * FROM category;
INSERT INTO category VALUES(idCategory, 'Furadeira');

SELECT * FROM languages;
INSERT INTO languages values(idLanguages, 'pt-BR');
INSERT INTO languages values(idLanguages, 'es-ES');