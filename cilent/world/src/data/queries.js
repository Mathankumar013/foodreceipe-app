import { gql } from "@apollo/client";

export const GET_RECEIPE = gql`
query{
  getReceipe{
    id
    receipeName
    ingredients
    instruction
    description
    image
  }
}`

