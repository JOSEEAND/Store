const { graphql } = require('graphql');
const schema = require('./schema');
const bcrypt = require('bcrypt');

exports.handler = async (event) => {
    const { name, password } = JSON.parse(event.body);

    const query = `
        query {
        user(name: "${name}") {
            id
            password
        }
        }
    `;

    const result = await graphql(schema, query);
    const user = result.data.user;

    if (user && await bcrypt.compare(password, user.password)) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Login successful" }),
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: "Invalid credentials" }),
        };
    }
};
