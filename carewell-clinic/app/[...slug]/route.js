import fs from 'fs';
import path from 'path';

export async function GET(request, { params }) {
  const { slug } = await params;
  const slugArray = Array.isArray(slug) ? slug : [slug];
  const slugPath = slugArray.join('/');

  // Possible candidates in public directory
  const candidates = [
    path.join(process.cwd(), 'public', `${slugPath}.html`),
    path.join(process.cwd(), 'public', slugPath),
    path.join(process.cwd(), 'public', slugPath, 'index.html'),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      const ext = path.extname(candidate).toLowerCase();
      let contentType = 'text/html; charset=utf-8';
      if (ext === '.js') contentType = 'application/javascript; charset=utf-8';
      else if (ext === '.css') contentType = 'text/css; charset=utf-8';
      else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
      else if (ext === '.png') contentType = 'image/png';
      else if (ext === '.svg') contentType = 'image/svg+xml';
      else if (ext === '.json') contentType = 'application/json; charset=utf-8';
      else if (ext === '.ico') contentType = 'image/x-icon';

      const fileBuffer = fs.readFileSync(candidate);
      return new Response(fileBuffer, {
        headers: {
          'Content-Type': contentType,
        },
      });
    }
  }

  return new Response('Not Found', { status: 404 });
}
