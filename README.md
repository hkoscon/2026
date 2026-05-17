This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 2026 Deploy Notes

Required local data files (do NOT commit them to GitHub!):

.env
```
NEXT_PUBLIC_TICKET_URL=https://hkoscon2026.eventbrite.com
NEXT_PUBLIC_ENABLE_CFP_RESULT=1
NEXT_PUBLIC_ENABLE_CFP=1
NEXT_PUBLIC_ENABLE_TIMETABLE=0
NEXT_PUBLIC_ENABLE_SPONSOR=0
```

src/app/meta.json
```
{
  "conference": {
    "name": "HKOSCon 2026",
    "sponsors": [...],
    "supporting_organizations": [...]
  }
}
```

For accepted CFP:

src/app/events.json
```
{
  "events": [
    {
      "display": "Topic 1 by Speaker 1"
    },
    {
      "display": "Topic 2 by Speaker 2"
    }
}
```

Timetable JSON format:
```
{
  "days": [
    {
      "date": "2026-06-06",
      "day": "1",
      "timeslots": [
        {
          "startTime": "10:00",
          "endTime": "10:25",
          "events": [
            {
              "id": 1,
              "display": "Opening Remarks",
              "topic": true,
              "internal": "/topic/opening-remarks",
              "venue": {
                "name": "LT-10"
              },
              "language": "English",
              "level": "Beginner",
              "description": "Open Source related news & updates",
              "speakers": [
                {
                  "name": "Sammy",
                  "thumbnail": "/2026/images/sammy.jpg",
                  "country": "Hong Kong",
                  "community": "Open Source",
                  "description": "Chairman of OS in HK",
                  "website": "",
                  "github": "",
                  "x": "",
                  "mastodon": "",
                  "linkedin": ""
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

Speaker Photos can be stored at public/images/ directory.

Local Test:
```bash
npm run dev
```

Deploy to github-page branch for GitHub Page deployment:
```bash
npm run build
cd out
touch .nojekyll
git init
git add .
git commit -m "deploy"
git push --force git@github.com:hkoscon/2026.git main:gh-pages
cd ..
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
