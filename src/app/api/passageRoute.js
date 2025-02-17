const urlPrincipal = 'http://localhost:8080/pasaje';

//método para enviar y crear un pasaje
export async function postPassage(customer,paymentMethod,value,city,enterprise){
    const customerNew = Customer(customer.name,customer.surname,customer.dni,customer.email);
    const passageNew = Passage(customer,paymentMethod,value,city,enterprise);
    console.log(customerNew);
    console.log(passageNew);
}