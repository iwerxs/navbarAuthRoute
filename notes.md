## dynamic navbar

Ensure that your AuthContext is set up to store the complete user data upon login, not just the email or token. For example, when the user logs in, you might want to save their name along with other credentials:

Modifid Navbar component to include a welcome message that displays the user's name when they are logged in:

The Navbar checks if there is a user object. If a user is logged in, it displays a welcome message using the user's name, which should be a property of the user object stored in the context.
