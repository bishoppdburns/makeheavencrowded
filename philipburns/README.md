# PhilipBurns.com

The personal ministry platform of Pastor Philip D. Burns: speaking, books, Breakthrough Recovery and leadership.
This is a separate site from makeheavencrowded.org. It lives in this folder until it gets its own repository.

## Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero, three paths (Speak / Read / Freedom), messages, book, recovery, ministries, free chapter |
| Speaking | `speaking.html` | Event types, signature messages, video, process, booking form, host FAQ |
| Books | `books.html` | Make Heaven Crowded, 30-Day Devotional, church campaign, bulk order form, free chapter |
| Breakthrough Recovery | `recovery.html` | Crisis help, who it's for, pathway, confidential contact, church launch form |
| About | `about.html` | Bio, convictions, ministries, media |
| Contact | `contact.html` | Routing to the right form, plus a general contact form |
| Thank you / 404 | `thanks.html`, `404.html` | Form confirmation and missing page |

## Forms (Netlify Forms, no extra cost up to 100 submissions/month)

`booking`, `bulk-order`, `free-chapter`, `newsletter`, `recovery-connect`, `recovery-launch`, `contact`.
After deploying, go to Netlify > Site > Forms > Form notifications and add an email notification for each form.

## Editing

Page content lives in `_src/pages/*.html`. The shared header, footer, social links, email and Amazon link are in `_src/build.py`.
After editing, run:

```
python3 _src/build.py
```

That rewrites the finished `.html` pages in this folder. Everything is plain static HTML and CSS, so there is no build step on Netlify.

## Deploying

1. Create a new Netlify site from this repository with **Base directory** set to `philipburns` (or move this folder into its own repository).
2. In Netlify > Domain management, add `www.philipburns.com` and `philipburns.com`, then point the domain's DNS to Netlify.
3. Turn on form notifications (see above).

## Launch checklist (search the files for `TODO`, `todo-flag` and `placeholder`)

- [ ] Hero photo: Philip preaching, wide and horizontal (at least 2400px wide)
- [ ] Two portraits (home and about), vertical 4:5
- [ ] Testimony / full bio on the About page
- [ ] 3 to 6 real endorsements (name, title, church)
- [ ] Sizzle reel video (YouTube link)
- [ ] Confirm signature message titles
- [ ] Confirm the Breakthrough Recovery pathway phases and church launch kit contents
- [ ] Confirm the honorarium/travel FAQ wording and whether Philip travels with a team
- [ ] 30-Day Devotional cover image and its direct purchase link
- [ ] Social links in `_src/build.py`
- [ ] Free chapter PDF and an email service to deliver it automatically
- [ ] Booking/contact email address to receive form notifications
