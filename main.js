module.exports.responseHooks = [
  async ({ response }) => {
    const body = await response.getBody();
    if (!body) return;

    const textJson = getContent(body.toString());

    if (textJson) {
      response.setBody(Buffer.from(textJson));
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