# Baseline [CarrieUnderwood]

Custom wordpress theme development for Sparkart **CarrieUnderwood Fanclub**

  
# Installation!

  - Create Database (DBName: carrieunderwood)
  - Import carrieunderwood.sql
  - update wp-config.php if required


### Other Information:
  - dev.carieunderwood/
  - username: admin
  - password: carrie1234

### Run the following
- $ cd <project-name>\wp-content\themes\sparkart
-   npm install
-   npm run build

# Dev Notes

### Login Protection
There are two CSS classes which will be appended to any element that is protected by login
- protected 
- block-protected

If there is an element that is not protected need un protected login it will have the following class
- block-unprotected