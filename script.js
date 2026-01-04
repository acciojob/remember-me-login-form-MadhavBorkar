    const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const checkbox = document.getElementById("checkbox");
        const existingBtn = document.getElementById("existing");
        const form = document.getElementById("loginForm");

        // Check for saved credentials on page load
        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (savedUsername && savedPassword) {
            existingBtn.style.display = "inline-block"; // Show the button if credentials exist
        }

        // Handle form submission
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission

            const username = usernameInput.value;
            const password = passwordInput.value;

            alert(`Logged in as ${username}`);

            if (checkbox.checked) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                existingBtn.style.display = "inline-block"; // Show the button if "Remember Me" is checked
            } else {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
                existingBtn.style.display = "none"; // Hide the button if "Remember Me" is unchecked
            }

            // Reset form fields
            usernameInput.value = '';
            passwordInput.value = '';
        });

        // Handle existing user login
        existingBtn.addEventListener("click", function () {
            const savedUsername = localStorage.getItem("username");
            alert(`Logged in as ${savedUsername}`);
        });