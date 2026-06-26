import { Injectable, Logger, BadRequestException } from '@nestjs/common';

import { AuthenticationException } from '../common/exceptions/authentication.exception';
@Injectable()
export class AuthenticationService {
  private readonly logger = new Logger(AuthenticationService.name);

  private readonly users = [
    {
      email: 'admin@test.com',
      password: 'password123',
    },
  ];

  async login(email: string, password: string) {
    // Preconditions + Fail Fast

    if (!email || !password) {
      throw new BadRequestException('Email and password required');
    }

    this.logger.log(`Login attempt for ${email}`);

    // Defined Behavior

    const user = this.users.find((u) => u.email === email);

    // Undefined Behavior Protection

    if (user && typeof user.email !== 'string') {
      throw new Error('Corrupted user data');
    }

    // Throw Exception

    if (!user) {
      this.logger.warn(`User not found: ${email}`);

      throw new AuthenticationException('Invalid Credentials');
    }

    // Neutral Value

    if (user.password !== password) {
      this.logger.warn(`Invalid password for ${email}`);

      return {
        success: false,
        authenticated: false,
      };
    }

    // Defined Behavior

    const token = 'mock-jwt-token-123';

    this.logger.log(`User logged in successfully`);

    return {
      success: true,
      authenticated: true,
      token,
    };
  }
}
