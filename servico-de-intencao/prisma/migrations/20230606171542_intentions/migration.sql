-- CreateTable
CREATE TABLE `Intentions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `addressId` INTEGER NULL,

    UNIQUE INDEX `Intentions_addressId_key`(`addressId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(191) NULL,
    `uf` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `intentionId` INTEGER NULL,

    UNIQUE INDEX `Address_intentionId_key`(`intentionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `price` INTEGER NULL,
    `category` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `intentionId` INTEGER NULL,

    UNIQUE INDEX `Products_intentionId_key`(`intentionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_intentionId_fkey` FOREIGN KEY (`intentionId`) REFERENCES `Intentions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_intentionId_fkey` FOREIGN KEY (`intentionId`) REFERENCES `Intentions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
