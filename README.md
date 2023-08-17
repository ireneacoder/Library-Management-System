# Library Management System 📚

A web application-based library management system built using Flask, ReactJs, and SQLite. This web app allows a librarian to track books, manage members, and keep track of members' debt. 

## Table of Contents 📑

- [Installation](#installation)
- [Requirements](#requirements)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Installation 🛠️

To set up the project locally, follow these steps:

1. Go to the target folder where you want to build your project. For example: `C:\Users\ASUS>`

2. Open a terminal and initialize Git:

    ```bash
    git init
    ```

3. Clone the repository:

   ```bash
   git clone https://github.com/ireneacoder/Library-Management-System.git
   ```

4. To install the required backend dependencies, navigate to the `library-backend-main` directory:

   ```bash
   cd library-backend-main
   pip install -r requirements.txt
   ```

5. Open a new terminal in your main folder and install frontend dependencies:

    ```bash
    npm install
    ```

ThE frontend is also hosted globally on [Vercel](https://library-management-system-six.vercel.app/).

To run the globally hosted version:

1. Go to the target folder where you want to build your project. For example: `C:\Users\ASUS>`

2. Clone the `library-backend-main` folder in the target folder:

    ```bash
    git clone --depth=1 --filter=blob:none https://github.com/ireneacoder/Library-Management-System.git --path library-backend-main
    ```

3. Navigate to the `library-backend-main` directory:

    ```bash
    cd library-backend-main
    ```

4. Install the backend dependencies:

    ```bash
    pip install -r requirements.txt
    ```
5. In the target folder cd to the api folder by the following command:
    ```bash 
    cd library-backend-main/api
    ```
5. Open a terminal in the target folder and run the following command to start the backend server:

```bash 
python index.py
```

5. Access the application in your browser.

## Requirements 📋

* Python 3 or above (preferably Python version >= **Python v3.8**)
* Pip package manager for installing Python packages.
* Nodejs & NPM Package Manager for frontend.

## Screenshots 📸

* Homepage:\
 ![Hompage](https://github.com/ireneacoder/Library-Management-System/assets/63922114/f74854a6-cc97-431f-bdf3-e4f71f64bf45)
* Books:\
![Screenshot 2023-08-17 080304](https://github.com/ireneacoder/Library-Management-System/assets/63922114/2a9dd39f-574b-43f7-8bd6-c4bc59d6da33)
* Make Updates:\
![Make Updates](https://github.com/ireneacoder/Library-Management-System/assets/63922114/862922d0-90b2-4020-b261-6b274a6ed0a0)
* Members:\
![Members](https://github.com/ireneacoder/Library-Management-System/assets/63922114/ed64cdbf-b38a-4dc1-ad3b-fe9d49963c01)
* Issue Book:\
![Issue Book](https://github.com/ireneacoder/Library-Management-System/assets/63922114/80e365df-40ac-48e1-95b4-6c4634e1cfc3)
* Return Book:\
![Return Book](https://github.com/ireneacoder/Library-Management-System/assets/63922114/c83d2426-0ed1-4807-9a35-fa76cac4c529)
* Update Details:\
![Update Details](https://github.com/ireneacoder/Library-Management-System/assets/63922114/f1afca04-8a32-42c2-90d1-353f96ac6eb7)
* Delete Member:\
![Delete Member](https://github.com/ireneacoder/Library-Management-System/assets/63922114/65dd4707-45c0-4c86-b755-69ebf95e23f6)
* Transaction:\
![Transactions](https://github.com/ireneacoder/Library-Management-System/assets/63922114/6a2374b6-e769-4a27-a7d8-de593de49b0a)

## Usage 🚀

Once the project is set up and running, users can perform various actions:

- **Search Books**: Search for a particular book.
- **Update Books**: Make updates to book status (in stock or out of stock).
- **Create Members**: Add new members.
- **Search Member**: Search for members.
- **Delete Member**: Remove a member.
- **Update Member**: Update member details.
- **Issue Book**: Issue books to members.
- **Return Book**: Allow members to return books.
- **Clear Debt**: Clear member debts.

## Features ✨

- CRUD operations on books database using Frappe API.
- CRUD operations on members database using Frappe API.
- User-friendly interface.

## Contributing 🤝

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request describing your changes and referencing related issues.

Please ensure your code adheres to the existing style and includes appropriate test coverage.

## License 📄

This project is licensed under the [MIT License](LICENSE).

## Support 📞

If you encounter issues or have questions/suggestions, [open an issue](https://github.com/ireneacoder/Library-Management-System) in this repository. We value your feedback and will assist you.

## Authors 👩‍💻

- [PRERNA VERMA](https://github.com/ireneacoder) - Project Lead

## Project Status 🚀

🚀 Deployment: This project is currently live and operational.

🛑 Updates: We are not actively updating the project at the moment. Please refer to the project roadmap for upcoming enhancements and features. Your feedback is valuable to us!
