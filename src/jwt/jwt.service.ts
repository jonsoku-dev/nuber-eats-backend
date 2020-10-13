import { Inject, Injectable } from '@nestjs/common';
import { JwtModuleOptions } from '@nestjs/jwt';
import { CONFIG_OPTIONS } from './jwt.constants';

@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
  ) {
    console.log(options);
  }

  hello() {
    console.log('hello');
  }
}