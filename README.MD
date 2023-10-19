# Cypress Tests For Kido O Clo Admin Dashboard
### Open Cypress With This Code
```bash
npx cypress open
```
## Destination Of the Files
cypress>>e2e/Simple Tests

## List Of Files With Functionalities:
### ***ADMIN DASHBOARD***
Contains Folders with Respective Tests:
1. ***Brand***:
   1. AddBrand
2. ***Coupon***:
   1. AddCoupon
   2. DeleteCoupon
3. ***Inventory***:
   1. DeleteTopInventory
   2. UpdateInventory
4. ***Products***:
   1. SearchProduct
5. ***Size***:
   1. AddSize
   2. DeleteSize
   3. SearchAndDeleteSize
6. ***Subscriptions***:
   1. SubscriptionCreate

### ***VERCEL APP***
1. Login 

### ***CUSTOM COMMANDS***
### ***These are Test Cases Written using Custom Commands which are stored at support>>command.js***
1. CreateBanner
2. CreateBrand
3. CreateCampaign
4. CreateCoupon
5. CreateSize
6. UpdateInventory

### ***POM TEST CASES***
### ***The Page Objects used in these prohrams are all stored at PomTestingLocators***
1. AddSize
2. Coupon
3. HomePage
4. NavToSize



