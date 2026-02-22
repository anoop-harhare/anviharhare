# anviharhare
Anvi's Website — hosted on GitHub Pages at **https://anoop-harhare.github.io/anviharhare/** with the custom domain **www.anviharhare.com**.

---

## Squarespace DNS Configuration — Migrate from Squarespace to GitHub Pages

Your domain `anviharhare.com` is registered in Squarespace and currently has DNS records pointing to Squarespace's servers. You need to **delete** those records and **replace** them with GitHub Pages records.

### Step 1 — Open Squarespace DNS Settings

1. Log in to your [Squarespace account](https://account.squarespace.com/).
2. From the **Home Menu**, click **Domains**.
3. Click on **anviharhare.com**.
4. Click **DNS Settings** (or **Advanced Settings → DNS**).

---

### Step 2 — Delete all existing DNS records

You currently have these records — **delete every one of them**:

| Type  | Host | Current value                                                                          |
|-------|------|----------------------------------------------------------------------------------------|
| A     | @    | 198.49.23.144                                                                          |
| A     | @    | 198.49.23.145                                                                          |
| A     | @    | 198.185.159.144                                                                        |
| A     | @    | 198.185.159.145                                                                        |
| CNAME | www  | ext-sq.squarespace.com                                                                 |
| HTTPS | @    | 1. alpn="h2,http/1.1" ipv4hint="198.185.159.144,198.185.159.145,198.49.23.144,198.49.23.145" |

Click the **delete / trash icon** next to each record and confirm the deletion.

---

### Step 3 — Add the GitHub Pages A records for the apex domain

Add **four** new A records, all with `Host = @`:

| Type | Host | Value           | TTL       |
|------|------|-----------------|-----------|
| A    | @    | 185.199.108.153 | Automatic |
| A    | @    | 185.199.109.153 | Automatic |
| A    | @    | 185.199.110.153 | Automatic |
| A    | @    | 185.199.111.153 | Automatic |

---

### Step 3b — Do NOT add a new HTTPS record

You do **not** need to add an HTTPS (SVCB) record for GitHub Pages. The old HTTPS record you deleted in Step 2 was specific to Squarespace's CDN. GitHub Pages automatically provisions and manages an SSL/TLS certificate for your custom domain — no HTTPS DNS record is required on your end.

---

### Step 4 — Add the GitHub Pages CNAME record for `www`

Add **one** new CNAME record:

| Type  | Host | Value                   | TTL       |
|-------|------|-------------------------|-----------|
| CNAME | www  | anoop-harhare.github.io | Automatic |

---

### Step 5 — Verify the custom domain in GitHub

1. Go to the repository **Settings → Pages**.
2. Under **Custom domain**, confirm `www.anviharhare.com` is entered and saved.
3. Check **Enforce HTTPS** once the SSL certificate has been issued (can take up to 24 hours after DNS propagates).

> The `CNAME` file at the root of this repository already contains `www.anviharhare.com`, so the GitHub Pages side is fully set up — only the Squarespace DNS changes above are needed.

---

### Step 6 — Wait for DNS propagation

DNS changes typically take a few minutes to a few hours, but can take up to 48 hours to fully propagate. You can check progress at [dnschecker.org](https://dnschecker.org) — search for `www.anviharhare.com` as a CNAME record and confirm it shows `anoop-harhare.github.io`.
