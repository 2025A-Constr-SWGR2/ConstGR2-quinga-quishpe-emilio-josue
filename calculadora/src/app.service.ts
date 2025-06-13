import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //console.log('log!');
    console.error('error!');
    console.warn('warn!');
    //console.info('info!');
    //console.debug('debug!');
    return 'Hello World!!';
  }
}
