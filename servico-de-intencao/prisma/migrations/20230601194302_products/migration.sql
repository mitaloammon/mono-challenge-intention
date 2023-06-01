-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_intentionId_fkey` FOREIGN KEY (`intentionId`) REFERENCES `Intentions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_intentionId_fkey` FOREIGN KEY (`intentionId`) REFERENCES `Intentions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
