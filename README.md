# SWE Website README

Guide for managing and updating the SWE @ UCSD website.

## Data Folder Updates

For the most part, the majority of changes you need to make will be in the data directory. For example, updating information about board members, project teams, and sponsors can be done here. From the root of the project, navigate to `src/data` to access these files.

### Data File Overview

- **ContactInfo.js** – Contact icons and links in the website's footer (bottom of every page)

- **Events.js** – Event descriptions listed under the 'Our Events' section of the Get Involved page

- **Officers.js** – Board member information on the About page

- **OutreachEvents.js** – Outreach programs on the outreach page

- **Pages.js** – Includes information such as the name of each page in the navbar and the title text in the purple header on each page

- **Projects.js** – Descriptions about the project teams on the Projects page

- **Sponsors.js** – Sponsor images on the Sponsors page

### Updating information

To update website information from the data directory, open the file which pertains to the section you wish to change (while in `src/data`). For example, to change officer information, open **Officers.js**. Then follow these instructions:
1. To edit the file, click the pencil icon on the top right side of the file.
2. Make any desired changes to the contents of the file, following the comments in the file for further guidance.
3. Once you are satisfied with your changes, scroll to the bottom of the file to the `Commit changes` textbox. Add a title and description that briefly summarizes the changes you made.
4. Click `Commit changes` and your updates will be saved and should reflect directly on the live website!