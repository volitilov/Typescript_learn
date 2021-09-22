class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

class Car {
  readonly model: string
  readonly numberOfWheels: number = 4

  constructor(theModel: string) {
    this.model = theModel
  }
}

class XCar {
  readonly numberOfWheels: number = 4

  constructor(readonly model: string) {}
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

class Animal {
  protected voice: string = ''
  // только для этого класса и для тех кто наследует данный класс

  public color: string = 'black'
  // можно везде использовать, тоже самое и без слова public (default)

  private go(): void {console.log('Go')}
  // только для данного класса
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info'
  }
}

