import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entites';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [{
    id: 1,
    name: 'Shipwreck Roast',
    brand: 'Buddy Brew',
    flavors: ['chocolate', 'vanilla'],
  }];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffees = this.coffees.find(item => item.id === +id);
    if (!coffees) {
      return new NotFoundException(`Coffee ${id} not found`);
    }
    return coffees;
  }

  create(createCoffeeDto: any) {
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      const existingCoffeeIndex = this.findAll().findIndex(coffee => coffee.id === +id);
      // this.coffees[existingCoffeeIndex] = existingCoffee;
    }
  }

  remove(id: string) {
    const coffeeIndex = this.findAll().findIndex(coffee => coffee.id === +id);
    if (coffeeIndex) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
