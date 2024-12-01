import { gql } from "@apollo/client";

export const CREATE_RECEIPE = gql`
mutation(
$receipeName:String!
$ingredients:String!
$instruction:String!
$description:String!
$image:String!
){
 createReceipe(
receipeName:$receipeName
ingredients:$ingredients
instruction:$instruction
description:$description
image:$image
 ){
receipeName
ingredients
instruction
description
image
}}`