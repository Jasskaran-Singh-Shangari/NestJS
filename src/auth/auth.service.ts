import { Injectable } from '@nestjs/common';
import type { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {

    login(dto: AuthDto){
        return{ 
            message: `Good Morning ${dto.name}, Hope you are having a good day!!!`
        }
    }

    logout(dto: AuthDto): string{
        return (`Goodbye ${dto.name}.`)
    }
}
