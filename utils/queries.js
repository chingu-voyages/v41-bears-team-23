import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
    query products($username: String) {
        products(username: $username) {
            _id
            title
            category
            price
            description
            image
     }
}`;

export const QUERY_CATEGORY = gql `
    query productByCategory($category: String) {
        productByCategory(category: $category) {
            _id
            title
            category
            price
            description
            image
        }
    }`

    export const QUERY_SINGLE = gql`
    query singleProduct($id: ID!) {
        singleProduct(_id: $id) {
            _id
            title
            category
            price
            description
            image
        }
    }`;