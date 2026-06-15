interface Phone {
    brand: string;
    model: string;
    price: number;
}

function describePhone(phone: Phone): void {
    console.log(`Brand: ${phone.brand} | Model: ${phone.model} | Price: $${phone.price}`);
}

const iphone: Phone = {
    brand: "Apple",
    model: "iPhone 15",
    price: 999
};
const samsung: Phone = {
    brand: "Samsung",
    model: "Galaxy S23",
    price: 899
};

const googlePixel: Phone = {
    brand: "Google",
    model: "Pixel 8",
    price: 799
};

const phones: Phone[] = [iphone, samsung, googlePixel];

for (const phone of phones) {
    describePhone(phone);
}