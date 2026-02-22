# anviharhare
Anvi's Website — hosted on GitHub Pages at **https://anoop-harhare.github.io/anviharhare/** with the custom domain **www.anviharhare.com**.

---

## Squarespace DNS Configuration

The domain `www.anviharhare.com` is registered in Squarespace. Follow these steps to point it to GitHub Pages.

### Step 1 — Open Squarespace DNS Settings

1. Log in to your [Squarespace account](https://account.squarespace.com/).
2. From the **Home Menu**, click **Domains**.
3. Click on **anviharhare.com**.
4. Click **DNS Settings** (or **Advanced Settings → DNS**).

---

### Step 2 — Add a CNAME record for `www`

This makes `www.anviharhare.com` resolve to GitHub Pages.

| Type  | Host | Data / Points to              | TTL        |
|-------|------|-------------------------------|------------|
| CNAME | www  | anoop-harhare.github.io       | Automatic  |

> **Important:** The value must end with a `.` in some DNS editors. If Squarespace requires it, enter `anoop-harhare.github.io.` (with the trailing dot).

---

### Step 3 — Add A records for the apex domain (recommended)

These make the bare domain `anviharhare.com` (without `www`) also work and redirect to `www.anviharhare.com`.

Add **four** A records, all with `Host = @` (or leave the host field blank):

| Type | Host | Data (IP Address)  | TTL       |
|------|------|--------------------|-----------|
| A    | @    | 185.199.108.153    | Automatic |
| A    | @    | 185.199.109.153    | Automatic |
| A    | @    | 185.199.110.153    | Automatic |
| A    | @    | 185.199.111.153    | Automatic |

---

### Step 4 — Verify the custom domain in GitHub

1. Go to the repository **Settings → Pages**.
2. Under **Custom domain**, make sure `www.anviharhare.com` is entered and saved.
3. Check the **Enforce HTTPS** box once the certificate has been issued (may take up to 24 hours after DNS propagates).

> The `CNAME` file at the root of this repository already contains `www.anviharhare.com`, so GitHub Pages is already configured on the repository side. Only the Squarespace DNS records above need to be added.

---

### Step 5 — Wait for DNS propagation

DNS changes can take anywhere from a few minutes to 48 hours to propagate worldwide. You can check progress at [dnschecker.org](https://dnschecker.org) by looking up `www.anviharhare.com` as a CNAME record.
