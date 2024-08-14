
# 🛠️ Utility Functions

**Utility Functions** is a collection of reusable, well-documented utility functions designed to streamline your development process. This repository provides a centralized place for common functions that can be easily shared and integrated across different projects, particularly in micro frontend architectures.

## 🌟 What is Utility Functions?

Utility Functions is a modular and extensible library of commonly used functions that simplify complex tasks. Whether it's handling string manipulations, class name conditions, or file operations, this library offers a set of tools that help maintain clean and DRY (Don't Repeat Yourself) code across your projects.

## 📦 Installation

To integrate Utility Functions into your project using Git Submodules:

```
git submodule add https://github.com/heba-elsafty/utility-functions.git utils
```

This will clone the utility functions repository into a `utils` directory in your project, allowing you to import and use the functions directly.

## 🔄 Managing Git Submodules

### ⬆️ Updating the Submodule 
If you make any updates to the shared repository, you can update the Submodule in your projects using the following commands:

 ```
 git submodule update --remote
 ```

 ### 🗑️ Removing the Submodule (if necessary)

If you decide to remove the Submodule at any time, you can do so with the following commands:

```
git submodule deinit -f utils
git rm -f utils
git commit -m "Removed Submodule"
rm -rf .git/modules/utils
```
   

## 🚀 How to Use

### Example: Rename CSS Files Dynamically

One of the available functions is `renameCssFile`, which allows you to rename CSS files dynamically in your build process.

```typescript:
import { renameCssFile } from './utils/renameCssFile';

renameCssFile('fileName.module.css', 'fileName.module.min.css');
```

This function takes the original filename and the new filename as arguments, renaming the file accordingly.

### Example: Class Name Utility

Another useful function is `clx`, a utility for conditionally joining class names together.

```typescript
import { clx } from './utils/clx';

const className = clx('btn', { 'btn-primary': isActive, 'btn-disabled': isDisabled });
console.log(className); // Output: "btn btn-primary"
```

## 🎯 Benefits of Using Utility Functions

- **Centralized Codebase:** Keep your common functions in one place, ensuring consistency across all your projects.
- **Reusable Components:** Write once, use everywhere. Avoid duplication and reduce maintenance overhead.
- **Easier Collaboration:** Share your utility functions across teams or projects effortlessly.
- **Scalability:** Easily extend the library with new functions as your projects grow.


## 🛠️ Contributing

Contributions are welcome! If you have a utility function that could benefit others, feel free to submit a pull request. Please ensure your code is well-documented and tested.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### 🛠️ Example Functions in This Library:

- **`renameCssFile(oldFilename: string, newFilename: string): void`** - Renames a CSS file.
- **`clx(...classnames: (string | string[] | { [key: string]: boolean })[]): string`** - Conditionally joins class names together.
- *More to come as the library evolves...*

