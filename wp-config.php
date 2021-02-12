<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'carrieunderwood' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '73?+`sS]|e%m4iQKL;ZCBJI+fS{0Q#!ffLfmn7`$r-ypBPFNH?V-zB n[L=1`N`%' );
define( 'SECURE_AUTH_KEY',  '0 F816V6?x?;b^6b9thTMKGaAP#32#X62l4yW%B|g >OqTOCSH0SA-m`Hd,P3CTl' );
define( 'LOGGED_IN_KEY',    '^vrDT,X6o!F,Iw%g<]DeIBHS;%{9KXTq;?SeWgF$O+%gTfYLLPK2o1 T;7,1*9ZK' );
define( 'NONCE_KEY',        '0`%B#s;/OxifNU(b&,LsVJ!t%q94tdo|yl :i[~XGzuN,#5tB:t`?P#$,NGRyDai' );
define( 'AUTH_SALT',        '*_C+6=}2oxXW43zb/X%K]9^nW ^3CS`Orc$^zzHc9`n,l?#LYg(.p:Ls+])[YT(^' );
define( 'SECURE_AUTH_SALT', '?V7& dQ|.y^2<8#fkn0,IYQS5/`Vh=jy0B0U`>Shis1!l{AfejrC#u,-xbbL+9ud' );
define( 'LOGGED_IN_SALT',   'n2Es34O6izerB4Lyv{w>6!:%74J]K/dOW} 1@s!A^po^Da.mh@qY=SF<.U{rM&J!' );
define( 'NONCE_SALT',       'Pjj p<-<r,8PKC4H`TGE=Y#e.LkRBm-**hWBxVOq>o2sR5lm:TZs*9&%S;ZUSe%l' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
