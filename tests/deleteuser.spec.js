import{test,expect} from'@playwright/test'
test('delete user' , async({request})=>{
const response=await request.delete('https://dummyjson.com/users/1')
expect(response.status()).toBe(200)
expect(response.headers()['content-type']).toContain('application/json')
const data=await response.json()
console.log(data)
expect(data.id).toBeDefined()
expect(data.firstName).toBeDefined()
expect(data.lastName).toBeDefined()
expect(data.gender).toBeDefined()
expect(data.age).toBeDefined()
console.log('Deleted User ID:' ,data.id)
console.log('Deleted User Name:' ,data.firstName)




});