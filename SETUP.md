# @laneway/shared-types - Complete Setup Guide

## ✅ What's Been Done

Your `@laneway/shared-types` package is ready! Here's what has been created:

### Package Structure
```
laneway-shared-types/
├── src/
│   ├── enums.ts                    # All enums (25+ types)
│   ├── types.ts                    # Type definitions
│   ├── interfaces/
│   │   └── index.ts                # 30+ interfaces
│   └── index.ts                    # Main export file
├── dist/                           # ✅ Compiled output (ready)
├── package.json                    # NPM package config
├── tsconfig.json                   # TypeScript config
├── README.md                       # Package documentation
├── PUBLISHING_GUIDE.md             # Publishing instructions
├── .npmrc.template                 # Template for authentication
├── .gitignore                      # Git ignore file
└── .git/                          # Git repository
```

### Included Types

**Enums (25+ types)**
- ListingStatus, TransactionStatus, ContractStatus, AppraisalStatus
- ActivityType, ThemeMode, TextVariant, TextWeight
- Plus union type equivalents for backwards compatibility

**Interfaces (30+ interfaces)**
- Listing, Bid, Message, Conversation
- Transaction, Contract, Appraisal, DealerReview
- SellerProfile, Buyer, BuyerPreferences
- Theme, ThemeColors, ITextProps
- SearchResults, Notification, FormState, and more

**Types (50+ type definitions)**
- ApiResponse, PaginatedApiResponse, ErrorResponse
- Vehicle types (TransmissionType, DrivetrainType, VehicleBodyType, FuelType)
- Search & Filter types (ListingFilterCriteria, PriceRange, MileageRange)
- Design tokens (Color, ShadowDefinition, TypographyDef, etc.)

## 📋 Next Steps to Publish

### Step 1: Generate GitHub Token (One-time)

