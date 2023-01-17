import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumerTest } from './consumer-test.service';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [KafkaModule],
  controllers: [AppController],
  providers: [AppService, ConsumerTest],
})
export class AppModule {}
