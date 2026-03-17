# GitHub Packages Publishing Guide

## Step 1: Generate GitHub Personal Access Token

1. Go to GitHub.com → Settings (top right profile menu)
2. Click **Developer settings** (bottom of left sidebar)
3. Select **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. Give it a name: `npm-publish-laneway`
6. Set expiration: 90 days (or custom)
7. Select scopes: ✅ `write:packages` (this includes read:packages)
8. Click **Generate token**
9. **Copy and save the token somewhere safe** (you won't see it again)

## Step 2: Configure `.npmrc`

### Option A: Global Configuration (Recommended)
Creates a home-level `.npmrc` that works for all projects:

```bash
npm config set @laneway:registry https://npm.pkg.github.com
npm config set //npm.pkg.github.com/:_authToken YOUR_GITHUB_TOKEN
```

### Option B: Project-Level Configuration
Create `.npmrc` in your project root:

```
@laneway:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

**Replace `YOUR_GITHUB_TOKEN` with your actual GitHub Personal Access Token**

## Step 3: Verify Configuration

Test if npm can access GitHub Packages:

```bash
npm view @laneway/shared-types
```

If successful, you should see package information (or a 404 if not published yet).

## Step 4: Push Changes to GitHub

```bash
cd C:\Users\abdul\OneDrive\Desktop\laneway-shared-types

# Add all files
git add .

# Commit
git commit -m "Initial setup: Add shared types, enums, and interfaces"

# Push to GitHub
git push -u origin main
```

## Step 5: Publish to GitHub Packages

### First Time Publishing

```bash
npm publish
```

You should see:
```
npm notice 
npm notice 📦  @laneway/shared-types@1.0.0
npm notice === Tarball Contents ===
npm notice ...
npm notice === Dist Files ===
npm notice dist/index.d.ts
npm notice dist/index.js
...
```

### Publishing Updates

When you make changes:

1. Update version in `package.json`:
```json
{
  "version": "1.0.1"
}
```

2. Rebuild:
```bash
npm run build
```

3. Commit and push:
```bash
git add .
git commit -m "v1.0.1: Update type definitions"
git push
```

4. Publish:
```bash
npm publish
```

## Step 6: Install in Other Projects

In any Laneway project, install the package:

```bash
npm install @laneway/shared-types
```

Or add to `package.json`:
```json
{
  "dependencies": {
    "@laneway/shared-types": "^1.0.0"
  }
}
```

Then run:
```bash
npm install
```

## Step 7: Use in Your Projects

### React Native / Expo
```typescript
import type {
  Listing,
  Bid,
  Transaction,
  ListingStatus,
} from '@laneway/shared-types';

const myListing: Listing = {
  id: '123',
  title: '2023 Toyota Camry',
  // ... other properties
};
```

### Backend (Node.js/Express)
```typescript
import {
  Listing,
  ApiResponse,
  ListingStatus,
} from '@laneway/shared-types';

app.get('/listings/:id', (req, res) => {
  const response: ApiResponse<Listing> = {
    success: true,
    data: {/* ... */},
  };
  res.json(response);
});
```

## Troubleshooting

### Error: 401 Unauthorized
- **Issue:** Token is invalid, expired, or `.npmrc` not configured correctly
- **Solution:** 
  - Generate a new token on GitHub
  - Update `.npmrc` with new token
  - Clear npm cache: `npm cache clean --force`

### Error: 403 Forbidden
- **Issue:** Token doesn't have `write:packages` scope
- **Solution:** Generate new token with `write:packages` scope

### Error: Package not found
- **Issue:** Package hasn't been published yet
- **Solution:** Run `npm publish` from the laneway-shared-types directory

### ENOENT: no such file or directory
- **Issue:** `.npmrc` file or token issues
- **Solution:** 
  - Verify `.npmrc` exists and is in correct location
  - Verify token has no typos
  - Run: `npm config list` to see current config

## Useful Commands

```bash
# View all your npm config
npm config list

# List packages in your GitHub organization
npm view @laneway:all

# View specific package info
npm view @laneway/shared-types

# Clear npm cache
npm cache clean --force

# List of your published packages
npm profile get

# unpublish (use with caution - can only unpublish within 72 hours)
npm unpublish @laneway/shared-types@1.0.0
```

## Next Steps After Publishing

1. Update all Laneway projects to use the published package
2. Remove local type definitions from individual projects
3. Import types from `@laneway/shared-types` instead
4. Add package to your workspace dependencies

## Resources

- [GitHub Packages NPM Documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
- [Creating & Managing Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)
