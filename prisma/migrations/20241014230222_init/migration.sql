-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `correo` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NULL,
    `apellido` VARCHAR(191) NULL,

    UNIQUE INDEX `User_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pagos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `n_factura` VARCHAR(191) NOT NULL,
    `usuarioId` INTEGER NULL,

    UNIQUE INDEX `Pagos_n_factura_key`(`n_factura`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pagos` ADD CONSTRAINT `Pagos_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
