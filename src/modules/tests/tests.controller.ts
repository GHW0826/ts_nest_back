import { Controller, Get } from '@nestjs/common';
import { TestsService } from './tests.service';

@Controller('tests')
export class TestsController {
    constructor(private readonly appService: TestsService) {}

    @Get()
    getTestHello(): string {
    return this.appService.getHello();
    }
}
