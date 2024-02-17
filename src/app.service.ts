import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsername(): string {
    // va dans la bddd
    return 'Enguerrand';
  }
}
