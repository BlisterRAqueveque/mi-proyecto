-- AlterTable
ALTER TABLE `pagos` ADD COLUMN `fecha_eliminado` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `fecha_eliminado` DATETIME(3) NULL;

-- CreateIndex
CREATE INDEX `Pagos_fecha_eliminado_idx` ON `Pagos`(`fecha_eliminado`);

-- CreateIndex
CREATE INDEX `User_fecha_eliminado_idx` ON `User`(`fecha_eliminado`);
