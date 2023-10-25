# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


NOTES 10/25 *** IF YOU MERGE THIS INTO YOUR MAIN BRANCH, MAKE SURE TO PULL DOWN THE CHANGES USING GIT PULL ** 


[ ] Context API 
    - To implement the context API, you will need to wrap your application in the context Provider (just like React-Router). This allows you to use context throughout your application. 
    - Any data that needs to be used in multiple components (cart, user/authentication) should be stored in context. Information that is only needed in a single component does not need to be stored in context and can be stored in local state. 
    - You will need to create a context folder/file and then import it into the components in order to use it. 
    - Resources: 
        * https://react.dev/reference/react/createContext
        * https://www.freecodecamp.org/news/context-api-in-react/
[ ] Make a Cart Component 
    - User should be able to add products to cart 
    - From the cart, user should be able to adjust quantity of items / remove items. 
    - (once you have auth, you will need to make sure that only the authed user can see their cart )
    - Cart component will need buttons/something to add/remove from cart. Think about what you want to happen if:
        - A user adds the same item to the cart multiple times 
        - A user decreases the quantity of an item in their cart to 0 
    This will help you write the logic. 
    - From the cart, the user should be able to checkout (i.e. navigate to the checkout page, something happens that notifies user they have successfully checked out.)

[ ] Login/Logout component - Do the cart first, but this is something you will need to add. 