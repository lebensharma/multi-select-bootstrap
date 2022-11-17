window.addEventListener('DOMContentLoaded', () => {
    const placeholder = "Please click to open the dropdown. You can Ctrl+Click to select multipe branch names.";
    const jsonFilePath = "static.json";
    const idOrNameToBeSuppliedToInput = "branches";
    DropdownMultiSelect(placeholder, jsonFilePath, idOrNameToBeSuppliedToInput);
});

const submitForm = (event) => {
    event.preventDefault();
    const multiSelect = event.target.elements.namedItem('branches');
    var selected = [...multiSelect.options]
        .filter((option) => option.selected)
        .map((option) => option.value);
    console.log(selected);
}