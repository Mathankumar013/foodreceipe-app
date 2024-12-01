const {GraphQLID,GraphQLString}=require('graphql')

const receipe = require('../model/receipe')
const userReceipe = require('../type/userReceipe')

const createReceipe = {
    type:userReceipe,
    args:{
        id:{type:GraphQLID},
        receipeName:{type:GraphQLString},
        ingredients:{type:GraphQLString},
        instruction:{type:GraphQLString},
        description:{type:GraphQLString},
        image:{type:GraphQLString}
    },
    async resolve(parent,args){
        const update = await receipe.findByPk(args.id)
        if(update){
            await receipe.update({
                receipeName:args.receipeName,
                ingredients:args.ingredients,
                instruction:args.instruction,
                description:args.description,
                image:args.image
            })
            return await receipe.findByPk(args.id)
        }else{
            return await receipe.create({
                receipeName:args.receipeName,
                ingredients:args.ingredients,
                instruction:args.instruction,
                description:args.description,
                image:args.image
            })
        }
    }
}
module.exports=createReceipe;