// Function to verify reCAPTCHA token
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  // If no secret key is configured, skip verification
  if (!secretKey) {
    console.warn('RECAPTCHA_SECRET_KEY not configured, skipping verification');
    return { success: true, score: 1.0 };
  }
  
  // If no token provided, fail the verification
  if (!token) {
    return { success: false, score: 0 };
  }
  
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return { success: false, score: 0 };
  }
}

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
    const { recaptchaToken, ...formData } = body;
    
    // Verify reCAPTCHA if token is provided
    if (recaptchaToken || process.env.RECAPTCHA_SECRET_KEY) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      
      // Check if verification was successful and score is acceptable
      // reCAPTCHA v3 returns a score from 0.0 to 1.0
      // 0.5 is a reasonable threshold (you can adjust based on your needs)
      if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
        console.log('reCAPTCHA verification failed:', recaptchaResult);
        return {
          statusCode: 400,
          body: JSON.stringify({ 
            error: 'reCAPTCHA verification failed', 
            score: recaptchaResult.score 
          }),
        };
      }
      
      // Add reCAPTCHA score to the data sent to n8n
      formData.recaptchaScore = recaptchaResult.score;
    }
    
    // Forward to n8n webhook
    const response = await fetch('http://srv820887.hstgr.cloud:5678/webhook/website-quiz-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
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
    console.error('Error processing request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process request' }),
    };
  }
};