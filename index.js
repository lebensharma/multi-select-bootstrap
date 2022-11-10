const consoleValue = () => {
    const multiSelect = document.getElementById("branches");
    console.log(multiSelect);
    var selected = [...multiSelect.options]
        .filter((option) => option.selected)
        .map((option) => option.value);
    console.log(selected);
    appendValues(selected);
};

const appendValues = (arrayValues) => {
    const multiSelectBox = document.getElementById("selected_values");
    multiSelectBox.innerHTML = "";
      if (arrayValues.length) {
        arrayValues.forEach((value) => {
          const childElement = document.createElement("div");
          childElement.classList.add("selected_sticker");
          const textInside = document.createTextNode(value);
          childElement.appendChild(textInside);
          multiSelectBox.appendChild(childElement);
        });
      } else {
          const textInside = document.createTextNode("Please click to open the dropdown. You can Ctrl+Click to select multipe branch names.");
          multiSelectBox.appendChild(textInside);
      }
};

const toggleDrowdownButton = async (event) => {
    const dropdownList = document.getElementById("branches");
<<<<<<< HEAD
    console.log(dropdownList.classList);
=======
    // console.log(dropdownList.classList);
>>>>>>> 11596f9a3c030724da62e56017fb41d73455cd6a
    if (dropdownList.classList.contains("showing")) {
        dropdownList.classList.remove("showing")
    } else {
        dropdownList.classList.add("showing")
    }
    await mapOptions(event.currentTarget.options);
}

const mapOptions = async (options) => {
    const multiSelectElement = document.getElementById("branches");
    if (multiSelectElement.childElementCount === options.length) return;
    options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        const textInsideOption = document.createTextNode(option.name);
        optionElement.appendChild(textInsideOption);
        multiSelectElement.appendChild(optionElement);
    })
}

const createDropdownElement = (placeholder, options) => {
    const parentComponent = document.getElementById("multi_select_component_body");

    // creating element and adding class & id and adding eventListener
    const dropdownBoxComponent = document.createElement("div");
    dropdownBoxComponent.classList.add("selected_values");
    dropdownBoxComponent.id = "selected_values";
    dropdownBoxComponent.addEventListener("click", toggleDrowdownButton);
    dropdownBoxComponent.options = options;

    // entering text
    const dropdownBoxComponentTextNode = document.createTextNode(placeholder);
    dropdownBoxComponent.appendChild(dropdownBoxComponentTextNode);

    
    const selectComponent = document.createElement("select");
    selectComponent.classList.add("form-select", "unshowing");
    selectComponent.id = "branches";
    selectComponent.addEventListener("change", consoleValue);
<<<<<<< HEAD
    selectComponent.addEventListener("blur", toggleDrowdownButton);
=======
>>>>>>> 11596f9a3c030724da62e56017fb41d73455cd6a
    selectComponent.setAttribute("multiple", true);
    
    // adding above created input field type component in the box
    if (parentComponent && dropdownBoxComponent && selectComponent) {
        parentComponent.appendChild(dropdownBoxComponent);
        parentComponent.appendChild(selectComponent);
    }
}

const DropdownMultiSelect = (placeholder, jsonFilePath) => {
    fetch(jsonFilePath)
        .then(json_options => {
            json_options.json()
            .then(options => {
                console.log(options);
                createDropdownElement(placeholder, options);
            })
        });
}

const submitForm = (event) => {
    event.preventDefault();
    const multiSelect = event.target.elements.namedItem('branches');
    var selected = [...multiSelect.options]
        .filter((option) => option.selected)
        .map((option) => option.value);
    console.log(selected);
}

