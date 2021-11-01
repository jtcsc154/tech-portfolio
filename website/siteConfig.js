/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

const siteConfig = {
    title: 'JTCSC Portfolio',
    tagline: 'An empty portfolio',
    url: 'https://github.com/jtcsc154', // Your website URL
    baseUrl: '/tech-portfolio/', // Base URL for your project */

    // Used for publishing and more
    projectName: 'tech-portfolio',
    organizationName: 'No organization',

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        { doc: "about", label: "About" },
        { doc: "projects", label: "Projects" },
        // Links to blog generated by Docusaurus (${baseUrl}blog)
        { blog: true, label: "Blog" },
    ],

    // If you have users set above, you add it here:
    users,

    favicon: 'img/favicon.ico',

    /* Colors for website */
    colors: {
        primaryColor: '#2C312E',
        secondaryColor: '#72C3E7',
    },

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} Your Name Here`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    cleanUrl: true,

    // Show documentation's last update time.
    enableUpdateTime: true,

    socialMedia: {
        linkedin: '',
        twitter: '',
        github: 'jtcsc156',
    },
};

module.exports = siteConfig;
