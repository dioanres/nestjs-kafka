import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}

  async getHello() {
    await this.producerService.produce({
      topic: 'kafka-test-js',
      messages: [
        {
          value: 'Hello its First Message',
        },
        {
          value: 'ist second message',
        },
      ],
    });
    console.log('after produce ....');
    return 'Hello World! ooo';
  }
}
