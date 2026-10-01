class bike{
    constructor(color,model,fuel){
        this.color=color;
        this.model=model;
        this.fuel=fuel;
    }

     startBike(){
        console.log("Bike started...");
        this.fuel-=10;
    }

    stopBike(){
        console.log("Bike stopped");
    }

    refillFuel(amount){
        this.fuel+=amount;
        console.log("Fuel refilled...")
    }

    rideBike(){
        if(this.fuel<150){
            console.log("Bike running out of fuel...");
        }
        this.fuel-=100;
    }
    
    dispalyBikeProperties(){
        console.log("Color: ",this.color);
        console.log("Model: ",this.model);
        console.log("Fuel level: (ml):",this.fuel);
    }
}

class SeventyCC extends bike{
    constructor(company,milage,color,model,fuel){
        super(color,model,fuel);
        this.company=company;
        this.milage=milage;
    }
    dispalyBikeProperties(){
        super.dispalyBikeProperties();
        console.log("Company: ",this.company);
        console.log("Milage: ",this.milage);
    }
}

class OneTwoFive{
    constructor(company,milage,color,model,fuel){
        super(color,model,fuel);
        this.company=company;
        this.milage=milage;
    }
    dispalyBikeProperties(){
        super.dispalyBikeProperties();
        console.log("Company: ",this.company);
        console.log("Milage: ",this.milage);
    }
}

var bike1= new bike("red",1985,1500);
bike1.startBike();
bike1.rideBike();
bike1.dispalyBikeProperties();
bike1.rideBike();
bike1.rideBike();
bike1.rideBike();
bike1.rideBike();
console.log(bike1.fuel);
bike1.refillFuel(200);
console.log(bike1.fuel);

var bike2= new SeventyCC("Unique Star",40,"black",2023,700);
bike2.dispalyBikeProperties();
bike2.rideBike;
bike2.rideBike;
bike2.rideBike;
bike2.rideBike;
bike2.rideBike;
bike2.rideBike;
console.log(bike2.fuel)
bike2.refillFuel();

var bike3= new OneTwoFive("Honda",20,"blue",2020,1000);
bike3.dispalyBikeProperties();