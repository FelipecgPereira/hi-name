import { Controller, Get, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(@Query('name') name: string): string {
    return this.helloService.getHello(name);
  }
}
