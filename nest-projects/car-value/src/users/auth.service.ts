import { BadRequestException, Injectable } from '@nestjs/common'
import { UsersService } from './users.service'
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
// import { v4 as uuidv4 } from 'uuid';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signup(email: string, password: string) {
    // See if email is in use
    const users = await this.userService.find( email )
    if (users.length) {
      throw new BadRequestException('Email already in use');
    }
    // Hash the users password
    // Generate a salt
    const salt = randomBytes(8).toString('hex');

    // Hash the salt and the password together
    const hash = (await scrypt(password, salt, 64)) as Buffer;

    // Join the hashed result and the salt together
    const result = salt + '.' + hash.toString('hex');

    // Create a new user and save it
    const user = this.userService.create(email, result);

    // Retunr the user
    return user;
  }
  

  async signin(email: string, password: string) {
    // Buscar el usuario para ver si existe, recordar que el servicio
    // user devuelve un array de usuarios y no un unico usuario
    // por eso la desestructuracin, para obtener el primer usuario
    const [user] = await this.userService.find(email)
    if(!user) {
      throw new BadRequestException('User or password incorrect')
    }
    
    // Desestructurar password y salt 
    const [salt, storedHash] = user.password.split('.');
    
    // Hashear la contrasena con la que el usuario se intenta loguear
    const hash = await scrypt(password, salt, 64) as Buffer;

    if(hash.toString('hex') !== storedHash) {
      throw new BadRequestException('User or password incorrect')
    }
    
    return user;
  }
}

