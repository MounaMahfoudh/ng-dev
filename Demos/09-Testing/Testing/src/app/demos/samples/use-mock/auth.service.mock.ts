import { AuthService } from './auth.service';

export class MockAuthService extends AuthService {
  //setting is auth to true
  override isAuth = true;
}
