describe("Suite to test Customer class", () => {
    let customer = null;
    beforeEach(() => {
		let d = new Date();
        customer = new Customer("Aditya Mallubhatla", "aditya.33@gmail.com", "234569871", d, 400);
    });

    afterEach(() => {
        customer = null;
    });
	it(" bill amount check", () => {
        expect(customer.vBill_Amount()).toBeTruthy();
    });
    it(" bill date check", () => {
        expect(customer.vBill_Date()).toBeTruthy();
    });
});