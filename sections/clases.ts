

export class Car {
    static className = 'Car';
    public readonly brand: string;
    public model: string;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    private readonly createdAt: Date;

    constructor( brand: string, type: string, model: string){
        this.brand = brand;
        this.model = model;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type; 

        this.createdAt = new Date();
    }

    tunOn(){
        if(this.isRunning){
            console.log('Car is already running');
            return;
        }
        
        if (this.fuelTank <= 0){
            console.log('Car is out of fuel, please fill the tank');
            this.isRunning = false;
            return;
        }

        this.isRunning = true;
        console.log('Car is running');
    }

    fillFuelTank(gas: number){
        if (gas < 0){
            console.log('Cannot fill negative fuel');
            return;
        }

        if (this.fuelTank + gas > 100){
            console.log('Cannot fill more than 100 fuel');
            return;
        }
        this.fuelTank += gas;
    }
}

let car = new Car( 'Ford', 'SUV', 'Fiesta');

console.log(car);

car.tunOn();
car.fillFuelTank(50);
car.tunOn();
car.fillFuelTank(50);
car.fillFuelTank(50);