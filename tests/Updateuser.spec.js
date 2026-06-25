import{test,expect} from'@playwright/test'
test('update user data' , async({request})=>{
const response=await request.put('https://dummyjson.com/users/1',{
    data:{
        "firstName": "Alishba",
  "age": 20
    }
})
expect(response.status()).toBe(200)
const data=await response.json()
expect(data.firstName).toBe('Alishba')
expect(data.age).toBe(20)
console.log('Updated Name is:', data.firstName)
console.log('Updated Age is:', data.age)
expect(data.id).toBeDefined()
expect(data.email).toBeDefined()

});