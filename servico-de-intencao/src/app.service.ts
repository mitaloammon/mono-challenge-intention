import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'; 
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';


@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  findAll(): Observable<AxiosResponse<AppService[]>> {
    return this.httpService.get('https://localhost:3001');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
