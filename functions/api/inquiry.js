// POST /api/inquiry — files a website inquiry as a Linear issue in the Inquiries project.
// Env: LINEAR_API_KEY (Pages project secret). Same-origin only; honeypot-filtered client-side.

const TEAM_ID = '7664e9cf-5519-4092-9435-69692fafd069'; // Sloe
const PROJECT_ID = 'f77525cb-8cb1-476c-9a2b-9187c8f6b350'; // Inquiries

export async function onRequestPost(context) {
  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ ok: false, error: 'bad json' }, 400);
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const message = clean(body.message, 4000);
  if (!name || !email || !message || body.website) {
    return json({ ok: false, error: 'missing fields' }, 400);
  }

  const due = new Date(Date.now() + 2 * 24 * 3600 * 1000).toISOString().slice(0, 10);
  const title = `Inquiry: ${name}${company ? ` — ${company}` : ''}`;
  const description = [
    `**Source:** work.sloelabs.com contact form`,
    `**Name:** ${name}`,
    `**Email:** ${email}`,
    company ? `**Company:** ${company}` : null,
    '',
    '## Message',
    message,
    '',
    '## Ladder',
    '- [ ] Qualify (sales-qualification: fit score, red flags)',
    '- [ ] Respond (≤24h promised on the site)',
    '- [ ] Follow-up #1 (+3d) · Follow-up #2 (+7d)',
  ].filter(l => l !== null).join('\n');

  const res = await fetch('https://api.linear.app/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: context.env.LINEAR_API_KEY,
    },
    body: JSON.stringify({
      query: `mutation($input: IssueCreateInput!) {
        issueCreate(input: $input) { success issue { identifier } }
      }`,
      variables: {
        input: {
          teamId: TEAM_ID,
          projectId: PROJECT_ID,
          title,
          description,
          priority: 2,
          dueDate: due,
        },
      },
    }),
  });

  const data = await res.json().catch(() => null);
  if (!res.ok || !data || data.errors || !data.data?.issueCreate?.success) {
    return json({ ok: false, error: 'upstream' }, 502);
  }
  return json({ ok: true, ref: data.data.issueCreate.issue.identifier });
}

function clean(v, max) {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, max);
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