1. Go to [GitHub Settings → Developer Settings → Personal Access Tokens](https://github.com/settings/tokens/new?scopes=write:packages)
2. Create token with name: `npm-publish-laneway`
3. Select scope: ✅ `write:packages` (includes read:packages)
4. Click "Generate token"
5. **Copy the token** (shown only once!)

### Step 2: Configure npm Authentication

Choose **one** option:

#### Option A: Global Configuration (Recommended)
```powershell
# Run these commands (replace with your actual token)
npm config set @laneway:registry https://npm.pkg.github.com
npm config set //npm.pkg.github.com/:_authToken ghp_YOUR_TOKEN_HERE
```

#### Option B: Create `.npmrc` file
In your project root, create `.npmrc`:
```
@laneway:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=ghp_YOUR_TOKEN_HERE
```

Then add `.npmrc` to `.gitignore` (don't commit your token!)

### Step 3: Push to GitHub

```powershell
cd C:\Users\abdul\OneDrive\Desktop\laneway-shared-types

# Add files to git
git add .

# Commit
git commit -m "Initial release: Shared types, enums, and interfaces

- Add 25+ enums including ListingStatus, TransactionStatus, etc.
- Add 30+ interfaces for core entities (Listing, Bid, Message, etc.)
- Add 50+ type definitions for design system and utilities
- Build system configured with TypeScript
- Package ready for GitHub Packages publishing"

# Push to GitHub
git push -u origin main
```

### Step 4: Publish to npm

```powershell
cd C:\Users\abdul\OneDrive\Desktop\laneway-shared-types
npm publish
```

Expected output:
```
npm notice
npm notice 📦  @laneway/shared-types@1.0.0
npm notice === Tarball Contents ===
npm notice dist/enums.d.ts
npm notice dist/enums.js
npm notice dist/types.d.ts
npm notice dist/types.js
npm notice dist/interfaces/index.d.ts
npm notice dist/interfaces/index.js
npm notice dist/index.d.ts
npm notice dist/index.js
npm notice + 4 files
npm notice ===== Dist Files =====
npm notice dist/enums.d.ts
npm notice dist/enums.d.ts.map
npm notice dist/enums.js
npm notice dist/enums.js.map
npm notice dist/index.d.ts
npm notice dist/index.d.ts.map
npm notice dist/index.js
npm notice dist/index.js.map
npm notice dist/interfaces/index.d.ts
npm notice dist/interfaces/index.d.ts.map
npm notice dist/interfaces/index.js
npm notice dist/interfaces/index.js.map
npm notice dist/types.d.ts
npm notice dist/types.d.ts.map
npm notice dist/types.js
npm notice dist/types.js.map
npm notice 📦  @laneway/shared-types@1.0.0
```

✅ **Package Published!**

## 🔍 Verify Package is Published

```powershell
npm view @laneway/shared-types
# or visit https://github.com/abdulrehman-collab/laneway-shared-types/packages
```

## 📦 Install in Your Projects

### For mobile-react-native, mobile-react-native-v2, mobile-react-native-v3:

```bash
# In each project root
npm install @laneway/shared-types

# Update tsconfig.json paths (if using path aliases)
# Update import statements to use the package
```

### Example: Update imports in your mobile projects

**Before:**
```typescript
import { Listing, Bid } from '@/constants/mockData';
import { TransactionStatus } from '@/constants/mockData';
```

**After:**
```typescript
import type { Listing, Bid, TransactionStatus } from '@laneway/shared-types';
```

## 🔄 Update Workflow

When you add new types or fix bugs:

1. Edit files in `src/`
2. Run `npm run build`
3. Test in consuming projects (via `npm link` if local)
4. Update version in `package.json` (1.0.0 → 1.0.1 or 1.1.0)
5. Commit: `git commit -m "v1.0.1: Add new types"`
6. Push: `git push`
7. Publish: `npm publish`

## 📖 What's Exported

Users can import everything:

```typescript
// Enums
import { ListingStatus, TransactionStatus, ActivityType } from '@laneway/shared-types';

// Interfaces
import type { Listing, Transaction, Message, Theme } from '@laneway/shared-types';

// Types
import type { ApiResponse, SearchResults, FormState } from '@laneway/shared-types';

// All together
import * as LanewayTypes from '@laneway/shared-types';
```

## 🆘 Troubleshooting

| Error | Solution |
|-------|----------|
| **401 Unauthorized** | Token invalid or expired. Generate new token and update `.npmrc` |
| **403 Forbidden** | Token missing `write:packages` scope. Generate new token |
| **404 Not found** | Package not published yet. Run `npm publish` |
| **ENOENT: no such file** | `.npmrc` not found or token not set. Check npm config or create `.npmrc` |

Run `npm config list` to verify your configuration.

## 📚 Documentation

- **README.md** - Package overview and usage
- **PUBLISHING_GUIDE.md** - Detailed publishing instructions  
- **.npmrc.template** - Template for authentication setup

## ✨ Package Features

✅ **25+ Enums** for consistent status/type values
✅ **30+ Interfaces** for type-safe data structures
✅ **50+ Type Definitions** for comprehensive type coverage
✅ **Full TypeScript Support** with source maps and declarations
✅ **Zero Dependencies** - lightweight and fast
✅ **Well Documented** - JSDoc comments on all exports
✅ **Backward Compatible** - Union types for migration
✅ **Always Up-to-date** - Easy to maintain single source of truth

## 🎯 Success Checklist

- [ ] Generated GitHub Personal Access Token
- [ ] Configured npm authentication (.npmrc)
- [ ] Pushed changes to GitHub
- [ ] Published to GitHub Packages (`npm publish`)
- [ ] Verified package is accessible
- [ ] Updated mobile projects to use `@laneway/shared-types`
- [ ] Updated backend to use `@laneway/shared-types`
- [ ] Removed duplicate type definitions from individual projects
- [ ] Updated CI/CD to pull from package registry

## 💡 Pro Tips

1. **Lock versions in CI/CD** - Use exact version pins in production
2. **Semantic Versioning** - Follow MAJOR.MINOR.PATCH
3. **Keep it focused** - Only shared types in this package
4. **Document changes** - Maintain CHANGELOG.md for major updates
5. **Test locally first** - Use `npm link` before publishing

## 🚀 Ready to Publish!

```powershell
# All done! Just run:
npm publish

# View your package at:
# https://github.com/abdulrehman-collab/laneway-shared-types/packages
```

Need help? Check PUBLISHING_GUIDE.md for detailed step-by-step instructions!
