const express = require('express');

const router = express.Router();

const fallbackReply = (message) => {
    const text = message.toLowerCase();
    if (text.includes('team')) {
        return 'Start with the Team page: share the skills you need, then look for complementary strengths like frontend, backend, design, and pitching.';
    }
    if (text.includes('idea') || text.includes('project')) {
        return 'A strong hackathon project solves one specific problem. Try combining a clear user, a measurable pain point, and one delightful demo moment.';
    }
    if (text.includes('hackathon') || text.includes('find')) {
        return 'Open Hackathons to browse available events. Filter by your interests, then check the deadline and judging criteria before committing.';
    }
    return 'I can help you find hackathons, shape a project idea, or build a balanced team. What are you working on?';
};

router.post('/', async (req, res) => {
    const messages = Array.isArray(req.body.messages) ? req.body.messages : [];
    const latestMessage = messages.at(-1)?.content;

    if (typeof latestMessage !== 'string' || !latestMessage.trim()) {
        return res.status(400).json({ message: 'A message is required' });
    }

    if (!process.env.OPENAI_API_KEY) {
        return res.json({ reply: fallbackReply(latestMessage) });
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: 'You are HackPack AI, a concise and friendly assistant for a hackathon platform. Help users discover hackathons, form teams, and improve project ideas.' },
                    ...messages.slice(-10),
                ],
                max_tokens: 250,
            }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || 'AI provider request failed');
        return res.json({ reply: data.choices?.[0]?.message?.content || fallbackReply(latestMessage) });
    } catch (error) {
        console.error('Chatbot request failed:', error.message);
        return res.json({ reply: fallbackReply(latestMessage) });
    }
});

module.exports = router;