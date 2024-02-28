const data = [
    {
        id: 1,
        type: "car",
        brand: "Audi",
        doors: 4,
        price: 4300000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
    },
    {
        id: 2,
        type: "car",
        brand: "Mercedes-Benz",
        doors: 4,
        price: 2800000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
    },
    {
        id: 3,
        type: "bike",
        brand: "Harley-Davidson",
        maxSpeed: 210,
        price: 1300000,
        image: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
    },
    {
        id: 4,
        type: "bike",
        brand: "Harley-Davidson",
        maxSpeed: 220,
        price: 1400000,
        image: "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
    },
];

class Transport {
    constructor(type, brand, price, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }
    getInfo() {
        return `Type: ${this.type}, Brand: ${this.brand}`;
    }
    getPrice() {
        return `Price: ${this.price}`;
    }
}

class Car extends Transport {
    constructor(type, price, brand, doors, image) {
        super(type, price, brand, image);
        this.doors = doors;
    }
    getDoorsCount() {
        return `Doors ${this.doors}`;
    }
    }

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed, image) {
        super(type, price, brand, image);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return `Max speed: ${this.maxSpeed};`;
    }
}

const obj = data.map((item) => {
    if (item.type === "car") {
        return new Car(item.type, item.brand, item.price, item.doors, item.image);
    } else if (item.type === "bike") {
        return new Bike(item.type,item.brand,item.price,item.maxSpeed,item.image);
    }
});

obj.forEach((item) => {
    console.log(item.getInfo());
    console.log(item.getPrice());
    if (item instanceof Car) {
        console.log(item.getDoorsCount());
    } else if (item instanceof Bike) {
        console.log(item.getMaxSpeed());
    }
    console.log("------");
});

obj.forEach((item) => {
    const newElem = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", item.image);
    newElem.textContent = item.getInfo();
    newElem.innerHTML += "</br>" + item.getPrice();
    document.body.appendChild(newElem);
    document.body.appendChild(img);
    if (item instanceof Car) {
        newElem.innerHTML += "</br>" + item.getDoorsCount();
    } else if (item instanceof Bike) {
        newElem.textContent += "</br>"+ item.getMaxSpeed();
    }
});


