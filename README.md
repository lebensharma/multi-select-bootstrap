<<<<<<< HEAD
This is a simple bootstrapped multiselect.
=======
This is a simple bootstrapped multiselect.

To add in HTML file where you want to place the dropdown multi select.
<div class="multi_select_component_body" id="multi_select_component_body"></div>

To add in Javascript File.
window.addEventListener('DOMContentLoaded', () => {
    // Placeholder you want to supply to it.
    const placeholder = "Please click to open the dropdown. You can Ctrl+Click to select multipe branch names.";
    // path of the JSON
    const jsonFilePath = "static.json";
    DropdownMultiSelect(placeholder, jsonFilePath);
});
>>>>>>> 11596f9a3c030724da62e56017fb41d73455cd6a
