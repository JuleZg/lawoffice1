exports.handler = async function (event, context) {
  const { name, email, phone, message } = JSON.parse(event.body);

  // Process form data (e.g., send an email, save to a database, etc.)

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
