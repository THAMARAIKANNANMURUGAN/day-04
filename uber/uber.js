class UberPricingCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distance, time) {
        // Calculate total fare based on distance and time
        const distanceCost = distance * this.costPerKilometer;
        const timeCost = time * this.costPerMinute;

        // Total fare includes base fare, distance cost, and time cost
        const totalFare = this.baseFare + distanceCost + timeCost;

        return totalFare;
    }
}

// Example usage:
const uberCalculator = new UberPricingCalculator(5, 1.5, 0.2);

// Calculate price for a 10 km ride taking 20 minutes
const distance = 10; // in kilometers
const time = 20; // in minutes

const totalPrice = uberCalculator.calculatePrice(distance, time);
console.log(`Uber Price: $${totalPrice.toFixed(2)}`);
