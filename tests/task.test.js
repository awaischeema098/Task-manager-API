const request = require('supertest')
const User = require('../src/models/user')
const Task = require('../src/models/task')
const app = require('../src/app')
const { 
    userOneId, 
    userOne,
    userTwoId,
    userTwo,
    setupDatabase,
    taskOne,
    taskTwo,
    taskThree 
} = require('./fixtures/db')
beforeEach(setupDatabase)

test('should be Creat Task', async ()=>{
    const response =  await request(app)
    .post('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
        description : 'testing Description'
    })
    expect(200)
    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
})
test('Should fetch the task ', async ()=>{
   const response = await request(app)
    .get('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    expect(200)
    expect(response.body.length).toEqual(2)    
})
test('Should Delate first task by second user ', async ()=>{
    const response = await request(app)
     .delete(`/tasks/${userOne._id}`)
     .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
     .send()
     expect(400)
     const task = await Task.findById(userOne._id)  
    //  expect(task).not.toBeNull()    
 })
