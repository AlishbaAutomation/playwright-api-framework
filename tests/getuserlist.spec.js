import { test, expect } from '@playwright/test'
test('Get user list', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users')
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type'])
        .toContain('application/json')
    const data = await response.json()
    expect(data.length).toBe(10)
    for (const user of data) {
        console.log('Name:', user.name)
        console.log('ID:', user.id)
        expect(user.email).toContain('@')
        expect(user.website).toContain('.')
        expect(user.id).toBeDefined()
        expect(user.name).toBeDefined()
        expect(user.email).toBeDefined()
        expect(user.website).toBeDefined()

    }


});