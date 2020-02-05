 const { ApolloServer, gql } = require('apollo-server');


 // Graphql schema
 const typeDefs = gql`
    type Book {
        title: String
        author: String 
    }

    type Query {
        books: [Book]
    }
 `;

 // the database - in a real application we would be using a library like knex to query the database and use the model functions for the resolvers
 // notice that the data here matches the shape of the data in our typeDefs above
 const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];

// think of our resolvers like the endpoints in a rest API - when we query 'books' it resolves to the array of data above
// if we were using model functions here from something like a books-model file with knex we would be able to import the model file above and use something like the
// findBooks function the same exact way we would if we were defining a GET endpoint in a books route
const resolvers = {
    Query: {
        books: () => books,
    }
};



// not an express server this time like what we would use normally - we are using apollo server this time
const server = new ApolloServer({ typeDefs, resolvers });

server.listen()
    .then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });

    
