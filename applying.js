window.addEventListener('DOMContentLoaded', () => {
    const placeholder = "Please click to open the dropdown. You can Ctrl+Click to select multipe branch names.";
    const jsonFilePath = "static.json";
    const idOrNameToBeSuppliedToInput = "branches";
    DropdownMultiSelect(placeholder, jsonFilePath, idOrNameToBeSuppliedToInput);
});