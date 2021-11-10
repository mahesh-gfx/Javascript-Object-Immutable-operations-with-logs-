//Checking if "log" key is there in the local storage
console.log("Checking for Log in Local Storage");
if (localStorage.getItem("log") === null) {
  console.log("Log not found in local Storage! Creating One");
  window.log = [];
  saveToLocalStorage(log);
  console.log("Created Log Entry in Local Storage!");
} else {
  window.log = localStorage.getItem("log");
  console.log("Log found in Local Storage!");
}

//Function to save log in local Storage
function saveToLocalStorage(log) {
  localStorage.setItem("log", JSON.stringify(log));
}

//Function to check if passed parameter is a valid object
const isValidObject = (obj) => {
  if (obj && obj.constructor.name === "Object") return true;
  return false;
};

//function to create object
function createObject(obj) {
  if (obj && obj.constructor.name === "Object") {
    console.log("Creating object");
    var message = new Date() + ": Created Object";
    log += message;
    saveToLocalStorage(log);
    console.log(message);
    return obj;
  } else return false;
}

//function to update Key value in Object
function updateObject(obj, key, value) {
  if (checkForKey(obj, key)) {
    obj[key] = value;
    console.log("Key found, Updating key!");
    var message = new Date() + ": Updated Object";
    log += message;
    saveToLocalStorage(log);
    console.log(message);
    return true;
  }
  return false;
}

//function to check for Key in the object
function checkForKey(obj, key) {
  if (isValidObject(obj)) return obj.hasOwnProperty(key);
  else return false;
}

//Function to delete key from the Object
function deleteKeyFromObject(obj, key) {
  if (checkForKey(obj, key)) {
    console.log("Key found, Deleting key!");
    delete obj[key];
    var message = new Date() + ": Deleted Key from Object";
    log += message;
    saveToLocalStorage(log);
    console.log(message);
    return true;
  }
  return false;
}

//function to freeze object
function freezeObject(object) {
  if (object.constructor.name !== "Object")
    return "Please pass and Object as argument!";
  else {
    Object.freeze(object);
    console.log("Object Freeze operation successful on object!");
    var message = new Date() + ": Froze Object";
    log += message;
    saveToLocalStorage(log);
  }
}

//function to seal object
function sealObject(object) {
  if (object.constructor.name !== "Object")
    return "Please pass and Object as argument!";
  else {
    Object.seal(object);
    console.log("Object Seal operation successful on object!");
    var message = new Date() + ": Sealed Object";
    log += message;
    saveToLocalStorage(log);
  }
}

//Function to prevent extension for object
function preventExtension(object) {
  if (object.constructor.name !== "Object")
    return "Please pass and Object as argument!";
  else {
    Object.preventExtensions(object);
    console.log("Prevent Extension operation successful on object!");
    var message = new Date() + ": Activated Prevent Extension on Object";
    log += message;
    saveToLocalStorage(log);
  }
}

//Function to check if object is frozen
function checkIfFrozen(object) {
  if (object.constructor.name !== "Object")
    return "Please pass and Object as argument!";
  else {
    var check = Object.isFrozen(object);
    if (check == true) console.log("Object is frozen!");
    else console.log("Object is not frozen!");
    var message = new Date() + ": Checked if Object is Frozen";
    log += message;
    saveToLocalStorage(log);
  }
}

//Function to check if object is sealed
function checkIfSealed(object) {
  if (object.constructor.name !== "Object")
    return "Please pass and Object as argument!";
  else {
    var check = Object.isSealed(object);
    if (check == true) console.log("Object is Sealed!");
    else console.log("Object is not sealed!");
    var message = new Date() + ": Checked if Object is Sealed";
    log += message;
    saveToLocalStorage(log);
  }
}

//Function to check if object is Extensible
function checkIfExtensible(object) {
  if (object.constructor.name !== "Object")
    return "Please pass and Object as argument!";
  else {
    var check = Object.isExtensible(object);
    if (check == true) console.log("Object is Extensible!");
    else console.log("Object is not Extensible!");
    var message = new Date() + ": Checked if Object is Extensible";
    log += message;
    saveToLocalStorage(log);
  }
}
