const graphql = require('graphql')
const { GraphQLString,GraphQLID,GraphQLObjectType}=graphql

const userReceipe = new GraphQLObjectType({
    name:'food_receipe',
    fields:()=>({
        id:{type:GraphQLID},
        receipeName:{type:GraphQLString},
        ingredients:{type:GraphQLString},
        instruction:{type:GraphQLString},
        description:{type:GraphQLString},
        image:{type:GraphQLString}
    })
})
module.exports= userReceipe;