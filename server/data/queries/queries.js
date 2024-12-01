const {GraphQLID, GraphQLList}=require('graphql')

const receipe= require('../model/receipe')
const userReceipe= require('../type/userReceipe')

const getReceipe = {
    type:new GraphQLList(userReceipe),
    args:{
        id:{type:GraphQLID}
    },
    async resolve(parent,args){
        if(args.id){
            const check= await receipe.findByPk(args.id)
            return check ? [check]:[]
        }else{
            return await receipe.findAll()
        }
    }
}
module.exports=getReceipe;