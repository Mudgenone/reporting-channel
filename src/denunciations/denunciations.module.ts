import { Module } from '@nestjs/common';
import { DenunciationsController } from './denunciations.controller';
import { DenunciationsService } from './denunciations.service';

@Module({
  controllers: [DenunciationsController],
  providers: [DenunciationsService]
})
export class DenunciationsModule {}
