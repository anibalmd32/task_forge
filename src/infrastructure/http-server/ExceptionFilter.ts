import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(Error)
export class UserExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    Logger.error(
      `ProductController (${request.method}) at {${request.path}} error: ${exception.message}`,
    );

    response.status(HttpStatus.BAD_REQUEST).json({
      status: HttpStatus.BAD_REQUEST,
      message: exception.message,
    });
  }
}
