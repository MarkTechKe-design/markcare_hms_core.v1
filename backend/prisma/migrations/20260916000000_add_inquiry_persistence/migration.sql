CREATE TABLE IF NOT EXISTS `inquiries` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `referenceId` VARCHAR(50) NOT NULL,
        `type` VARCHAR(50) NOT NULL,
        `name` VARCHAR(100) NOT NULL,
        `email` VARCHAR(150) NOT NULL,
        `phone` VARCHAR(30) NOT NULL,
        `organization` VARCHAR(150) NOT NULL,
        `facilityType` VARCHAR(100) NULL,
        `message` TEXT NOT NULL,
        `status` VARCHAR(30) NOT NULL DEFAULT 'NEW',
        `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
        UNIQUE INDEX `inquiries_referenceId_key`(`referenceId`),
        INDEX `inquiries_status_idx`(`status`),
        INDEX `inquiries_type_idx`(`type`),
        INDEX `inquiries_createdAt_idx`(`createdAt`),
        PRIMARY KEY (`id`)
      ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;