import { NextResponse } from 'next/server';
import { AppConfig } from '@/config/config';
import { mockResponses } from '@/lib/mockData';

export async function POST(request: Request) {
  try {
    console.log('Chat endpoint called'); 
    
    // İstek body'sini parse et
    let requestBody;
    try {
      requestBody = await request.json();
      console.log('Request body:', requestBody); 
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { message } = requestBody;
    
    if (!message) {
      console.error('Message is required');
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Mock yanıtı oluştur
    const responseText = mockResponses[message.toLowerCase()] || 
      "Üzgünüm, anlayamadım. Lütfen başka bir şekilde ifade edebilir misiniz?";

    console.log('Generated response:', responseText); // Yanıtı logla
    
    return NextResponse.json({ response: responseText });
    
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}