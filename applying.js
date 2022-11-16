window.addEventListener('DOMContentLoaded', () => {
    const CreateMultiSelectElement = async () => {
        await DropdownMultiSelect(placeholder, jsonFilePath, idOrNameToBeSuppliedToInput);
    }
    const placeholder = "Please click to open the dropdown. You can Ctrl+Click to select multipe branch names.";
    const jsonFilePath = "static.json";
    const idOrNameToBeSuppliedToInput = "branches";
    CreateMultiSelectElement()
        .then(() => {
            document.querySelector('select').multipleSelect();
        })
});