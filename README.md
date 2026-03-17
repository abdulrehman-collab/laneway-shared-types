# @laneway/shared-types

Shared TypeScript types, enums, DTOs, and interfaces for the Laneway platform. This package provides centralized type definitions used across all Laneway modules (mobile apps, backend services, and web applications).

## Installation

### Using npm with GitHub Packages

```bash
npm install @laneway/shared-types
```

### Using yarn with GitHub Packages

```bash
yarn add @laneway/shared-types
```

### Setup GitHub Authentication

Create a `.npmrc` file in your project root or home directory:

```
@laneway:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

**Generate a Personal Access Token:**
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Create a new token with `read:packages` permission
3. Copy the token and add it to `.npmrc`

## Usage

### Import Types

```typescript
import {
  Listing,
  Bid,
  Transaction,
  Contract,
  Appraisal,
  DealerReview,
  Message,
  Conversation,
  Theme,
  ThemeMode,
} from '@laneway/shared-types';
```

### Import Enums

```typescript
import {
  ListingStatus,
  TransactionStatus,
  ContractStatus,
  AppraisalStatus,
  ActivityType,
  ThemeMode,
} from '@laneway/shared-types';
```

### Import Type Utilities

```typescript
import type {
  ApiResponse,
  PaginatedApiResponse,
  SearchResults,
  Notification,
  FormValidationResult,
} from '@laneway/shared-types';
```

## Package Contents

### Enums
- `ListingStatus` - Vehicle listing statuses (active, sold, expired, draft)
- `TransactionStatus` - Transaction statuses (completed, pending, cancelled)
- `ContractStatus` - Contract statuses (pending_signature, in_progress, completed, expired)
- `AppraisalStatus` - Appraisal statuses (requested, in_progress, completed)
- `ActivityType` - Activity types (transaction, contract, appraisal, review)
- `ThemeMode` - Theme modes (light, dark)

### Interfaces

#### Vehicle & Listing
- `Listing` - Core vehicle listing data
- `Bid` - Auction bid information

#### Messaging
- `Message` - Individual message
- `Conversation` - Message thread/conversation

#### Transactions
- `Transaction` - Purchase/Sale transaction record
- `Contract` - Purchase/Sale contract
- `Appraisal` - Vehicle appraisal data
- `DealerReview` - Dealer/Seller review

#### User & Seller
- `SellerProfile` - Seller/Dealer profile
- `Buyer` - Buyer information
- `BuyerPreferences` - Buyer preferences

#### Theme & UI
- `Theme` - Complete theme definition
- `ThemeColors` - Theme color palette
- `ITextProps` - Text component properties

### Type Definitions
- `ApiResponse<T>` - Standard API response wrapper
- `PaginatedApiResponse<T>` - Paginated API response
- `SearchResults<T>` - Search results wrapper
- `FormState<T>` - Form state management
- `Notification` - Notification object
- And many more...

## Type Categories

### Design System Types
- Colors, fonts, spacing, radius, shadows, typography definitions

### Vehicle Types
- `VehicleBodyType`, `FuelType`, `TransmissionType`, `DrivetrainType`

### Search & Filter Types
- `ListingFilterCriteria`, `ListingSearchQuery`, `PriceRange`, `MileageRange`

### Messaging Types
- `Message`, `Conversation`, `OnlineStatus`

### Transaction Types
- `Transaction`, `Contract`, `Appraisal`, `DealerReview`

## Building

```bash
npm run build
```

This will compile TypeScript files to JavaScript and generate type definitions in the `dist/` directory.

## Publishing

The package is automatically published to GitHub Packages upon release. To publish manually:

```bash
npm publish
```

**Note:** Ensure your `.npmrc` is configured with proper GitHub authentication.

## Development

### Local Development

```bash
# Clone the repository
git clone https://github.com/abdulrehman-collab/laneway-shared-types.git
cd laneway-shared-types

# Install dependencies
npm install

# Build the package
npm run build

# Clean dist folder
npm run clean
```

### Testing in Local Projects

Link the package locally for testing:

```bash
# In laneway-shared-types directory
npm link

# In your project directory
npm link @laneway/shared-types
```

## Version History

- **1.0.0** - Initial release with core types, enums, and interfaces

## License

MIT

## Support

For issues, questions, or contributions, please visit:
[Laneway Shared Types GitHub Repository](https://github.com/abdulrehman-collab/laneway-shared-types)

## Maintainers

Laneway development team

## Contributing

Contributions are welcome! Please ensure all types are properly documented and follow the existing pattern.
