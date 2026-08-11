# Aspen Team Explainer

A small WordPress plugin for WooCommerce Memberships for Teams. It adds a **Team seat instructions** field to the parent product and displays the configured message beside the Teams fields for both simple and variable team products.

## Placeholders

- `%max_seats%` — the selected variation's or simple product's maximum member count.
- `%product_name%` — the parent product name.
- `%variation_name%` — the selected variation name (blank for simple products).

The message supports WordPress's safe post HTML. A message is hidden when the product/variation has no finite positive maximum member count.

## Installation

Copy this directory to `wp-content/plugins/aspen-team-explainer` and activate **Aspen Team Explainer**. WooCommerce and WooCommerce Memberships for Teams must also be active.
