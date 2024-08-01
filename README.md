# Ad Banner Management

## Overview

This project enables the display and management of ad banners on a homepage. The ad banners are powered by a JSON list and include functionalities for editing and updating banner details. The project is structured with modular and reusable components for easy maintenance and scalability.

## Features

- **Display Ad Banners**: 
  - List of ad banners powered by a JSON list.
  - Each banner includes:
    - Title
    - Description
    - Call-to-Action (CTA)
    - Image
    - Background/Template

- **Edit Functionality**:
  - Each ad banner has an edit icon.
  - Clicking the edit icon opens a bottom sheet for modifying banner details.
  - Updated details are reflected in the banner once changes are saved.

## Component Structure

1. **Ad Banner Component** (`BannerImageComp`):
   - A reusable component to display ad banners.
   - Properties: `title`, `description`, `cta`, `image`, `background`.

2. **Bottom Sheet Edit Component** (`EditBannerTemplateBs`):
   - A separate component for editing ad banner details.
   - Includes form elements for `title`, `description`, `cta`, `image`, and `background`.
   - Utilizes a bottom sheet modal for user interactions.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Navigate to the project directory:
    ```bash
    cd your-repository
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## Usage

- **Displaying Banners**: 
  - The homepage component fetches and displays banners based on the JSON list.
  - Ensure the JSON list is formatted correctly and includes the necessary fields.

- **Editing Banners**:
  - Click the edit icon on any ad banner to open the bottom sheet.
  - Modify the details in the bottom sheet form and save changes.
  - The banner updates with the new details upon saving.

## JSON Structure

The JSON list should follow this format:

```json
[
  {
    "title": "Ad Banner Title",
    "description": "Ad Banner Description",
    "cta": "Call-to-Action Text",
    "image": "URL to Image",
    "background": "URL to Background Template"
  }
]
