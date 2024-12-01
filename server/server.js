const express= require('express')
const app = express()
const createReceipe = require('./data/mutation/mutation')
const getReceipe = require('./data/queries/queries')
const {graphqlHTTP}=require('express-graphql')
const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const sequelize = require('./data/model/db')
const cors = require('cors')
const APP_PORT = process.env.APP_PORT || 3000;

app.use(express.json())
app.use(cors())

const mutation = new GraphQLObjectType({
    name:'createReceipe',
    fields:()=>({
        createReceipe:createReceipe
    })
})
const query = new GraphQLObjectType({
    name:'getReceipe',
    fields:()=>({
        getReceipe:getReceipe
    })
})

app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema:new GraphQLSchema({
        query:query,
        mutation:mutation
    })
}))

  
sequelize.sync().then(()=>{
    console.log('running successfully')
}).catch(()=>{
    console.log('failed to running')
})


app.listen(APP_PORT,()=>{
    console.log(`http://localhost:${APP_PORT}`)
})