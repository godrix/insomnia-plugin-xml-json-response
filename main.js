module.exports.responseHooks = [
  ({ response }) => {
    const responseBody = response.getBody().toString();
    const textJson = getContent(responseBody);

    if (textJson) {
      const buffer = Buffer.from(textJson);
      response.setBody(buffer);
    }
  },
];

function getContent(responseBody) {
  try {
    return (responseBody.replace(/[<][^>]*[>]/g, ''));
  } catch {
    return null;
  }
}