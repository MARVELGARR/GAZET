

export async function getData(): Promise<client[]> {
    // Fetch data from your API here.
    return [
      {
        firstname: 'marvellous',
        status: "pending",
        clientemail: "m@example.com",
        phone: "09000000000",
        title: "Mr",
        companyname: "Gazet",
        address: "Abuja, Lagos, Nigeria",
        currency: "USD",
        type: "business"
      },
      // ...
    ]
}