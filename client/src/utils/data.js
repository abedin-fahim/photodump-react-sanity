// We are writing graphql query here. We don't need to write any providers for it bc sanity already handled the backend for us

/**
 * Returns a GraphQL query string for retrieving a user with the specified userId.
 *
 * @param {string} userId - The ID of the user to retrieve.
 * @returns {string} The GraphQL query string.
 */
export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};
