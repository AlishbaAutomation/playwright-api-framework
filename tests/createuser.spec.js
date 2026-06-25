import { test, expect } from '@playwright/test'
import { userData } from '../testdata/userdata';
import { apiClient } from '../utils/apiClient';
test('Create user ', async ({ request }) => {
    const client = new apiClient()
    const Response = await client.postRequest(request, 'https://dummyjson.com/users/add', userData)
    expect(Response.status()).toBe(201)
    const data = await Response.json()
    expect(data.firstName).toBeDefined()
    expect(data.lastName).toBeDefined()
    expect(data.age).toBeDefined()
    expect(data.firstName).toBe(userData.firstName)
    expect(data.lastName).toBe(userData.lastName)
    expect(data.age).toBe(userData.age)
    console.log('Fullname is:', data.firstName)
    console.log('User ID is:', data.id)
}); 