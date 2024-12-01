import { gql } from "@apollo/client";

export const VIEW_RECEIPE = gql`
query($id:ID!){
  getReceipe(id:$id){
    id
    receipeName
    ingredients
    instruction
    description
    image
  }
}`

