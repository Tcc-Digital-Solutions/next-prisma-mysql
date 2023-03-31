-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bankManual
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bankManual
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bankManual` DEFAULT CHARACTER SET utf8 ;
USE `bankManual` ;

-- -----------------------------------------------------
-- Table `bankManual`.`Languages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`Languages` (
  `idLanguages` INT NOT NULL AUTO_INCREMENT,
  `language` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idLanguages`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`SubtitleMontage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`SubtitleMontage` (
  `idSubtitle` INT NOT NULL AUTO_INCREMENT,
  `subititleImg` VARCHAR(45) NOT NULL,
  `fkLanguage` INT NOT NULL,
  PRIMARY KEY (`idSubtitle`),
  INDEX `IDLanguageMontage_idx` (`fkLanguage` ASC) VISIBLE,
  CONSTRAINT `IDLanguageMontage`
    FOREIGN KEY (`fkLanguage`)
    REFERENCES `bankManual`.`Languages` (`idLanguages`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`ImgMontage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`ImgMontage` (
  `idImgMontage` INT NOT NULL AUTO_INCREMENT,
  `img` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idImgMontage`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`SubtitleImage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`SubtitleImage` (
  `idSubtitleImage` INT NOT NULL AUTO_INCREMENT,
  `fkImg` INT NOT NULL,
  `fkSubtitle` INT NOT NULL,
  PRIMARY KEY (`idSubtitleImage`),
  INDEX `IDSubtitle_idx` (`fkSubtitle` ASC) VISIBLE,
  INDEX `IDImage_idx` (`fkImg` ASC) VISIBLE,
  CONSTRAINT `IDSubtitle`
    FOREIGN KEY (`fkSubtitle`)
    REFERENCES `bankManual`.`SubtitleMontage` (`idSubtitle`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `IDImage`
    FOREIGN KEY (`fkImg`)
    REFERENCES `bankManual`.`ImgMontage` (`idImgMontage`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`Montage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`Montage` (
  `idMontage` INT NOT NULL AUTO_INCREMENT,
  `img_guide` VARCHAR(60) NOT NULL,
  `fkSubtitleImage` INT NOT NULL,
  PRIMARY KEY (`idMontage`),
  INDEX `IDSubititleImage_idx` (`fkSubtitleImage` ASC) VISIBLE,
  CONSTRAINT `IDSubititleImage`
    FOREIGN KEY (`fkSubtitleImage`)
    REFERENCES `bankManual`.`SubtitleImage` (`idSubtitleImage`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`Category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`Category` (
  `idCategory` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`Categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`Categories` (
  `idCategories` INT NOT NULL AUTO_INCREMENT,
  `fkCategory` INT NOT NULL,
  `fkLanguage` INT NOT NULL,
  PRIMARY KEY (`idCategories`),
  INDEX `IdCategoryCategories_idx` (`fkCategory` ASC) VISIBLE,
  INDEX `IdLanguageCategories_idx` (`fkLanguage` ASC) VISIBLE,
  CONSTRAINT `IdCategoryCategories`
    FOREIGN KEY (`fkCategory`)
    REFERENCES `bankManual`.`Category` (`idCategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `IdLanguageCategories`
    FOREIGN KEY (`fkLanguage`)
    REFERENCES `bankManual`.`Languages` (`idLanguages`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`Product` (
  `codeId` VARCHAR(60) NOT NULL,
  `img_prod` VARCHAR(60) NOT NULL,
  `fkMontage` INT NOT NULL,
  `fkCartegories` INT NOT NULL,
  INDEX `fkMontagem_idx` (`fkMontage` ASC) VISIBLE,
  PRIMARY KEY (`codeId`),
  INDEX `fkCartegories_idx` (`fkCartegories` ASC) VISIBLE,
  CONSTRAINT `fkMontage`
    FOREIGN KEY (`fkMontage`)
    REFERENCES `bankManual`.`Montage` (`idMontage`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fkCartegories`
    FOREIGN KEY (`fkCartegories`)
    REFERENCES `bankManual`.`Categories` (`idCategories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`Cards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`Cards` (
  `idCards` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(20) NULL,
  `description` VARCHAR(255) NOT NULL,
  `fkProd` VARCHAR(60) NOT NULL,
  `fkLanguage` INT NOT NULL,
  PRIMARY KEY (`idCards`),
  INDEX `fkIdioma_idx` (`fkLanguage` ASC) VISIBLE,
  INDEX `fkProd_idx` (`fkProd` ASC) VISIBLE,
  CONSTRAINT `IDLanguageCards`
    FOREIGN KEY (`fkLanguage`)
    REFERENCES `bankManual`.`Languages` (`idLanguages`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `IDProdCards`
    FOREIGN KEY (`fkProd`)
    REFERENCES `bankManual`.`Product` (`codeId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`Videos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`Videos` (
  `idVideo` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `codLink` VARCHAR(100) NOT NULL,
  `fkLanguage` INT NOT NULL,
  `fkCategories` INT NOT NULL,
  PRIMARY KEY (`idVideo`),
  INDEX `fkLanguage_idx` (`fkLanguage` ASC) VISIBLE,
  INDEX `IDCategoriesVideo_idx` (`fkCategories` ASC) VISIBLE,
  CONSTRAINT `IDLanguageVideo`
    FOREIGN KEY (`fkLanguage`)
    REFERENCES `bankManual`.`Languages` (`idLanguages`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `IDCategoriesVideo`
    FOREIGN KEY (`fkCategories`)
    REFERENCES `bankManual`.`Categories` (`idCategories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`Login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`Login` (
  `idLogin` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idLogin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`PDF`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`PDF` (
  `idPDF` INT NOT NULL AUTO_INCREMENT,
  `pdf` VARCHAR(60) NOT NULL,
  `fkProd` VARCHAR(60) NOT NULL,
  `fkLanguage` INT NOT NULL,
  PRIMARY KEY (`idPDF`),
  INDEX `fkIdioma_idx` (`fkLanguage` ASC) VISIBLE,
  INDEX `fkProd_idx` (`fkProd` ASC) VISIBLE,
  CONSTRAINT `IDLanguagePDF`
    FOREIGN KEY (`fkLanguage`)
    REFERENCES `bankManual`.`Languages` (`idLanguages`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `IDProdPDF`
    FOREIGN KEY (`fkProd`)
    REFERENCES `bankManual`.`Product` (`codeId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`Subcategory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`Subcategory` (
  `idSubcategory` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `fkCategory` INT NOT NULL,
  PRIMARY KEY (`idSubcategory`),
  INDEX `fkCategorySub_idx` (`fkCategory` ASC) VISIBLE,
  CONSTRAINT `fkCategorySub`
    FOREIGN KEY (`fkCategory`)
    REFERENCES `bankManual`.`Category` (`idCategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`InfoLog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`InfoLog` (
  `idLog` INT NOT NULL AUTO_INCREMENT,
  `action` VARCHAR(60) NOT NULL,
  `fkUser` INT NOT NULL,
  `date` DATETIME NOT NULL COMMENT 'triggers\n',
  PRIMARY KEY (`idLog`),
  INDEX `fkUser_idx` (`fkUser` ASC) VISIBLE,
  CONSTRAINT `fkUser`
    FOREIGN KEY (`fkUser`)
    REFERENCES `bankManual`.`Login` (`idLogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankManual`.`ProductsInfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankManual`.`ProductsInfo` (
  `idProd` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NOT NULL,
  `fkProd` VARCHAR(60) NOT NULL,
  `fkLanguage` INT NOT NULL,
  PRIMARY KEY (`idProd`),
  INDEX `IDLanguageProducts_idx` (`fkLanguage` ASC) VISIBLE,
  INDEX `IDProdInfos_idx` (`fkProd` ASC) VISIBLE,
  CONSTRAINT `IDLanguageProducts`
    FOREIGN KEY (`fkLanguage`)
    REFERENCES `bankManual`.`Languages` (`idLanguages`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `IDProdInfos`
    FOREIGN KEY (`fkProd`)
    REFERENCES `bankManual`.`Product` (`codeId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
