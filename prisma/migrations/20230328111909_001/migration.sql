-- CreateTable
CREATE TABLE `cards` (
    `idCards` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(20) NULL,
    `description` VARCHAR(255) NOT NULL,
    `fkProd` VARCHAR(60) NOT NULL,
    `fkLanguage` INTEGER NOT NULL,

    INDEX `fkIdioma_idx`(`fkLanguage`),
    INDEX `fkProd_idx`(`fkProd`),
    PRIMARY KEY (`idCards`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `idCategories` INTEGER NOT NULL AUTO_INCREMENT,
    `fkCategory` INTEGER NOT NULL,
    `fkLanguage` INTEGER NOT NULL,

    INDEX `IdCategoryCategories_idx`(`fkCategory`),
    INDEX `IdLanguageCategories_idx`(`fkLanguage`),
    PRIMARY KEY (`idCategories`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `idCategory` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`idCategory`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imgmontage` (
    `idImgMontage` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`idImgMontage`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `infolog` (
    `idLog` INTEGER NOT NULL AUTO_INCREMENT,
    `action` VARCHAR(60) NOT NULL,
    `fkUser` INTEGER NOT NULL,
    `date` DATETIME(0) NOT NULL,

    INDEX `fkUser_idx`(`fkUser`),
    PRIMARY KEY (`idLog`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `languages` (
    `idLanguages` INTEGER NOT NULL AUTO_INCREMENT,
    `language` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`idLanguages`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `login` (
    `idLogin` INTEGER NOT NULL AUTO_INCREMENT,
    `user` VARCHAR(45) NOT NULL,
    `password` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`idLogin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `montage` (
    `idMontage` INTEGER NOT NULL AUTO_INCREMENT,
    `img_guide` VARCHAR(60) NOT NULL,
    `fkSubtitleImage` INTEGER NOT NULL,

    INDEX `IDSubititleImage_idx`(`fkSubtitleImage`),
    PRIMARY KEY (`idMontage`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pdf` (
    `idPDF` INTEGER NOT NULL AUTO_INCREMENT,
    `pdf` VARCHAR(60) NOT NULL,
    `fkProd` VARCHAR(60) NOT NULL,
    `fkLanguage` INTEGER NOT NULL,

    INDEX `fkIdioma_idx`(`fkLanguage`),
    INDEX `fkProd_idx`(`fkProd`),
    PRIMARY KEY (`idPDF`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `codeId` VARCHAR(60) NOT NULL,
    `img_prod` VARCHAR(60) NOT NULL,
    `fkMontage` INTEGER NOT NULL,
    `fkCartegories` INTEGER NOT NULL,

    INDEX `fkCartegories_idx`(`fkCartegories`),
    INDEX `fkMontagem_idx`(`fkMontage`),
    PRIMARY KEY (`codeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productsinfo` (
    `idProd` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,
    `fkProd` VARCHAR(60) NOT NULL,
    `fkLanguage` INTEGER NOT NULL,

    INDEX `IDLanguageProducts_idx`(`fkLanguage`),
    INDEX `IDProdInfos_idx`(`fkProd`),
    PRIMARY KEY (`idProd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcategory` (
    `idSubcategory` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `fkCategory` INTEGER NOT NULL,

    INDEX `fkCategorySub_idx`(`fkCategory`),
    PRIMARY KEY (`idSubcategory`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subtitleimage` (
    `idSubtitleImage` INTEGER NOT NULL AUTO_INCREMENT,
    `fkImg` INTEGER NOT NULL,
    `fkSubtitle` INTEGER NOT NULL,

    INDEX `IDImage_idx`(`fkImg`),
    INDEX `IDSubtitle_idx`(`fkSubtitle`),
    PRIMARY KEY (`idSubtitleImage`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subtitlemontage` (
    `idSubtitle` INTEGER NOT NULL AUTO_INCREMENT,
    `subititleImg` VARCHAR(45) NOT NULL,
    `fkLanguage` INTEGER NOT NULL,

    INDEX `IDLanguageMontage_idx`(`fkLanguage`),
    PRIMARY KEY (`idSubtitle`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `videos` (
    `idVideo` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NOT NULL,
    `codLink` VARCHAR(100) NOT NULL,
    `fkLanguage` INTEGER NOT NULL,
    `fkCategories` INTEGER NOT NULL,

    INDEX `IDCategoriesVideo_idx`(`fkCategories`),
    INDEX `fkLanguage_idx`(`fkLanguage`),
    PRIMARY KEY (`idVideo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cards` ADD CONSTRAINT `IDLanguageCards` FOREIGN KEY (`fkLanguage`) REFERENCES `languages`(`idLanguages`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cards` ADD CONSTRAINT `IDProdCards` FOREIGN KEY (`fkProd`) REFERENCES `product`(`codeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `IdCategoryCategories` FOREIGN KEY (`fkCategory`) REFERENCES `category`(`idCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `IdLanguageCategories` FOREIGN KEY (`fkLanguage`) REFERENCES `languages`(`idLanguages`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `infolog` ADD CONSTRAINT `fkUser` FOREIGN KEY (`fkUser`) REFERENCES `login`(`idLogin`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `montage` ADD CONSTRAINT `IDSubititleImage` FOREIGN KEY (`fkSubtitleImage`) REFERENCES `subtitleimage`(`idSubtitleImage`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pdf` ADD CONSTRAINT `IDLanguagePDF` FOREIGN KEY (`fkLanguage`) REFERENCES `languages`(`idLanguages`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pdf` ADD CONSTRAINT `IDProdPDF` FOREIGN KEY (`fkProd`) REFERENCES `product`(`codeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `fkCartegories` FOREIGN KEY (`fkCartegories`) REFERENCES `categories`(`idCategories`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `fkMontage` FOREIGN KEY (`fkMontage`) REFERENCES `montage`(`idMontage`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `productsinfo` ADD CONSTRAINT `IDLanguageProducts` FOREIGN KEY (`fkLanguage`) REFERENCES `languages`(`idLanguages`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `productsinfo` ADD CONSTRAINT `IDProdInfos` FOREIGN KEY (`fkProd`) REFERENCES `product`(`codeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `subcategory` ADD CONSTRAINT `fkCategorySub` FOREIGN KEY (`fkCategory`) REFERENCES `category`(`idCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `subtitleimage` ADD CONSTRAINT `IDImage` FOREIGN KEY (`fkImg`) REFERENCES `imgmontage`(`idImgMontage`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `subtitleimage` ADD CONSTRAINT `IDSubtitle` FOREIGN KEY (`fkSubtitle`) REFERENCES `subtitlemontage`(`idSubtitle`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `subtitlemontage` ADD CONSTRAINT `IDLanguageMontage` FOREIGN KEY (`fkLanguage`) REFERENCES `languages`(`idLanguages`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `videos` ADD CONSTRAINT `IDCategoriesVideo` FOREIGN KEY (`fkCategories`) REFERENCES `categories`(`idCategories`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `videos` ADD CONSTRAINT `IDLanguageVideo` FOREIGN KEY (`fkLanguage`) REFERENCES `languages`(`idLanguages`) ON DELETE NO ACTION ON UPDATE NO ACTION;
