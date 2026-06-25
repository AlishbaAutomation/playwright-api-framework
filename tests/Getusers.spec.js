import { test, expect } from '@playwright/test'
test('get api test', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1')
    expect(response.status()).toBe(200)
    const data = await response.json()
    expect(data.id).toBeDefined()
    expect(data.name).toBeDefined()
    expect(data.email).toBeDefined()
    expect(data.website).toBeDefined()
    expect(data.email).toContain('@')
    expect(data.website).toContain('.')
    console.log('Name:', data.name)
    console.log('Email:', data.email)
    expect(data.id).toBe(1)


});