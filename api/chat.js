// api/chat.js
// Vercel Serverless Function. Runs on the server, so your Gemini API key
// never reaches the browser. The frontend calls POST /api/chat.

import { portfolioData } from './portfolioData.js';

// If this model 404s for your API key, try 'gemini-2.5-flash' instead —
// see the note in SETUP.md about checking your available free-tier models.
const MODEL = 'gemini-3.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'Server is missing GEMINI_API_KEY. See SETUP.md.',
    });
  }

  const { message, history } = req.body || {};

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'A message is required.' });
  }
  if (message.length > 1000) {
    return res.status(400).json({ error: 'Message is too long.' });
  }

  // Keep only the last few turns so requests stay small and fast.
  const safeHistory = Array.isArray(history) ? history.slice(-10) : [];

  const contents = [
    ...safeHistory
      .filter((turn) => turn && typeof turn.text === 'string')
      .map((turn) => ({
        role: turn.role === 'bot' ? 'model' : 'user',
        parts: [{ text: turn.text }],
      })),
    { role: 'user', parts: [{ text: message.trim() }] },
  ];

  try {
    const geminiRes = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: buildSystemPrompt(portfolioData) }] },
        contents,
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 350,
        },
      }),
    });

    if (!geminiRes.ok) {
      const errBody = await geminiRes.text();
      console.error('Gemini API error:', geminiRes.status, errBody);
      return res.status(502).json({
        error: 'The AI is temporarily unavailable. Please try again in a moment.',
      });
    }

    const data = await geminiRes.json();
    const reply = data?.candidates?.[0]?.content?.parts
      ?.map((p) => p.text || '')
      .join('')
      .trim();

    return res.status(200).json({
      reply: reply || "I'm not sure how to answer that — could you rephrase your question?",
    });
  } catch (err) {
    console.error('chat handler failed:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}

function buildSystemPrompt(data) {
  return `
You are the portfolio assistant embedded on ${data.name}'s personal website. You are
speaking primarily with recruiters and hiring managers who want to quickly learn
about ${data.name}'s background.

ABOUT ${data.name.toUpperCase()}:
${data.summary}
Role: ${data.role} · Location: ${data.location}

SKILLS:
${data.skills.join(', ')}

EXPERIENCE:
${data.experience
  .map((e) => `- ${e.title} at ${e.company} (${e.period}): ${e.highlights.join(' ')}`)
  .join('\n')}

PROJECTS:
${data.projects.map((p) => `- ${p.name}: ${p.description} (${p.link})`).join('\n')}

EDUCATION:
${data.education.map((ed) => `- ${ed.degree}, ${ed.school} (${ed.year})`).join('\n')}

CONTACT:
Email: ${data.contact.email} · LinkedIn: ${data.contact.linkedin} · GitHub: ${data.contact.github} · Resume: ${data.contact.resumeUrl}

NOTES:
${data.extraNotes}

INSTRUCTIONS:
- Answer using ONLY the information above. Never invent facts, dates, numbers, or job titles.
- Refer to ${data.name} in the third person ("She led..." / "He built..."), like a knowledgeable colleague — do not pretend to BE ${data.name}.
- Keep answers to 2-4 sentences unless the recruiter explicitly asks for more detail.
- If you don't have the information to answer something, say so honestly and point them to the email above instead of guessing.
- If asked something unrelated to ${data.name}'s professional background, politely redirect back to their work and qualifications.
`.trim();
}
