const { graphql } = require('graphql');
const schema = require('./schema');
const bcrypt = require('bcrypt');

exports.handler = async (event) => {
    const { name, password, phone } = JSON.parse(event.body);

    const hashedPassword = await bcrypt.hash(password, 10);

    const mutation = `
        mutation {
        createUser(name: "${name}", password: "${hashedPassword}", phone: "${phone}") {
            id
            name
        }
        }
    `;

    const result = await graphql(schema, mutation);

    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };
};
