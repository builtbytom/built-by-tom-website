exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    
    // Forward to n8n webhook
    const response = await fetch('http://srv820887.hstgr.cloud:5678/webhook/website-quiz-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error forwarding to n8n:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process request' }),
    };
  }
};